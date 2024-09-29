import Image from 'next/image'

const Foot = () => {
  return (
    <footer className="flex flex-col items-center gap-[30%] h-96">
      <div className="flex flex-col">
        <p className="self-center"><a href="">↑<br/>Back to Top</a></p>
        <p className="self-end">Last Updated: 2024/09/01</p>
      </div>
    </footer>
  )
}

export default Foot;