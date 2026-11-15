import { useState } from "react";
import { TakePhotographyImages } from "../services/photography-images";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ITEMS_PER_PAGE = 12;

const Gallery = () => {
     const images = TakePhotographyImages();

    const [currentPage, setCurrentPage] = useState(1);

    // Flatten layout objects into individual images
    const flattenedImages = images.flatMap((item) =>
        item.images.map((image) => ({
            ...image,
            type: item.type,
        }))
    );

    // Pagination calculations
    const totalImages = flattenedImages.length;
    const totalPages = Math.ceil(totalImages / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Get only 12 images for the current page
    const currentImages = flattenedImages.slice(startIndex, endIndex);

    // Rebuild the layout while preserving image types
    const currentLayout = currentImages.reduce((acc, image) => {
        const lastItem = acc[acc.length - 1];

        if (image.type === "stack") {
            if (lastItem?.type === "stack") {
                lastItem.images.push(image);
            } else {
                acc.push({
                    type: "stack",
                    images: [image],
                });
            }
        } else {
            acc.push({
                type: image.type,
                images: [image],
            });
        }

        return acc;
    }, []);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <>
            <section className="!pt-0">
                <div className="container">
                    <h1 className="text-4xl mb-5">First Birthday Photography</h1>
                     <PhotoProvider>
                <div className="bebu-photography grid grid-cols-3 gap-3">
                    {currentLayout.map((item, index) => {
                        if (item.type === "stack") {
                            return (
                                <div
                                    key={item.images[0]?.id || index}
                                    className="flex flex-col gap-3"
                                >
                                    {item.images.map((image) => (
                                        <PhotoView
                                            key={image.id}
                                            src={image.src}
                                        >
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
                                    className={
                                        item.type === "wide"
                                            ? "col-span-2"
                                            : ""
                                    }
                                />
                            </PhotoView>
                        ));
                    })}
                </div>
            </PhotoProvider>

            {/* Pagination */}
            <div className="mt-7 flex items-center justify-between gap-3">

                <p className="text-xs">
                    Showing {totalImages === 0 ? 0 : startIndex + 1} -{" "}
                    {Math.min(endIndex, totalImages)} of {totalImages} images
                </p>

                <div className="flex items-center justify-center gap-2">

                    {/* Previous */}
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="btn btn-xs !w-max shrink-0 btn-primary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path></svg>
                    </button>


                    {/* Next */}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="btn btn-xs !w-max shrink-0 btn-primary"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path></svg>
                    </button>

                </div>
            </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;