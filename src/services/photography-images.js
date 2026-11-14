
export const TakePhotographyImages = () => {
    const images = import.meta.glob(
        "../assets/images/photography/*",
        {
            eager: true,
            query: "?url",
            import: "default",
        }
    );

    const photographyLayout = [
        { type: "single" },
        { type: "single" },
        { type: "single" },
        { type: "stack", count: 2 },
        { type: "wide" },
        { type: "single" },
        { type: "single" },
        { type: "single" },
        { type: "wide" },
        { type: "stack", count: 2 },
    ];

    const imageList = Object.entries(images).map(([path, src]) => ({
        id: path,
        name: path.split("/").pop(),
        src,
        path,
    }));

    let imageIndex = 0;
    const result = [];

    while (imageIndex < imageList.length) {
        for (const layout of photographyLayout) {
            if (imageIndex >= imageList.length) break;

            const count = layout.type === "stack" ? layout.count : 1;

            const assignedImages = imageList.slice(
                imageIndex,
                imageIndex + count
            );

            imageIndex += assignedImages.length;

            result.push({
                ...layout,
                images: assignedImages,
            });
        }
    }

    return result;
};
