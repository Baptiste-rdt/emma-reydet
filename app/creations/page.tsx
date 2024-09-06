'use client'

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import PageSeparator from "@/components/page-separator/PageSeparator"
import * as React from "react";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {

    // Utilisé pour le chargement de la page
    const [loading, setLoading] = useState<boolean>(true);

    // Création sélectionnée
    const [creations, setCreations] = useState<any[]>();

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
            <div className="text-2xl text-neutral-950">Mes Créations</div>
            <PageSeparator />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-4 max-w-[80vw]">
                {loading ?
                    Array(4).fill("empty").map((_, i) => (
                            <Skeleton className="w-[250px] h-[350px]" />
                    )) :
                    creations?.map((creation) => (
                            <div className="flex flex-col aspect-auto items-center justify-between bg-neutral-200 border border-neutral-300" onClick={() => window.location.href = `/creations/${creation.url}`}>
                                <Image
                                    src={`/ressources/${creation.image}`}
                                    alt={creation.name}
                                    width={400}
                                    height={400}
                                    className="w-full aspect-square"
                                />
                                <div className="h-24 font-semibold text-center items-center justify-center flex">{creation.name}</div>
                            </div>
                    ))}
            </div>
            <PageSeparator />
        </main>
    );
}
