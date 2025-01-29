'use client';
import { useEffect } from 'react';
import { useHeadStore } from '@/features/store';
import { Hero, Photo, Design, Programming } from '@/features/components/page/Works';

const Work = () => {
  const { setPage } = useHeadStore();
  useEffect(() => {
    document.body.classList.remove('black-bg');
    setPage('Works');
    console.log('setPage');
  }, [setPage])
  return (
    <div>
      <p>works</p>
      <Hero />
      <Photo />
      <Design />
      <Programming />      
    </div>
  )
}

export default Work;

