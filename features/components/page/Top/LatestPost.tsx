import Image from 'next/image'

const LatestPost = () => {
  return (
    <footer className="flex flex-col items-center gap-[30%] h-96">      
      <h2 className="heading">Latest Posts</h2>
      <div className="flex items-center gap-8">
        <a href="" className="">
          <Image src="/img/works/nightView/0N1A4447.jpg" width="160" height="240" alt="second newSet" className="border-8 border-[#fff]"/>
        </a>
        <span className="material-symbols-outlined" id="open">arrow_circle_left</span>
        <a href="" className="">
          <Image src="/img/works/nightView/0N1A4543.jpg" width="240" height="360" alt="newSet" className="border-8 border-[#fff]"/>
        </a>
        <span className="material-symbols-outlined" id="open">arrow_circle_right</span>
        <a href="" className="">
          <Image src="/img/works/nightView/0N1A4510.jpg" width="160" height="240"  alt="third newSet" className="border-8 border-[#fff]"/>
        </a>
      </div>
      <div className="flex flex-col">
        <p className="self-center"><a href="">↑<br/>Back to Top</a></p>
        <p className="self-end">Last Updated: 2024/09/01</p>
      </div>
    </footer>
  )
}

export default LatestPost;

