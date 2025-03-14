import {Image as HeroImage} from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { ImageModal } from "@/app/components/Elements/ImageModal";
import { SwipeNavigation } from "@/app/components/Elements/SwipeNavigation";

const mainPhotos = [
  "/img/works/photograph/IMG_7312.png",
  "/img/works/photograph/0N1A3473.jpg",
  "/img/works/photograph/0N1A4504.jpg",
  "/img/works/photograph/0N1A3408.png",
  "/img/works/photograph/0N1A8913.png",
]

const photos = [
  "/img/works/photograph/0N1A0537.jpg",
  "/img/works/photograph/0N1A2248.jpg",
  "/img/works/photograph/0N1A0938.jpg",
  "/img/works/photograph/0N1A1232.jpg",
  "/img/works/photograph/0N1A1362.jpg",
  "/img/works/photograph/0N1A2275.jpg",
  "/img/works/photograph/0N1A2676.jpg",
  "/img/works/photograph/0N1A2518-3.jpg",

  "/img/works/photograph/0N1A4204.jpg",
  "/img/works/photograph/0N1A0284.jpg",
  "/img/works/photograph/0N1A2693.jpg",
  "/img/works/photograph/0N1A2894.jpg",
  "/img/works/photograph/0N1A3085.jpg",
  "/img/works/photograph/0N1A4278.jpg",
  "/img/works/photograph/0N1A4510.jpg",
  "/img/works/photograph/0N1A3627.jpg",
]

const skills = {
  LightroomClassic: "/img/works/photograph/LrC.png",
  Lightroom: "/img/works/photograph/Lr.png",
  Photoshop: "/img/works/photograph/Ps.png",
}

const swipes = [
  {
    title: "SNS",
    contents: [
      "Instagram",
      "Pixta",
    ],
    icons: {
      "Instagram": "/img/works/photograph/Instagram.png",
      "Pixta": "/img/works/photograph/Pixta.png",
    }
  },
  {
    title: "Achievement",
    contents: [
      "30 companies",
    ]
  },
  {
    title: "Equipment",
    contents: [
      "Canon EOS R6",
    ]
  },
]

const Photo = () => {  
  return (
    <main className="mx-10 flex flex-col items-center" id="photograph">
      <h1 className="font-tangerine text-7xl">Photograph</h1>
      <Spacer y={10}/>
      <div className="flex flex-col gap-5 items-center">
        <p className="text-3xl">skills</p>
        <div className="flex gap-40">
          {Object.entries(skills).map(([name, url]) => (
            <div
            className="flex gap-2 items-center"
            key={name}>
              <HeroImage
              disableSkeleton
              radius="none"
              loading="lazy"
              src={url}
              alt="skillIcon"
              width="24"
              height="24"
              style={{ maxWidth: 'none', height: '24px' }}
              />
              <p className="text-3xl">{name}</p>
            </div>
          ))}
        </div>
      </div>   
      <Spacer y={20}/>
      <ImageModal images={mainPhotos} alignment="gallery"/>
      <Spacer y={20}/>      
      <ImageModal images={photos} alignment=""/>      
      <Spacer y={20}/>      
      <SwipeNavigation items={swipes}/>
    </main>
  );
};

export default Photo;