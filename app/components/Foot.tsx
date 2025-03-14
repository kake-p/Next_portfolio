import Link from "next/link";

type Props = {
  page: string;
}

const Foot = ({page}: Props) => {
  return (
    <footer className="flex justify-between items-start w-full pt-6 pb-10 relative black-bg">
      {/* 左側ナビゲーション */}
      <nav>
        <ul className="text-lg border-l-2 border-red-600 flex flex-col space-y-2 ml-4">
          <li>
            <Link href="/" className="hover:bg-black hover:opacity-70 px-4 py-2 block">
              Top
            </Link>
          </li>
          <li>
            <Link href="/works" className="hover:bg-black hover:opacity-70 px-4 py-2 block">
              Works
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:bg-black hover:opacity-70 px-4 py-2 block">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* 右側ナビゲーション */}
      <nav>
        <ul className="text-lg border-b-2 border-red-600 flex space-x-6 pb-2">
          <li>
            <a href="https://www.instagram.com/kake__photo/" target="blank" className="hover:bg-black hover:opacity-70 px-6 py-1 block">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://creator.pixta.jp/@prof2547496?_gl=1*1811151*_gcl_au*MTI4NjAwMzc2Ny4xNzM4MTY4NDU5*_ga*MTU3OTc2MzY4Mi4xNzM4MTY4NDU5*_ga_VBSX8RFDG5*MTczODE2ODQ1OS4xLjEuMTczODE2ODQ3OS40MC4wLjA.&_ga=2.219422749.582538694.1738168459-1579763682.1738168459" target="blank" className="hover:bg-black hover:opacity-70 px-6 py-1 block">
              Pixta
            </a>
          </li>
          <li>
            <a href="https://qiita.com/kake-p" target="blank" className="hover:bg-black hover:opacity-70 px-6 py-1 block">
              Qiita
            </a>
          </li>
          <li>
            <a href="https://github.com/kake-p" target="blank" className="hover:bg-black hover:opacity-70 px-6 py-1 block">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://crowdworks.jp/public/employees/5693653?ref=login_header" target="blank" className="hover:bg-black hover:opacity-70 px-6 py-1 block">
              CrowdWorks
            </a>
          </li>
        </ul>
      </nav>

      {/* Back to Top ボタン */}
      <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6">
        <a href={`#${page}_head`} className="text-xl font-bold hover:bg-black hover:opacity-70 p-2 block text-center">
          ↑<br />Back to Top
        </a>
      </p>
    </footer>
  );
};

export default Foot;
