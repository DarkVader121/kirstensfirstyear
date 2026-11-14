// import cutePicture from '../assets/images/graphics/cute-picture.png'
import { TakePhotographyImages } from "../services/photography-images";


const Gallery = () => {
 const images = TakePhotographyImages();

 console.log("images", images);

    return (
        <>
            <section>
                <div className="container">
                    <h1 className="text-4xl mb-5">Kirstens First Birthday Photography</h1>
                    <div className="bebu-photography grid grid-cols-3 gap-3">
            {images.map((item, index) => {
                if (item.type === "stack") {
                    return (
                        <div key={index} className="flex flex-col gap-3">
                            {item.images.map((image) => (
                                <img key={image.id} src={image.src} alt={image.name} />
                            ))}
                        </div>
                    );
                }

                return item.images.map((image) => (
                    <img
                        key={image.id}
                        src={image.src}
                        alt={image.name}
                        className={item.type === "wide" ? "col-span-2" : ""}
                    />
                ));
            })}
        </div>
                </div>
            </section>
           
        </>
    );
}

export default Gallery;