import Image from 'next/image';
const Hero = ()  => {
  return (
    <section>
    <p className="m-3">Kazuki Makida</p>
    <p className="ml-[15%] text-5xl">Profile</p>
    <div className="flex justify-center items-center relative h-[40vh] w-full">
      <Image src="/img/profile/0N1A2107.jpg" layout="fill" objectFit="contain" alt="backgroundImg" className="absolute z-[-1] opacity-70"/>
    <div className="flex justify-center items-center relative">
        <p className="text-5xl font-tangerine">Thank you for visiting.</p>
        <span className="material-symbols-outlined" id="menu">menu</span>   
      </div>
    <p className="absolute bottom-0 left-[10%]">| Scroll</p>
    </div>       
  </section>
  );
};

export default Hero;