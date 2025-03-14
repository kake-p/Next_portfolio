import React, { useState } from "react";
import NextImage from "next/image";
import {Image as HeroImage} from "@heroui/image";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";

type Props = {
  images: string[];
  alignment: string;
}

const alignmentStyles: { [key: string]: [string, number, number] } = {
  "row-3": ["flex gap-20 flex-wrap justify-center", 300, 0],
  "gallery": ["flex gap-20 flex-wrap justify-center", 600, 400],
  "": ["flex gap-4 flex-wrap justify-center", 200, 300],
};

export const ImageModal = ({images, alignment}: Props) => {  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    onOpen();
  };

  return (
    <main className={alignmentStyles[alignment][0]}>
      {images.map((url, index) => (
        <article key={index}>
          <Button
            className="p-0 w-max h-max shadow-[-10px_20px_20px_rgba(0,0,0,.5)]"
            onPress={() => handleOpen(index)}
          >
            <HeroImage
            isZoomed
            disableSkeleton
            radius="none"
            loading="lazy"
            src={url}
            alt="sample"
            width={alignmentStyles[alignment][1]} height={alignmentStyles[alignment][2]}
            />
          </Button>

          <Modal
            classNames={{
              body: "p-0",
              closeButton: "bg-white/30 text-[#323232]/100",
            }}
            size="2xl"
            backdrop="blur"
            isOpen={isOpen && currentIndex === index}
            onOpenChange={onOpenChange}
          >          
            <ModalContent>
              {() => (
                <>
                  <ModalBody>
                    <NextImage src={url} alt="sample" width="600" height="1200" className="w-auto"/>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
        </article>
      ))}
    </main>
  );
};