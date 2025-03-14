import {Image as HeroImage} from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { TextModal } from "@/app/components/Elements/TextModal";
import { SwipeNavigation } from "@/app/components/Elements/SwipeNavigation";

const modalTitle = [
  "やどかり祭HP",
  "Cverse",
  "SuStudy,",
]

const modalTexts = [
  [
    "筑波大学やどかり祭の公式HP",
    "Nuxt.js"
  ],
  [
    "HipHopイベントまとめアプリ",
    "Swift, Firebase"
  ],
  [
    "コミュニティ型勉強習慣化アプリ",
    "Flutter, Firebase, Netlify"
  ]
]

const programmings = [
  "/img/works/programming/yadosai.png",
  "/img/works/programming/Cverse.png",
  "/img/works/programming/SuStudy.png",
]

const url = [
  "https://yadokarisai.com/",
  "https://apps.apple.com/jp/app/cverse/id6692624513",
  "https://sustudy.netlify.app/",
]

const upperRowSkills = {
  HTML: "/img/works/programming/HTML.png",
  JS: "/img/works/programming/JS.png",
  Vue: "/img/works/programming/Vue.png",
  React: "/img/works/programming/React.png",
  Python: "/img/works/programming/Python.png",
  Swift: "/img/works/programming/Swift.png",
  Go: "/img/works/programming/Go.webp",
  Git: "/img/works/programming/Git.png",
  Firebase: "/img/works/programming/Firebase.png",
  Vercel: "/img/works/programming/Vercel.png",
  VSCode: "/img/works/programming/VSCode.png",
}

const bottomRowSkills = {
  CSS: "/img/works/programming/CSS.png",
  TS: "/img/works/programming/TS.png",
  Nuxtjs: "/img/works/programming/Nuxtjs.png",
  Nextjs: "/img/works/programming/Nextjs.png",
  Flask: "/img/works/programming/Flask.png",
  Flutter: "/img/works/programming/Flutter.png",
  echo: "/img/works/programming/echo.png",
  GitHub: "/img/works/programming/GitHub.png",
  Supabase: "/img/works/programming/Supabase.png",
  Netlify: "/img/works/programming/Netlify.png",
  XCode: "/img/works/programming/XCode.png",
  webpack: "/img/works/programming/webpack.png",
}

const swipes = [
  {
    title: "SNS",
    contents: [
      "GitHub",
      "Qiita"
    ],
    icons: {
      "GitHub": "/img/works/programming/GitHub.png",
      "Qiita": "/img/works/programming/Qiita.png",
    }
  },
  {
    title: "Outsourcing",
    contents: [
      "webサイト作成",
      "webサイト改修",
      "webツール改修",
    ]
  }
]

const Programming = () => {
  return (
      <main className="flex flex-col items-center" id="programming">
        <h1 className="font-tangerine text-7xl">Programming</h1>
        <Spacer y={10}/>
        <div className="flex flex-col gap-4 items-center">
          <p className="text-3xl">skills</p>
          <div className="flex gap-10">
            {Object.entries(upperRowSkills).map(([name, url]) => (
              <HeroImage
              disableSkeleton
              radius="none"
              loading="lazy"
              src={url}
              alt="skillIcon"
              width="40" height="40" style={{ maxWidth: 'none', height: '40px' }}
              key={name}
              />
            ))}
          </div>
          <div className="flex gap-10">
            {Object.entries(bottomRowSkills).map(([name, url]) => (
              <HeroImage
              disableSkeleton
              radius="none"
              loading="lazy"
              src={url}
              alt="skillIcon"
              width="40" height="40" style={{ maxWidth: 'none', height: '40px' }}
              key={name}
              />
            ))}
          </div>
        </div>
        <Spacer y={20}/>
        <TextModal title={modalTitle} text={modalTexts} images={programmings} url={url}/> 
        <Spacer y={20}/>
        <SwipeNavigation items={swipes}/>
      </main>
  );
};

export default Programming;