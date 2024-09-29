'use client';
import { useEffect } from 'react';
import { useHeadStore } from '@/features/store';

const Work = () => {
  const { setPage } = useHeadStore();
  useEffect(() => {
    document.body.classList.remove('top');
    setPage('Works');
    console.log('setPage');
  }, [setPage])
  return (
    <div>
      <p>works</p>      
    </div>
  )
}

export default Work;

