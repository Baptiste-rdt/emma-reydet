'use client'

import PageSeparator from "@/components/page-separator/PageSeparator";
import { Separator } from "@radix-ui/react-separator";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Page() {

    const [windowWidth, setWindowWidth] = useState(0);

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
                <div className="text-2xl text-neutral-950">Contact</div>
                <PageSeparator />
                <div className="flex flex-col md:flex-row items-center justify-center w-[80vw] h-[60vh] gap-8">
                    <div className="flex flex-col w-[40%] justify-center items-center">
                        <div className="font-semibold text-lg text-center">Coordonnées</div>
                        <Separator className="w-[50px] h-[1px] bg-neutral-950 my-4" />
                        <div className="text-center">Tel : +33 7 77 22 17 03</div>
                        <div className="text-center">Mail : emmareydet8@gmail.com</div>
                    </div>
                    <Separator orientation={windowWidth < 768 ? "horizontal" : "vertical"} className="h-[1px] md:h-[30vh] w-[60vw] md:w-[1px] bg-neutral-950" />
                    <div className="flex flex-col gap-2 w-[40%] justify-center items-center">
                        <div className="font-semibold text-lg text-center">Réseaux Sociaux</div>
                        <Separator className="w-[50px] h-[1px] bg-neutral-950 my-4" />
                        <div className="flex gap-2">
                            <div className="border-2 border-rose-400 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={(e: any) => { window.open('https://www.instagram.com/emmareydet/', '_blank') }}>
                                <Instagram className="h-6 w-6 text-rose-400" />
                            </div>
                            <div className="border-2 border-rose-400 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={(e: any) => { window.open('https://www.linkedin.com/in/emma-reydet/', '_blank') }}>
                                <Linkedin className="h-6 w-6 text-rose-400" />
                            </div>
                            <div className="border-2 border-rose-400 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={(e: any) => { window.open('https://www.example.com', '_blank') }}>
                                <Facebook className="h-6 w-6 text-rose-400" />
                            </div>
                        </div>
                    </div>
                </div>
                <PageSeparator />
            </main>
        </>
    )
}