'use client';
import '@/app/globals.css';
import { useEffect, useState } from 'react';
import { useHeadStore } from '@/features/store';
import { Spacer } from '@heroui/spacer';
import Navbar from '@/features/components/elements/StickyNavbar';
import { Hero, Photo, Design, Programming } from '@/features/components/page/Works';
import Foot from '../components/Foot';

const Work = () => {
  const { setPage } = useHeadStore();
  useEffect(() => {
    document.body.classList.remove('black-bg');
    setPage('Works');
  }, [setPage])

  const [activeSection, setActiveSection] = useState('photograph');

  // セクションのスクロール位置を監視
  useEffect(() => {
    const sections = ['photograph', 'design', 'programming'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: .5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // セクションにスクロールする関数
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Hero />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <Spacer y={20} />
      <Photo />
      <Spacer y={40} />
      <Design />
      <Spacer y={40} />
      <Programming />
      <Spacer y={40} />
      <Foot page={"works"}/>     
    </>
  )
}

export default Work;

