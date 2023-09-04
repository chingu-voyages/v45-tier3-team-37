


import React from "react";

interface Book {
  id: string;
  title: string;
  author: string;
  publisher: string;
  description: string;
  
}

export default function Home({ searchResults }) {



  return (
      <section>
        {searchResults.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Description: {book.description}</p>
        </div>
      ))}
        
      </section>
  );
}
