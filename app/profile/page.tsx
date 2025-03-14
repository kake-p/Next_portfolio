'use client';
import { useEffect } from 'react';
import { useHeadStore } from '@/features/store';
import { Hero, Main, Foot } from '@/features/components/page/Profile'

const Profile = () => {
  const { setPage } = useHeadStore();
  useEffect(() => {
    document.body.classList.remove('black-bg');
    setPage('Profile');
  }, [setPage])
  return (
    <>
      <Hero/>      
      <Main/>      
      <Foot page={"prof"}/>      
    </>
  )
};

export default Profile;
