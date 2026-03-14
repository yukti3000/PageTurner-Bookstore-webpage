const baseBooks = [

{title:"The Midnight Library", author:"Matt Haig", category:"Fiction", rating:4.5},
{title:"Pride and Prejudice", author:"Jane Austen", category:"Romance", rating:4.7},
{title:"Atomic Habits", author:"James Clear", category:"Self Help", rating:4.8},
{title:"The Alchemist", author:"Paulo Coelho", category:"Fiction", rating:4.6},
{title:"Sapiens", author:"Yuval Noah Harari", category:"History", rating:4.7},
{title:"Educated", author:"Tara Westover", category:"Biography", rating:4.8},
{title:"The Hobbit", author:"J.R.R Tolkien", category:"Fantasy", rating:4.8},
{title:"1984", author:"George Orwell", category:"Dystopian", rating:4.7},
{title:"Clean Code", author:"Robert C Martin", category:"Technology", rating:4.8},
{title:"Thinking Fast and Slow", author:"Daniel Kahneman", category:"Psychology", rating:4.6}

]


const extraTitles = [

"Harry Potter and the Sorcerers Stone",
"The Catcher in the Rye",
"To Kill a Mockingbird",
"The Great Gatsby",
"Rich Dad Poor Dad",
"Think and Grow Rich",
"Deep Work",
"The Pragmatic Programmer",
"A Brief History of Time",
"The Gene",
"Where the Crawdads Sing",
"It Ends With Us",
"The Fault in Our Stars",
"Love and Other Words",
"Zero to One",
"The Lean Startup",
"The Psychology of Money",
"The 7 Habits of Highly Effective People",
"The Power of Habit",
"The Subtle Art of Not Giving a F*ck",
"The Four Agreements",
"Man's Search for Meaning",
"The Art of War",
"The Book Thief",
"The Kite Runner",
"The Da Vinci Code",
"Angels and Demons",
"The Girl with the Dragon Tattoo",
"Gone Girl",
"The Silent Patient",
"The Martian",
"Dune",
"Foundation",
"Ready Player One",
"The Hunger Games",
"Catching Fire",
"Mockingjay",
"The Shining",
"It",
"Misery",
"Pet Sematary",
"Dracula",
"Frankenstein",
"The Picture of Dorian Gray",
"Wuthering Heights",
"Jane Eyre",
"Little Women",
"The Chronicles of Narnia",
"The Name of the Wind",
"The Wise Man's Fear",
"The Way of Kings",
"Words of Radiance",
"Oathbringer",
"Rhythm of War",
"The Road",
"Blood Meridian",
"The Stand",
"The Green Mile",
"The Outsider",
"The Institute",
"Carrie",
"Doctor Sleep",
"The Time Machine",
"The Invisible Man",
"The War of the Worlds",
"The Sun Also Rises",
"For Whom the Bell Tolls",
"The Old Man and the Sea",
"Norwegian Wood",
"Kafka on the Shore",
"1Q84",
"Colorless Tsukuru Tazaki",
"Hard-Boiled Wonderland",
"After Dark",
"South of the Border West of the Sun",
"Sputnik Sweetheart",
"Wind-Up Bird Chronicle"

]


let books = []
let id = 1


/* Available Categories */

const categories = [
"Fiction",
"Fantasy",
"Mystery",
"Science",
"Technology",
"History",
"Self Help",
"Psychology",
"Biography",
"Business",
"Romance"
]


function randomCategory(){
return categories[Math.floor(Math.random()*categories.length)]
}


/* Book Object Creator */

function createBook(title, author="Unknown Author", category=randomCategory(), rating=4.5){

return {

id:id++,

title:title,

author:author,

category:category,

price:Math.floor(Math.random()*300)+300,

rating:rating,

image:`https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-L.jpg`,

fallbackImage:"https://covers.openlibrary.org/b/id/10523338-L.jpg",

description: `"${title}" is a popular ${category} book written by ${author}. 

It explores engaging storytelling, powerful ideas, and memorable characters that keep readers hooked from beginning to end.

Recommended for readers interested in ${category.toLowerCase()} books and immersive reading experiences.`

}

}


/* Add Base Books */

baseBooks.forEach(book=>{
books.push(createBook(book.title,book.author,book.category,book.rating))
})


/* Generate Extra Books */

extraTitles.forEach(title=>{
books.push(createBook(title))
})


/* Safety Check */

books.forEach(book=>{
if(!book.description){
book.description = `${book.title} by ${book.author} is a captivating ${book.category} book that has gained praise from readers around the world. 

Through engaging storytelling, memorable characters, and thought-provoking ideas, this book offers a reading experience that keeps you hooked from the first page to the last. 

Perfect for readers who enjoy ${book.category.toLowerCase()} books, ${book.title} delivers inspiration, insight, and entertainment all in one unforgettable story.`
}
})


console.log("Total books loaded:",books.length)