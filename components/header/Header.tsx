'use client'

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import "./header.css"
import Link from "next/link";
import Image from "next/image";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu } from "lucide-react";


export default function Header() {

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
            <header className="fixed left-0 w-full h-[100px] m-0 flex items-center py-2 px-2 z-50 select-none header-glassmorphism bg-neutral-950 bg-opacity-75 text-neutral-200">
                <div className="flex items-center w-full justify-between pr-8 pl-8 lg:pr-24">
                    <div className="flex items-center gap-12">
                        <Image
                            src="/ressources/logo_emma.png"
                            alt="Logo du site"
                            width={50}  // Largeur de l'image
                            height={50} // Hauteur de l'image
                        />
                        <h2 className="text-2xl font-bold cursor-pointer m-0 p-0" onClick={() => window.location.href = '/'}>Emma Reydet</h2>
                    </div>
                    {windowWidth > 1024 ?
                        <div className="flex items-center">
                            <Link href="/presentation" className="underline-offset-4 hover:underline text-neutral-200">Présentation</Link>
                            <Separator orientation="vertical" className="relative mx-5 h-[40px] bg-neutral-200" />
                            <Link href="/creations" className="underline-offset-4 hover:underline text-neutral-200">Mes Créations</Link>
                            <Separator orientation="vertical" className="relative mx-5 h-[40px] bg-neutral-200" />
                            <Link href="/contact" className="underline-offset-4 hover:underline text-neutral-200">Contact</Link>
                        </div>
                        :
                        <div>
                            <Menubar className="bg-transparent border-none rounded-none">
                                <MenubarMenu>
                                    <MenubarTrigger className="bg-opacity-25 rounded-none"><Menu className="w-8 h-8" /></MenubarTrigger>
                                    <MenubarContent className="bg-neutral-950 bg-opacity-90 text-neutral-200 border-none rounded-none">
                                        <MenubarItem onClick={() => window.location.href = "/presentation"} className="rounded-none">Présentation</MenubarItem>
                                        <MenubarSeparator className="bg-neutral-600" />
                                        <MenubarItem onClick={() => window.location.href = "/creations"} className="rounded-none">Mes Créations</MenubarItem>
                                        <MenubarSeparator className="bg-neutral-600" />
                                        <MenubarItem onClick={() => window.location.href = "/contact"} className="rounded-none">Contact</MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>

                        </div>
                    }
                </div>
            </header>
        </>
    );
}