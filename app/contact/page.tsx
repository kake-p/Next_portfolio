'use client';
import { useEffect } from 'react';
import { useHeadStore } from '@/features/store';

const Contact = () => {
  const { setPage } = useHeadStore();
  useEffect(() => {
    document.body.classList.remove('top');
    setPage('Contact');
    console.log('setPage');
  }, [setPage])
  return (
    <div>
      <p>contact</p>      
    </div>
  )
}

export default Contact;

