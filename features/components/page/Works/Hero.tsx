import Image from "next/image";

const Hero = () => {
  return (
    <>
     <Image src="/img/works/worksHead.png" alt="works" width="1920" height="496" className="object-contain w-full h-auto" />
     
    <header className="p-6 z-10 absolute top-0 left-0 w-full" id="works_head">
      <p className="text-[#fff]">KAZUKI MAKIDA</p>
      <h1 className="pt-28 text-5xl font-bold text-center mb-6 text-[#fff]">Works</h1>
    </header>
    </>
  );
};

export default Hero;