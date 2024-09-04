'use client'

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay"

export default function Home() {


  return (
    <main className="flex flex-col items-center w-full">
      <div className="relative w-full h-[70vh]">
        <Image
          src="/ressources/tarte_fraises.jpg"
          alt="Tarte aux fraises"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="h-[10px] w-full"/>
      <div className="flex w-full">
        <div className="w-[60vw] items-center flex flex-col">
          <Separator className="w-[40vw] h-[2px] bg-neutral-900 my-9"/>
          <div className="text-2xl">Emma Reydet</div>
          <Separator className="w-[40vw] h-[2px] bg-neutral-900 my-9"/>
          <div className="w-[30vw] text-justify">
            Après une année en apprentissage au sein de la boulangerie Raphaël Jäger où j'ai effectué un CAP Pâtisserie, 
            je souhaite approfondir mes connaissances en réalisant une mention complémentaire pâtisserie. Déterminée et motivée, 
            je suis donc à la recherche d'un poste d'apprentie pâtissière pour l'année 2024-2025.
          </div>
          <Button className="m-5 rounded-none bg-neutral-50 hover:bg-neutral-200 text-rose-400 border-2 border-rose-400">En Savoir Plus</Button>
          <Separator className="w-[40vw] h-[2px] bg-neutral-900 my-9"/>
        </div>
        <div className="relative w-[40vw] h-[70vh]">
          <Image
            src="/ressources/cheffe.jpg"
            alt="Tarte aux fraises"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="h-[10px] w-full"/>
      <div className=" flex flex-col w-full bg-rose-400 items-center justify-center">
        <Separator className="w-[80vw] h-[2px] bg-neutral-50 my-9"/>
        <div className="text-neutral-50 text-2xl">Mes Créations</div>
        <Separator className="w-[80vw] h-[2px] bg-neutral-50 my-9"/>
        <Carousel
          className="w-[80vw]"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <div className="p-1">
                  <Card >
                    <CardContent className="flex flex-col aspect-auto items-center justify-between p-6" onClick={() => window.location.href = `/creations/${index}`}>
                      <Image
                        src="/ressources/tarte_tatin.png"
                        alt="Tarte tatin"
                        width={100}
                        height={100}
                        className="w-full aspect-square rounded-md"
                      />
                      <div className="m-8 font-semibold">La Tarte Tatin</div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext/>
        </Carousel>
        <Separator className="w-[80vw] h-[2px] bg-neutral-50 my-9"/>
      </div>
    </main>
  );
}
