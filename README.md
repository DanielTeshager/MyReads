# MyReads Project

This is a bookshelf app that allows the user to select and categorize books into three different shelves - Currently Reading, Want to Read, and Read. The project emphasizes using React to build the application and provides an API server and client library that you can use to persist information as you interact with the application.

## Project Setup

- Install the dependencies - run `npm install` or `yarn install`
- Start the development server - run `npm start` or `yarn start`

## How to use the App

- Books are sorted into three categories: Currently Reading, Want to Read, and Read
- Each book has a control that allows users to move books between shelves. The control should be tied directly to each book instance state in the application.
- The main page also has a link to `/search`, a search page that allows you to find books to add to your library.

## Search Functionality

- The search page has a text input that may be used to find books.
- Invalid queries are handled and prior search results are not shown.

## Routing

This single page app uses React Router to keep the UI in sync with the URL:

- The main page (URL: `/`) contains a list of all the books, sorted into shelves.
- The search page (URL: `/search`) contains a search input field.
