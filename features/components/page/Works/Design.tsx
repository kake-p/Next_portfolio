import {Image as HeroImage} from "@heroui/image";
import { Spacer } from "@heroui/spacer";
import { ImageModal } from "@/app/components/Elements/ImageModal";
import { SwipeNavigation } from "@/app/components/Elements/SwipeNavigation";

const designs = [
  "/img/works/design/GourmetSite.jpg",
  "/img/works/design/webpage.jpg",
  "/img/works/design/authentication.jpg",
]

const skills = {
  Figma: "/img/works/design/Figma.png",
  Illustrator: "/img/works/design/Illustrator.png",
  Photoshop: "/img/works/photograph/Ps.png",
}

const swipes = [
  {
    title: "SNS",
    contents: [
      "CrowdWorks",
      "※現在は依頼をお受けしておりません。"
    ],
    icons: {
      "CrowdWorks": "/img/works/design/CrowdWorks.png",
    }
  },
]

const Design = () => {
  return (
    <main className="mx-10 flex flex-col items-center" id="design">
      <h1 className="font-tangerine text-7xl">Design</h1>
      <Spacer y={10}/>
      <div className="flex flex-col gap-4 items-center">
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
      <ImageModal images={designs} alignment="row-3"/> 
      <Spacer y={20}/>
      <SwipeNavigation items={swipes}/>
    </main>
  );
};

export default Design;