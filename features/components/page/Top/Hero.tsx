import Image from 'next/image'

const Hero = () => {
  return (
  <section className="flex flex-col px-[10%] py-[5%]">
    <p>デザインする。<br/>心に残って離れない体験を。<br/>ふと目にしただけの一項を、なぜか今も覚えている。<br/>そんな”<span id="experience">経験</span> ”を作りたい。<br/>私はwebや広告を中心としたデジタル作品を作成しています。<br/>現在はその手段として写真、Webサイトや広告の作成を中心に活動しています。<br/>ぜひ、ゆっくりとご覧ください。</p>
    <Image src="/img/top/ellipse.png" alt="six ellipse mark"  width="300" height="300" className="self-center my-[10%] opacity-70"/>
    <p className="self-end">Since: 2023/01/01</p>
  </section>
  )
};

export default Hero
