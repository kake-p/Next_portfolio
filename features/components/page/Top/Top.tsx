import Image from 'next/image';
const Top = ()  => {
  return (
    <section>
    <div className="flex justify-center items-center relative h-[100vh] w-full" id="top_head">
      <Image src="/img/top/0N1A4359.jpg" layout="fill" objectFit="contain" alt="backgroundImg" className="absolute z-[-1] opacity-40"/>
    <div className="flex justify-center items-center relative">
        <div>
          <p className="text-8xl">Kazuki Makida</p>
          <p className="text-2xl">Photographer / Designer / Corder</p>
        </div>
        <span className="material-symbols-outlined" id="menu">menu</span>   
      </div>
    <p className="absolute bottom-0 left-[25%] pl-3 border-l border-[#df0000]">| Scroll</p>
    </div>       
  </section>
  );
};

export default Top;