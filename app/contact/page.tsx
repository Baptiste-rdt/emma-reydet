'use client'

import PageSeparator from "@/components/page-separator/PageSeparator";
import { Separator } from "@radix-ui/react-separator";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Page() {

    const mainEvents = [
        { display: true, date: "2018", titre: "Baccalauréat Scientifique SVT - spécialité physique-chimie", etablissement: "Lycée Jean-Moulin", ville: "Albertville" },
        { display: true, date: "2020", titre: "DUT Chimie - spécialité chimie analytique de synthèse", etablissement: "Iut 1 - Site Gambetta", ville: "Grenoble" },
        { display: true, date: "2021", titre: "Licence Professionnelle Formulateur Coloriste - spécialité cosmétique", etablissement: "ITECH", ville: "Ecully" },
        { display: false },
        { display: true, date: "2024", titre: "CAP Pâtisserie", etablissement: "CFA MFR Le Fontanil", ville: "Saint-Alban-Leysse" },
        { display: true, date: "2025", titre: "Mention Complémentaire Pâtisserie", etablissement: "CFA MFR Le Fontanil", ville: "Saint-Alban-Leysse" },
    ];

    const subEvents = [
        { display: true, date: "2020 - 2021", titre: "Apprentie Technicienne de Formulation", entreprise: "Myoshi" },
        { display: true, date: "2022 - 2023", titre: "Technicienne de Formulation (CDI)", entreprise: "Capsum" },
        { display: true, date: "2023 - 2024", titre: "Apprentie Pâtissière", entreprise: "Boulangerie Raphaël Jäger" },
        { display: true, date: "2024 - ....", titre: "Apprentie Pâtissière", entreprise: "Patisserie Cédric Pernot" },
    ];

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
                <div className="flex items-center justify-center w-[80vw] h-[60vh]">
                    <div className="flex flex-col w-[40%] justify-center items-center">
                        <div className="font-semibold text-lg">Coordonnées</div>
                        <Separator className="w-[50px] h-[1px] bg-neutral-950 my-4" />
                        <div>Tel : +33 7 77 22 17 03</div>
                        <div>Mail : emmareydet8@gmail.com</div>
                    </div>
                    <Separator orientation="vertical" className="h-[30vh] w-[1px] bg-neutral-950" />
                    <div className="flex flex-col gap-2 w-[40%] justify-center items-center">
                        <div className="font-semibold text-lg">Réseaux Sociaux</div>
                        <Separator className="w-[50px] h-[1px] bg-neutral-950 my-4" />
                        <div className="flex">
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