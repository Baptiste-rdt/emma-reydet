'use client'

import { Loader } from '@/components/loader/Loader'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import PageSeparator from "@/components/page-separator/PageSeparator";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface CreationUrlPageProps {
    params: {
        creationUrl: string
    }
}

export default function CreationUrlPage({ params }: CreationUrlPageProps) {

    // Utilisé pour le chargement de la page
    const [loading, setLoading] = useState<boolean>(true);

    // Création sélectionnée
    const [creation, setCreation] = useState<any>();

    useEffect(() => {
        const fetchData = async () => {
    
            console.log(params)
            const response = await fetch(`/api/findCreationByUrl?url=${params.creationUrl}`, {
                method: "GET",
            });

            const data = await response.json();
            console.log(data);
            setCreation(data);
            setLoading(false);
        };
    
        fetchData();
      }, []);

    if (loading) {
        return <Loader/>;
    }

    return (
        <>
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
                <div className="text-2xl text-neutral-950">{creation.name}</div>
                <PageSeparator />
                <div className="flex items-center justify-center w-[80vw]">
                    <div className="text-justify w-[50%]">{creation.description}</div>
                    <div className="relative w-[50%] h-[60vh]">
                        <Image
                            src={`/ressources/${creation.image}`}
                            alt={`Photo de ${creation.name}`}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full p-12"
                        />
                    </div>
                </div>
                <PageSeparator />
            </main>
        </>
    )
}