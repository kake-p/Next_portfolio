import Image from 'next/image'

const Main = () => {
  return (
    <section className="flex flex-col gap-[40px] py-[10%]">
      <div className="self-end mr-[5%] w-3/5">
      <div className="border-4 border-[#000] relative">
        <Image src="/img/profile/0N1A1994.jpg" layout="fill" objectFit="cover" alt="background" className="absolute opacity-70 z-[-1]"/>
        <div className="p-4">
          <p className="p-2">出身：　長野県</p>
          <p className="p-2">経歴：　松本深志高等学校、筑波大学</p>
          <p className="p-2">専攻：　情報学、情報システム主専攻</p>
        </div>     
      </div>
      </div>

      <div className="ml-[5%] w-3/5">
      <div className="border-4 border-[#000] relative">
        <Image src="/img/profile/0N1A1995.jpg" layout="fill" objectFit="cover" alt="background" className="absolute opacity-70 z-[-1]"/>
        <div className="p-4">
          <p className="p-2">趣味：　旅行、写真撮影、音楽、インテリア</p>
          <p className="p-2">資格：　世界遺産検定 2級 など</p>
        </div>
      </div>         
      </div>

      <div className="self-end mr-[5%] w-3/5">
      <div className="border-4 border-[#000] relative">
        <Image src="/img/profile/0N1A2137.jpg" layout="fill" objectFit="cover" alt="background" className="absolute opacity-70 z-[-1]"/>
        <div className="p-4">
          <p className="">スキル：　HTML, CSS, JavaScript, TypeScript, React, Next.js, Vue.js, Nuxt.js, Python, Swift, Flutter, Figma, Adobe Lightroom, Adobe Photoshop, Adobe Illustrator, カメラ</p>
          <p className="">目標:：　プログラミング、デザイン、マーケティングなどの様々な手段を用いて多くの人の生活を豊かにするサービスを提供する。</p>        
        </div>
      </div>
      </div>

      <a href="" className="self-end mr-[2%]">and more... ＞＞</a>
    </section>
  )
}

export default Main;
