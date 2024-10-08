"use client";

import PageSeparator from "@/components/page-separator/PageSeparator";
import { Separator } from "@/components/ui/separator";
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

    const FormationCard = ({ formation }: any) => {
        return (

            <div className="2xl:w-[10vw] flex flex-row 2xl:flex-col justify-end min-h-[250px] gap-4 items-center">
                <div className="flex flex-col justify-end items-center">
                    <div className=" text-lg text-center font-semibold">{formation.titre}</div>
                    <Separator className="w-8 h-[2px] bg-neutral-950 my-1" />
                    <div className="text-center ">{formation.etablissement}</div>
                    <Separator className="w-8 h-[1px] bg-neutral-500 my-1" />
                    <div className="text-sm text-center">{formation.ville}</div>
                </div>
                <div className="aspect-square rounded-full bg-rose-400 text-neutral-100 text-center flex items-center justify-center w-12 h-12 2xl:mt-2">
                    {formation.date}
                </div>
            </div>

        );
    };

    const WorkingCard = ({ working }: any) => {
        return (

            <div className="2xl:w-[10vw] flex flex-row 2xl:flex-col justify-start min-h-[250px] items-center gap-4">
                <div className="aspect-square rounded-full bg-rose-400 text-neutral-100 text-center flex items-center justify-center h-20 2xl:mb-2">
                    {working.date}
                </div>
                <div className="flex flex-col justify-start items-center">
                    <div className=" text-lg text-center font-semibold">{working.titre}</div>
                    <Separator className="w-8 h-[2px] bg-neutral-950 my-1" />
                    <div className="text-center ">{working.entreprise}</div>
                </div>
            </div>

        );
    };

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
                <div className="text-2xl text-neutral-950">Présentation</div>
                <PageSeparator />
                <div className="flex flex-col md:flex-row items-center justify-center w-[80vw]">
                    <div className="text-justify md:w-[50%]">
                        Après une année en apprentissage au sein de la boulangerie Raphaël Jäger où
                        j&#x27;ai effectué un CAP Pâtisserie, je souhaite approfondir mes connaissances en
                        réalisant une mention complémentaire pâtisserie. Déterminée et motivée, je suis
                        donc à la recherche d&#x27;un poste d&#x27;apprentie pâtissière pour l&#x27;année 2024-2025.
                    </div>
                    <div className="relative w-full md:w-[50%] h-[60vh]">
                        <Image
                            src="/ressources/portrait.jpg"
                            alt="Portrait de Emma Reydet"
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full p-12"
                        />
                    </div>
                </div>
                <PageSeparator backgroundColor="bg-rose-400" foregroundColor="bg-neutral-200" />
                {windowWidth > 1536 ?
                    <div className="flex flex-col items-center w-[80vw] justify-center">
                        {/* Frise Horizontale */}

                        {/* Formations */}
                        <div className="flex justify-center w-full align-bottom pb-5">
                            {mainEvents.map((event, index) => (
                                event.display ?
                                    <FormationCard formation={event} key={index} />
                                    : <div className="h-1 w-[10vw]" key={index}></div>
                            ))}
                        </div>
                        {/* Ligne Formations */}
                        <div className="flex flex-row justify-center w-[60vw] h-auto items-center">
                            <div className="border-b-2 border-neutral-950 h-auto w-full"></div>
                        </div>
                        {/* Liens entre les lignes */}
                        <div className="flex flex-row">
                            <div className="w-[10vw] h-1" />
                            <div className="flex justify-end h-[45.2px] w-[10vw]">
                                <div className="h-[2px] w-16 bg-neutral-950 transform rotate-45 origin-top-right mt-[44px]"></div>
                            </div>
                            <div className="w-[40vw] h-1" />
                        </div>
                        {/* Ligne Expérience Pro */}
                        <div className="flex flex-col justify-center w-full">
                            <div className="flex-1"></div>
                            <div className="flex flex-col items-center">
                                <div className="flex justify-center w">
                                    <div className="h-1 w-[20vw]"></div>
                                    {subEvents.map((event, index) => (
                                        <div key={index} className="flex items-center w-[10vw]">
                                            {index < subEvents.length && (
                                                <div className={`border-t-2 border-neutral-950 w-full `}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Expériences Pros */}
                        <div className="flex flex-col justify-center w-full pt-5">
                                <div className="flex justify-center">
                                    <div className="h-1 w-[20vw]"></div>
                                    {subEvents.map((event, index) => (
                                        event.display ?
                                            <WorkingCard working={event} key={index} />
                                            : <div className="h-1 w-[10vw]" key={index}></div>
                                    ))}
                                </div>
                        </div>
                    </div>
                    :
                    <div className="flex items-center w-[80vw] justify-center my-5">
                        {/* Frise Verticale */}

                        {/* Formations */}
                        <div className="flex flex-col justify-end w-full pr-5">
                            {mainEvents.map((event, index) => (
                                event.display ?
                                    <FormationCard formation={event} key={index} />
                                    : <div className="h-[250px] w-1" key={index}></div>
                            ))}
                        </div>
                        {/* Ligne Formations */}
                        <div className="flex flex-row justify-center h-full w-[2px] items-center">
                            <div className="bg-neutral-950 w-[2px] h-[1500px]"></div>
                        </div>
                        {/* Liens entre les lignes */}
                        <div className="flex flex-row">
                            <div className="w-1 h-[250px]" />
                            <div className="flex justify-end h-[250px] w-[45.2px] items-end">
                                <div className="h-16 w-[2px] bg-neutral-950 transform -rotate-45 origin-bottom-right mt-[44px]"></div>
                            </div>
                            <div className="w-1 h-[1000px]" />
                        </div>
                        {/* Ligne Expérience Pro */}
                        <div className="flex flex-col justify-center">
                            <div className="flex-1"></div>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-col justify-center">
                                    <div className="h-[500px] w-1"></div>
                                    <div className="bg-neutral-950 w-[2px] h-[1000px]"></div>
                                </div>
                            </div>
                        </div>
                        {/* Expériences Pros */}
                        <div className="flex flex-col justify-start w-full pl-5">
                                <div className="flex flex-col justify-start">
                                    <div className="h-[500px] w-1"></div>
                                    {subEvents.map((event, index) => (
                                        event.display ?
                                            <WorkingCard working={event} key={index} />
                                            : <div className="h-[250px] w-1" key={index}></div>
                                    ))}
                                </div>
                        </div>
                    </div>
                }
                <PageSeparator />
            </main>
        </>
    )
}