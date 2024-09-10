'use client'

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import PageSeparator from "@/components/page-separator/PageSeparator"
import * as React from "react";
import { useEffect, useState } from "react";

export default function Home() {

  // Utilisé pour le chargement de la page
  const [loading, setLoading] = useState<boolean>(true);

  // Création sélectionnée
  const [creations, setCreations] = useState<any[]>();

  //Largeur de la fenêtre (utilisé pour le responsive)
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
      const fetchData = async () => {
  
          const response = await fetch("/api/getAllCreations", {
              method: "GET",
          });

          const data = await response.json();
          setCreations(data);
          setLoading(false);
      };
  
      fetchData();
    }, []);


    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
      <PageSeparator />
      <div className="flex w-full flex-col md:flex-row">
        <div className="md:w-[60vw] items-center flex flex-col">
          <div className="text-2xl">Emma Reydet</div>
          <Separator className="w-[80vw] md:w-[40vw] h-[2px] bg-neutral-900 my-9" />
          <div className="w-[70vw] md:w-[30vw] text-justify">
            Après une année en apprentissage au sein de la boulangerie Raphaël Jäger où j&#x27;ai effectué un CAP Pâtisserie,
            je souhaite approfondir mes connaissances en réalisant une mention complémentaire pâtisserie. Déterminée et motivée,
            je suis donc à la recherche d&#x27;un poste d&#x27;apprentie pâtissière pour l&#x27;année 2024-2025.
          </div>
          <Button className="m-5 rounded-none bg-neutral-50 hover:bg-neutral-200 text-rose-400 border-2 border-rose-400" onClick={() => window.location.href = '/presentation'}>En Savoir Plus</Button>
          <Separator className="w-[40vw] bg-neutral-900 my-9" />
        </div>
        <div className="relative w-full md:w-[40vw] h-[60vh]">
          <Image
            src="/ressources/portrait.jpg"
            alt="Portait de Emma Reydet"
            layout="fill"
            objectFit="cover"
            className="w-full h-full p-10 md:p-0"
          />
        </div>
        {windowWidth < 768 ? <PageSeparator/> : <></>}
      </div>
      <div className=" flex flex-col w-full bg-rose-400 items-center justify-center">
        <Separator className="w-[80vw] h-[2px] bg-neutral-50 my-9" />
        <div className="text-neutral-50 text-2xl">Mes Créations</div>
        <Separator className="w-[80vw] h-[2px] bg-neutral-50 my-9" />
        <Carousel
          className="w-[80vw] mb-12"
        >
          <CarouselContent>
            {loading ? 
            Array(4).fill("empty").map((_,i)=>(
              <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 pl-2" key={i}>
                <Skeleton className="w-[250px] h-[350px]"/>
              </CarouselItem>
            )) :
            creations?.map((creation, index) => (
              <CarouselItem className="basis-full md:basis-1/2 xl:basis-1/3 2xl:basis-1/4 pl-2" key={index}>
                <div className="flex flex-col aspect-auto items-center justify-between bg-neutral-200 border border-neutral-300" onClick={() => window.location.href = `/creations/${creation.url}`}>
                  <Image
                    src={`/ressources/${creation.image}`}
                    alt={creation.name}
                    width={200}
                    height={200}
                    className="w-full aspect-square"
                  />
                  <div className="h-24 font-semibold text-center items-center justify-center flex">{creation.name}</div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <PageSeparator/>
    </main>
  );
}
