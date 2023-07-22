import { useState } from 'react';
import SearchBar from './components/searchBar';
import searchImage from './api';
import ImageList from './components/imageList';
function App(){
    const [image,setImage] = useState([]);
    const handleSubmit = async (state) =>{
       const result = await searchImage(state);
       setImage(result);
    }
    return <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList image={image} />
    </div>
}

export default App;