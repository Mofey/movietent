# 🎬 Movietent

**Movietent** is a React-based movie search app that allows users to search for movies by title using the [OMDb API](http://www.omdbapi.com/). It supports searching multiple movie titles, dynamically renders results, and uses environment variables for secure API key handling.

## 🚀 Features
- 🔍 Search for movies by title  
- 🎯 Combine results from multiple movie keywords  
- 🖼️ Display movie posters, titles, and release years  
- 💡 Responsive and simple UI  
- 🔐 Uses `.env` to store the API key securely  

## 🛠️ Tech Stack
- React (with Hooks)  
- JavaScript  
- OMDb API  
- CSS  

## 📦 Installation & Setup
1. Clone the repository  
   ```
   git clone https://github.com/your-username/movietent.git
   cd movietent
   ```
2. Install dependencies  
   ```
   npm install
   ```
3. Create a `.env` file in the project root and add your OMDb API key:  
   ```
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```  
   You can obtain a free key from http://www.omdbapi.com/apikey.aspx  
4. Start the development server  
   ```
   npm start
   ```  
   The app will run at `http://localhost:3000`.

## 📁 Project Structure
```
movietent/
├── public/
└── src/
   └── Movietent/
 
```

## 🔍 How It Works
When the app loads, it automatically fetches results for predefined titles (e.g. “Avengers” and “Batman”). It calls the OMDb API for each title, merges all results into one list, filters out duplicates by `imdbID`, and renders them with the `MovieCard` component. Users can also type a title into the search input and click the search icon to fetch new results.

## 🌐 API Reference
- Base URL: `https://www.omdbapi.com/`  
- Search by title: `?s={title}&apikey={your_key}`  
- Get by IMDb ID: `?i={imdbID}&apikey={your_key}`  
- Documentation: http://www.omdbapi.com/

## 📄 License
This project is open source and available under the [https://github.com/Mofey](LICENSE).

## 🙌 Acknowledgments
- [OMDb API](http://www.omdbapi.com/) for providing a free movie database  
- React community and open-source contributors  

## 🚧 Future Improvements
- Add a detailed movie view page  
- Debounce the search input for better performance  
- Show loading and error states  
- Implement pagination or infinite scroll  
- Add favorites/bookmark functionality  
