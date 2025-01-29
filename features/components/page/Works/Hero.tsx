import Image from "next/image";

const Hero = () => {
  return (
    <>
    <header className="p-6">
      {/* Works タイトル */}
      <h1 className="text-3xl font-bold text-center mb-6">Works</h1>

      {/* Works 選択リスト */}
      <div className="flex justify-around">
        {[
          { id: "photo", title: "Photograph", src: "/img/works/0N1A0284.jpg" },
          { id: "des", title: "Design", src: "/img/works/0N1A4204.jpg" },
          { id: "cord", title: "Cording", src: "/img/works/0N1A2512.jpg" },
        ].map(({ id, title, src }) => (
          <a
            key={id}
            href={`#${id}`}
            className="relative w-1/6 aspect-[2/3] rounded-lg shadow-lg hover:bg-black hover:opacity-90 transition duration-200"
          >
            <h3 className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl drop-shadow-lg">
              {title}
            </h3>
            <Image
              src={src}
              alt={title}
              width={200}
              height={300}
              className="w-full h-full rounded-lg shadow-lg"
            />
          </a>
        ))}
      </div>

      {/* Sticky Navigation */}
      <section className="sticky top-0 z-50 animate-fadein">
        <p className="w-4/5 mx-auto h-1 border-b-2 border-red-600"></p>
        <div className="w-full bg-white bg-opacity-70 border border-gray-500 flex justify-around mt-2 p-2">
          <a href="#photo" className="hover:underline">photograph</a>
          <a href="#des" className="hover:underline">design</a>
          <a href="#cord" className="hover:underline">cording</a>
        </div>
      </section>
    </header>
    </>
  );
};

export default Hero;