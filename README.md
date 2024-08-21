# YouTube Clone 🚀

This project is a clone of the popular video-sharing platform YouTube. It is built using modern front-end technologies, including React, Redux Toolkit, TailwindCSS, and other libraries.

# Features

- YouTube Clone UI: Replicates the design and functionalities of the YouTube platform.
- YouTube Video List: Displays a paginated list of YouTube videos fetched from the YouTube API, with lazy loading for improved performance.
- YouTube Video Preview: Opens a preview window on video selection, showing details like the title, description, and view count.
- Search Suggestions: Provides a dropdown of suggested search queries as the user types in the search bar, enhancing the user experience.
- Optimized Search Using Caching and Debouncing: Debouncing ensures API calls are made after the user has stopped typing, while caching speeds up subsequent searches.
- Optimized API Calls Using Debouncing: Reduces unnecessary API calls during scrolling, enhancing performance.
  Comments Section: Displays and allows posting comments on videos, with threaded views for readability.
- Live Chat: Implements real-time chat using API polling, continuously updating the UI with new messages.

# Usage

- Clone the repository.
- Install dependencies with npm install.
- Create a .env file in the root directory and add your YouTube API key: GOOGLE_API_KEY=your_api_key_here.
- Start the development server using npm start.
- Open http://localhost:3000 in your web browser to view the application.
  Conclusion
  -This YouTube clone demonstrates how to build a modern web application with React, Redux Toolkit, TailwindCSS, and other libraries. The project includes several advanced features such as search suggestions, caching, debouncing, comments, and live chat, making it a valuable reference for building large-scale web applications.

# Dependencies

- React
- Redux Toolkit
- Moment
- React Icons
- React Router DOM
- TailwindCSS
- These dependencies are listed in the package.json file.
