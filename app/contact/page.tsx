'use client';
import { useEffect} from 'react';
import { useHeadStore } from '@/features/store';
import Image from 'next/image';
import Form from '@/features/components/page/Contact/contactForm';

const Contact = () => {
  const { setPage } = useHeadStore();
  useEffect(() => {
    document.body.classList.remove('black-bg');
    setPage('Contact');
  }, [setPage]);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
        <header className="relative h-[400px] flex flex-col items-center justify-center text-white text-center overflow-hidden">
          {/* 背景画像 */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/img/contact/0N1A3450.jpg" // public フォルダ内の画像
              alt="Contact Background"
              layout="fill" // 親要素にフィットする
              objectFit="cover" // 画像をカバー
              priority // 高速読み込み
              className="opacity-90"
            />
          </div>

          {/* オーバーレイ（暗くする） */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* テキストコンテンツ */}
          <div className="relative z-10">
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="mt-4 text-lg">
              現在お問い合わせフォームは準備中です。<br />
              Works &gt; Links より各種サービスを経由してご連絡ください。
            </p>
          </div>
        </header> 
      <Form />    
    </div>
  );
}

export default Contact;