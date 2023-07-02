import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import Shelf from "./Shelf";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

function App() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		BooksAPI.getAll().then((allBooks) => setBooks(allBooks));
	}, []);

	const shelves = [
		{
			name: "Currently Reading",
			id: "currentlyReading",
		},
		{
			name: "Want to Read",
			id: "wantToRead",
		},
		{
			name: "Read",
			id: "read",
		},
	];

	const moveBook = (book, shelf) => {
		const updatedBook = { ...book, shelf };
		setBooks((prevBooks) => {
			const newBooks = prevBooks.filter((b) => b.id !== book.id);
			newBooks.push(updatedBook);
			return newBooks;
		});
		BooksAPI.update(book, shelf);
	};

	return (
		<div className="app">
			<Switch>
				<Route
					path="/search"
					render={() => <Search moveBook={moveBook} books={books} />}
				/>

				<Route
					exact
					path="/"
					render={() => (
						<div className="list-books">
							<div className="list-books-title">
								<h1>MyReads</h1>
							</div>
							<div className="list-books-content">
								<div>
									{shelves.map((shelf) => (
										<Shelf
											key={shelf.id}
											shelf={shelf.name}
											books={books.filter((book) => book.shelf === shelf.id)}
											moveBook={moveBook}
										/>
									))}
								</div>
							</div>
							<div className="open-search">
								<Link to="/search">Add a book</Link>
							</div>
						</div>
					)}
				/>
				<Route
					render={() => (
						<div>
							<h1>404 - Page not found!</h1>
							<Link to="/">Go Home</Link>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
