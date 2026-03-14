let cart = JSON.parse(localStorage.getItem("cart")) || []

function displayBooks(list, containerId){

const container = document.getElementById(containerId)

if(!container) return

container.innerHTML = ""

list.forEach(book => {

const card = document.createElement("div")

card.className = "book"

card.innerHTML = `

<a href="${window.location.pathname.includes('/pages/') ? 'book.html' : 'pages/book.html'}?id=${book.id}">
<img src="${book.image || `https://covers.openlibrary.org/b/title/${encodeURIComponent(book.title)}-L.jpg`}"
onerror="this.src='https://covers.openlibrary.org/b/id/10523338-L.jpg'">
</a>

<h3>${book.title}</h3>

<p>${book.author}</p>

<p class="rating">⭐ ${book.rating}</p>

<p>₹${book.price}</p>

<button onclick="addToCart(${book.id})">
Add to Cart
</button>

<a href="${window.location.pathname.includes('/pages/') ? 'checkout.html' : 'pages/checkout.html'}?id=${book.id}">
<button class="buy-btn">
Buy Now
</button>
</a>

`

container.appendChild(card)

})

}

function addToCart(id){

const book = books.find(b => b.id === id)

if(!book) return

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

function showCartMessage(){

const msg = document.createElement("div")

msg.className = "cart-message"

msg.innerText = "Book added to cart ✔"

document.body.appendChild(msg)

setTimeout(()=> msg.remove(),2000)

}

function updateCartCount(){

const count = cart.reduce((total,item)=>total + item.quantity,0)

const badge = document.getElementById("cartCount")

if(badge){
badge.textContent = count
}

}

updateCartCount()

/* Featured Books */

if(typeof books !== "undefined"){

const featured = books.slice(0,6)
displayBooks(featured,"featuredBooks")

const recommended = books.slice(10,16)
displayBooks(recommended,"recommendedBooks")

}

/* Slider */

function scrollLeft(){

const slider = document.getElementById("featuredBooks")

if(slider){
slider.scrollBy({left:-300,behavior:"smooth"})
}

}

function scrollRight(){

const slider = document.getElementById("featuredBooks")

if(slider){
slider.scrollBy({left:300,behavior:"smooth"})
}

}

/* Search Suggestions */

function showSuggestions(){

const input = document.getElementById("searchBar")?.value.toLowerCase()

const box = document.getElementById("suggestions")

if(!box || !input) return

box.innerHTML = ""

if(input.length < 2) return

const results = books
.filter(book => book.title.toLowerCase().includes(input))
.slice(0,5)

results.forEach(book => {

box.innerHTML += `
<div class="suggest-item">
<a href="pages/book.html?id=${book.id}">
${book.title}
</a>
</div>
`

})

}