# React Side Effects Lab

## Overview
This lab demonstrates how to handle **side effects** in React using the `useEffect` hook. The app fetches and displays a random **programming joke** when the page loads and allows users to fetch a new joke with a button click.

## Setup

Run `npm install` to install dependencies.

Then, run `npm run dev` to start up the React app at `http://localhost:5173`.

In another tab, run `npm run test` to run the test suite.

Before you start building out the application, examine the current code and component hierarchy. This will tell you how components can pass data to each other as well as where that information should be stored.

# React Side Effects: Programming Jokes

This project demonstrates how to handle side effects in a React application using the `useEffect` and `useState` hooks. It fetches and displays a random programming joke from an external API when the app loads, and allows the user to fetch a new joke by clicking a button.

## 🌟 Features

- **Initial Data Fetching**: Automatically fetches a programming joke when the component mounts using `useEffect`.
- **Interactive UI**: Users can click a "Get a New Joke" button to fetch and display a new joke.
- **Loading States**: Displays a "Loading..." message while waiting for the API response.
- **Error Handling**: Gracefully handles and displays errors if the API request fails.

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm or yarn
- A code editor like VSCode
- React DevTools (recommended for debugging)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/learn-co-curriculum/react-side-effects-vite.git
cd react-side-effects-vite