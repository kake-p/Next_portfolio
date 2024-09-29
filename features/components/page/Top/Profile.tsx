import React from 'react'
import Image from 'next/image'

const Profile = () => {
  return (
    <section className="flex flex-col gap-[40px] py-[5%]">
      <h2 className="heading">Profile</h2>
      <div className="self-end mr-[5%] w-3/5">
      <div className="border-4 border-[#fff] relative">
        <Image src="/img/top/0N1A3408.jpg" layout="fill" objectFit="cover" alt="background" className="absolute opacity-70 z-[-1]"/>
        <div className="p-4 text-shadow">
          <h3 className="text-2xl">Kazuki Makida</h3>
          <p className="">経歴：</p>
          <p className="">長野県出身。<br/>松本深志高等学校を卒業し、2022年に筑波大学へ入学。<br/>総合学域群を経て、現在は情報学群3年生。</p>
        </div>          
      </div>
      </div>
      <div className="ml-[5%] w-3/5">
      <div className="border-4 border-[#fff] relative">
        <Image src="/img/top/0N1A2091.jpg" layout="fill" objectFit="cover" alt="background" className="absolute opacity-70 z-[-1]"/>
        <div className="p-4 text-shadow">
          <p className="h">現在：</p>
          <p className="c">大学や個人の活動でプログラミングやデザインの勉強をしています。</p>
        </div>
        <div className="p-4 text-shadow">
          <p className="">今後：</p>
          <p className="">フリーランスとして活動することも視野に入れて、まず業務委託やインターンシップで実績を残すことを目標としています。</p>
        </div>
      </div>         
      </div>
      <a href="" className="self-end mr-[2%]">and more... ＞＞</a>
    </section>
  )
}

export default Profile;
