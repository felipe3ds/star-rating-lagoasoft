import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoAlbum from './components/PhotoAlbum';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>Vote System</h3>
        <PhotoAlbum />
      </div>
      
    </div>
  );
}

export default App;
