import ImageShow from "./imageShow";
import './ImageList.css';
function ImageList({image}){
    const renderedImages = image.map((i) => {
        return <ImageShow key={i.id} image={i}/>
    })
    return <div className="image-list">
        {renderedImages}
    </div>
}

export default ImageList;