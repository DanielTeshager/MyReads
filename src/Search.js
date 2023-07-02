import React, { useState } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
const Search = ({ moveBook, books }) => {
	// Add books prop here
	const [query, setQuery] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const searchBooks = (query) => {
		if (!query) {
			setSearchResults([]);
			return;
		}

		BooksAPI.search(query).then((results) => {
			setSearchResults(
				results.map((result) => {
					let bookOnShelf = books.find((book) => book.id === result.id);
					result.shelf = bookOnShelf ? bookOnShelf.shelf : "none";
					return result;
				})
			);
		});
	};

	const updateQuery = (event) => {
		setQuery(event.target.value);
		searchBooks(event.target.value);
	};

	return (
		<div className="search-books">
			<div className="search-books-bar">
				<Link className="close-search" to="/">
					Back
				</Link>
				<div className="search-books-input-wrapper">
					<input
						type="text"
						placeholder="Search by title or author"
						value={query}
						onChange={updateQuery}
					/>
				</div>
			</div>
			<div className="search-books-results">
				{searchResults.length > 0 && (
					<ol className="books-grid">
						{searchResults.map((book) => (
							<Book key={book.id} book={book} moveBook={moveBook} />
						))}
					</ol>
				)}
			</div>
		</div>
	);
};

export default Search;
