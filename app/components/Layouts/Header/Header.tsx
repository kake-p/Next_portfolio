'use client';
import Link from 'next/link';
import { useHeadStore } from '@/features/store';


const Header = () => {
  const { currentPage } = useHeadStore();
  return (
     <nav className="w-[30%] absolute top-[3%] right-[3%] z-10">
        <ul className="border-b border-[#df0000] flex justify-around text-3xl">
          {!(currentPage === 'Top') && <li className="hover:bg-white hover:opacity-70"><Link href="/">Top</Link></li>}
          {!(currentPage === 'Profile') && <li className="hover:bg-white hover:opacity-70"><Link href="/profile">Profile</Link></li>}
          {!(currentPage === 'Works') && <li className="hover:bg-white hover:opacity-70"><Link href="/works">Works</Link></li>}
          {!(currentPage === 'Contact') && <li className="hover:bg-white hover:opacity-70"><Link href="/contact">Contact</Link></li>}
        </ul>
      </nav>
  );
};

export default Header;