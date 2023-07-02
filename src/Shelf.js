// Shelf.js

import React from "react";
import Book from "./Book";

const Shelf = ({ books, shelf, moveBook }) => {
	return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book) => (
						<Book key={book.id} book={book} moveBook={moveBook} />
					))}
				</ol>
			</div>
		</div>
	);
};

export default Shelf;
