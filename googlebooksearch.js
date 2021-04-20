import React, { useState } from 'react';

function googleBooksSearch() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState ([]);
    const apikey = process.env.BOOKS_API_KEY;

    function handleChange(event) {
        const book = event.target.vaule;
        setBook(book);
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=&key=${apikey}`)
        .then(data => {
            console.log(data.data.items)
        })
    }

};

export default googleBooksSearch;