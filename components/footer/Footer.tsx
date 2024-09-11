'use client'

import { Separator } from "../ui/separator";
import { Linkedin, Instagram, Facebook} from "lucide-react";
import Image from "next/image";
import {useState, useEffect} from "react";

export default function Footer() {

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
            <footer className="w-full h-[200px] m-0 flex items-center py-2 px-2 z-50 select-none bg-neutral-950 text-neutral-200">
                <div className="flex items-center w-full justify-between px-10 lg:px-24 gap-4">
                    <div className="flex items-center gap-12 lg:w-[30vw] justify-start"  onClick={() => window.location.href = '/'}>
                        <Image
                            src="/ressources/logo_emma.png"
                            alt="Logo du site"
                            width={100}
                            height={100}
                        />
                        {windowWidth > 1024 ? <h2 className="text-2xl font-bold cursor-pointer m-0 p-0" onClick={() => window.location.href = '/'}>Emma Reydet</h2>:<></>}
                    </div>
                    <div className=" flex flex-col items-center justify-center lg:w-[30vw]">
                        <div className="text-xl">Contact</div>
                        <Separator className="relative my-3 w-[40px] bg-neutral-200" />
                        <div className="text-sm text-center">Tel : +33 7 77 22 17 03</div>
                        <div className="text-sm text-center">Mail : emmareydet8@gmail.com</div>
                    </div>
                    <div className="flex gap-2 lg:w-[30vw] justify-end flex-col lg:flex-row">
                        <div className="border-2 border-rose-400 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={(e:any) => {window.open('https://www.instagram.com/emmareydet/', '_blank')}}>
                            <Instagram className="h-6 w-6 text-rose-400" />
                        </div>
                        <div className="border-2 border-rose-400 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={(e:any) => {window.open('https://www.linkedin.com/in/emma-reydet/', '_blank')}}>
                            <Linkedin className="h-6 w-6 text-rose-400" />
                        </div>
                        <div className="border-2 border-rose-400 p-1 rounded-full flex items-center justify-center cursor-pointer" onClick={(e:any) => {window.open('https://www.example.com', '_blank')}}>
                            <Facebook className="h-6 w-6 text-rose-400" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}