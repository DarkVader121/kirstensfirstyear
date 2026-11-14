import { TakePhotographyImages } from "../services/photography-images";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
 const images = TakePhotographyImages();

    return (
        <>
            <section>
                <div className="container">
                    <h1 className="text-4xl mb-5">First Birthday Photography</h1>
                    <PhotoProvider>
                        <div className="bebu-photography grid grid-cols-3 gap-3">
                            {images.map((item, index) => {
                                if (item.type === "stack") {
                                    return (
                                        <div key={item.images[0]?.id || index} className="flex flex-col gap-3">
                                            {item.images.map((image) => (
                                                <PhotoView key={image.id} src={image.src}>
                                                    <img
                                                        src={image.src}
                                                        alt={image.name}
                                                    />
                                                </PhotoView>
                                            ))}
                                        </div>
                                    );
                                }

                                return item.images.map((image) => (
                                    <PhotoView key={image.id} src={image.src}>
                                        <img
                                            src={image.src}
                                            alt={image.name}
                                            className={item.type === "wide" ? "col-span-2" : ""}
                                        />
                                    </PhotoView>
                                ));
                            })}
                        </div>
                    </PhotoProvider>
                </div>
            </section>
        </>
    );
}

export default Gallery;