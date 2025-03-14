'use client';
import { useEffect } from 'react';
import { useHeadStore } from '@/features/store';
import { TopPage, Hero, Profile, Works, LatestPost} from '@/features/components/page/Top';


const Top = () => {
  const { setPage } = useHeadStore();
  useEffect(() => {
    document.body.classList.add('black-bg');
    setPage('Top');
  }, [setPage])
  return (
    <>
      <TopPage/> 
      <Hero/>
      <Profile/>
      <Works/>
      <LatestPost/>
    </>
  );
};

export default Top;