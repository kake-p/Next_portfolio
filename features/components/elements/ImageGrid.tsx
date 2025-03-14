interface ImageGridProps {
  images: { src: string; alt: string }[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
    <div className="flex justify-around flex-wrap gap-4">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className="w-[300px] h-auto rounded shadow-md"
        />
      ))}
    </div>
  );
}

export default ImageGrid;