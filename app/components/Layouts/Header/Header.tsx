'use client';
import React from 'react';
import Link from 'next/link';
import { useHeadStore } from '@/features/store';


const Header = () => {
  const { currentPage } = useHeadStore();
  return (
     <nav className="w-[30%] absolute top-[3%] right-[3%] z-[100]">
        <ul className="border-b border-[#df0000] flex justify-around text-3xl">
          {!(currentPage === 'Top') && <li><Link href="/">Top</Link></li>}
          {!(currentPage === 'Profile') && <li><Link href="/profile">Profile</Link></li>}
          {!(currentPage === 'Works') && <li><Link href="/works">Works</Link></li>}
          {!(currentPage === 'Contact') && <li><Link href="/contact">Contact</Link></li>}
        </ul>
      </nav>
  );
};

export default Header;