interface GalleryProps {
  images: string[];
  folder: string;
}

const Gallery = ({ images, folder }: GalleryProps) => {
  return (
    <ul className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2 mt-4">
      {images.map((image, index) => (
        <li key={index} className="list-none">
          <a href={`/${folder}/${image}`} target="_blank" rel="noopener noreferrer">
            <img
              src={`/${folder}/${image}`}
              alt=""
              loading="lazy"
              className="w-full h-auto rounded shadow-md transition-transform transform hover:scale-105"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Gallery;