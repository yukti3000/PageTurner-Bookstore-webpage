const baseBooks = [

{title:"The Midnight Library", author:"Matt Haig", category:"Fiction", rating:4.5},
{title:"Pride and Prejudice", author:"Jane Austen", category:"Romance", rating:4.7},
{title:"Atomic Habits", author:"James Clear", category:"Self Help", rating:4.8},
{title:"The Alchemist", author:"Paulo Coelho", category:"Fiction", rating:4.6},
{title:"Sapiens", author:"Yuval Noah Harari", category:"History", rating:4.7},
{title:"Educated", author:"Tara Westover", category:"Biography", rating:4.8},
{title:"The Hobbit", author:"J.R.R. Tolkien", category:"Fantasy", rating:4.8},
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

function createBook(title, author="Unknown Author", category="General", rating=4.5){

return {
id:id++,
title:title,
author:author,
category:category,
price:Math.floor(Math.random()*300)+300,
rating:rating,
image:`https://covers.openlibrary.org/b/title/${encodeURIComponent(title)}-L.jpg`,
description:`"${title}" is a highly rated book enjoyed by readers worldwide. It offers engaging storytelling and valuable insights in the ${category} genre.`
}

}

/* Add base books */

baseBooks.forEach(book=>{
books.push(createBook(book.title,book.author,book.category,book.rating))
})

/* Generate remaining books */

extraTitles.forEach(title=>{
books.push(createBook(title))
})