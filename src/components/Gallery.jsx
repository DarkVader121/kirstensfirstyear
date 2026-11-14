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

                    <div className="mt-7 col-span-3 flex items-center justify-between gap-3">
                        <p className="text-sm">
                            Showing 1 - 9 of 77 images
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <a className="btn btn-xs !w-max shrink-0 btn-primary" disabled="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
                                </svg>
                            </a>
                            <a className="btn btn-xs !w-max shrink-0 btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;