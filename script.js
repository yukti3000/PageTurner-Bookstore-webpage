let cart = JSON.parse(localStorage.getItem("cart")) || []

/* DISPLAY BOOKS */

function displayBooks(list, containerId){

const container = document.getElementById(containerId)

if(!container) return

container.innerHTML = ""

list.forEach(book => {

const card = document.createElement("div")

card.className = "book"

/* Detect correct path */

let bookPage = "pages/book.html"

if(window.location.pathname.includes("/pages/")){
bookPage = "book.html"
}

card.innerHTML = `

<a href="${bookPage}?id=${book.id}">
<img src="${book.image}" 
onerror="this.src='https://covers.openlibrary.org/b/id/10523338-L.jpg'">
</a>

<h3>${book.title}</h3>
<p>${book.author}</p>
<p class="rating">⭐ ${book.rating}</p>
<p>₹${book.price}</p>

<div class="book-buttons">

<button onclick="addToCart(${book.id})">
Add to Cart
</button>

<a href="${bookPage}?id=${book.id}">
<button class="buy-btn">
View Details
</button>
</a>

</div>
`

container.appendChild(card)

})

}


/* ADD TO CART */

function addToCart(id){

const book = books.find(b => b.id === id)

const existing = cart.find(item => item.id === id)

if(existing){
existing.quantity++
}else{
cart.push({...book, quantity:1})
}

localStorage.setItem("cart", JSON.stringify(cart))

updateCartCount()

showCartMessage()

}


/* CART MESSAGE */

function showCartMessage(){

const msg = document.createElement("div")

msg.className = "cart-message"

msg.innerText = "Book added to cart ✔"

document.body.appendChild(msg)

setTimeout(()=>{
msg.remove()
},2000)

}


/* CART COUNT */

function updateCartCount(){

const count = cart.reduce((total,item)=>total + item.quantity,0)

const badge = document.getElementById("cartCount")

if(badge){
badge.textContent = count
}

}

updateCartCount()


/* FEATURED BOOKS */

if(typeof books !== "undefined"){

const featured = books.slice(0,6)

displayBooks(featured,"featuredBooks")

}


/* RECOMMENDED BOOKS */

if(typeof books !== "undefined"){

const recommended = books.slice(10,16)

displayBooks(recommended,"recommendedBooks")

}


/* SEARCH SUGGESTIONS */

function showSuggestions(){

const input = document.getElementById("searchBar")?.value.toLowerCase()

const box = document.getElementById("suggestions")

if(!input || !box) return

box.innerHTML = ""

if(input.length < 2) return

const results = books
.filter(book => book.title.toLowerCase().includes(input))
.slice(0,5)

results.forEach(book => {

let bookPage = "pages/book.html"

if(window.location.pathname.includes("/pages/")){
bookPage = "book.html"
}

box.innerHTML += `

<div class="suggest-item">

<a href="${bookPage}?id=${book.id}">
${book.title}
</a>

</div>

`

})

}