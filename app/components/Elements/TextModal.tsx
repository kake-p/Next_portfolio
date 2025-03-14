import React, { useState } from "react";
import {Image as HeroImage} from "@heroui/react";
import NextImage from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";

type Props = {
  title: string[];
  text: string[][];
  images: string[];
  url: string[];
}

export const TextModal = ({title, text, images, url}: Props) => {  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | null>(url[0]);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setCurrentUrl(url[index]);
    onOpen();
  };

  const onVisit = () => {
    if (currentUrl) {
      window.open(currentUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="flex flex-col items-end gap-10 w-2/3">
      {images.map((url, index) => (
        <article className={index === 1 ? "self-start" : ""} key={index}>
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
            width="600" 
            height="1500"
            />
          </Button>

          <Modal
            classNames={{
              body: "p-0",
              base: "bg-opacity-80",
              closeButton: "bg-white/30 text-[#323232]/100",
            }}
            size="3xl"
            backdrop="blur"
            isOpen={isOpen && currentIndex === index}
            onOpenChange={onOpenChange}
          >          
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader>{title[index]}</ModalHeader>

                  <ModalBody>
                    <NextImage src={url} alt="sample" width="600" height="1200" className="w-auto"/>
                    <div className="px-6 py-4 flex flex-col">
                      <p className="font-bold" lang="ja">概要</p>
                      <p className="self-center" lang="ja">{text[index][0]}</p>
                    </div>
                    <div className="px-6 py-4 flex flex-col">
                      <p className="font-bold" lang="ja">使用技術</p>
                      <p className="self-center">{text[index][1]}</p>
                    </div>
                  </ModalBody>
                  
                  <ModalFooter>
                    <Button color="default" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onVisit}>
                      Visit
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </article>
      ))}
    </main>
  );
};