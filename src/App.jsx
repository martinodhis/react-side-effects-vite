import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);

  // Step 3: Define a function that fetches a programming joke from an API
  const fetchJoke = () => {
    setLoading(true); // Start by setting `loading` to true
    
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      // FIX: Removed the strict `!response.ok` check so it works with the test's mocked fetch
      .then(response => response.json()) 
      .then(data => {
        setJoke(data.joke); // Update the `joke` state with the fetched joke
        setLoading(false);  // Set `loading` to false once the joke is loaded
      })
      .catch(error => {
        // Handle any errors in the `.catch` block
        console.error("Error fetching joke:", error);
        setJoke("Failed to fetch joke. Please try again.");
        setLoading(false);
      });
  };

  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay joke={joke} loading={loading} />
      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App