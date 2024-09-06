import PageSeparator from "@/components/page-separator/PageSeparator";
import { Separator } from "@/components/ui/separator";
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

    const FormationCard = ({ formation }: any) => {
        return (

            <div className="w-[10vw] flex flex-col justify-end min-h-[250px] my-4 items-center">
                <div className=" text-lg text-center font-semibold">{formation.titre}</div>
                <Separator className="w-8 h-[2px] bg-neutral-950 my-1"/>
                <div className="text-center ">{formation.etablissement}</div>
                <Separator className="w-8 h-[1px] bg-neutral-500 my-1"/>
                <div className="text-sm text-center">{formation.ville}</div>
                <div className="aspect-square rounded-full bg-rose-400 text-neutral-100 text-center flex items-center justify-center w-12 h-12 mt-2">
                    {formation.date}
                </div>
            </div>

        );
    };

    const WorkingCard = ({ working }: any) => {
        return (

            <div className="w-[10vw] flex flex-col justify-start min-h-[250px] my-4 items-center">
                <div className="aspect-square rounded-full bg-rose-400 text-neutral-100 text-center flex items-center justify-center h-20 mb-2">
                    {working.date}
                </div>
                <div className=" text-lg text-center font-semibold">{working.titre}</div>
                <Separator className="w-8 h-[2px] bg-neutral-950 my-1"/>
                <div className="text-center ">{working.entreprise}</div>
                
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
                <div className="flex items-center justify-center w-[80vw]">
                    <div className="text-justify w-[50%]">
                        Après une année en apprentissage au sein de la boulangerie Raphaël Jäger où
                        j&#x27;ai effectué un CAP Pâtisserie, je souhaite approfondir mes connaissances en
                        réalisant une mention complémentaire pâtisserie. Déterminée et motivée, je suis
                        donc à la recherche d&#x27;un poste d&#x27;apprentie pâtissière pour l&#x27;année 2024-2025.
                    </div>
                    <div className="relative w-[50%] h-[60vh]">
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
                <div className="flex flex-col items-center w-[80vw] justify-center">
                    {/* Ligne principale */}
                    <div className="flex justify-center w-full align-bottom">
                        {mainEvents.map((event, index) => (
                            event.display ? 
                            <FormationCard formation={event} key={index}/>
                            : <div className="h-1 w-[10vw]" key={index}></div>
                        ))}
                    </div>

                    <div className="flex justify-center w-full items-center">
                        {mainEvents.map((event, index) => (
                            <div key={index} className="flex items-center w-[10vw]">
                                {index < mainEvents.length && (
                                    <div className={`border-b-2 border-neutral-950 w-full`}></div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex">
                        <div className="w-[10vw] h-1" />
                        <div className="flex justify-end h-[45.2px] w-[10vw]">
                            <div className="h-[2px] w-16 bg-neutral-950 transform rotate-45 origin-top-right mt-[44px]"></div>
                        </div>
                        <div className="w-[40vw] h-1" />
                    </div>

                    <div className="flex flex-col justify-center w-full">
                        {/* Espace vide avant la sous-ligne */}
                        <div className="flex-1"></div>
                        {/* Ligne verticale depuis la deuxième bulle */}
                        <div className="flex flex-col items-center">
                            {/* Sous-événements */}
                            <div className="flex justify-center w">
                                <div className="h-1 w-[20vw]"></div>
                                {subEvents.map((event, index) => (
                                    <div key={index} className="flex items-center w-[10vw]">
                                        {/* Ligne horizontale sauf après la dernière bulle */}
                                        {index < subEvents.length && (
                                            <div className={`border-t-2 border-neutral-950 w-full `}></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Branche après la deuxième bulle */}
                    <div className="flex flex-col justify-center w-full mt-4">
                        {/* Espace vide avant la sous-ligne */}
                        <div className="flex-1"></div>
                        {/* Ligne verticale depuis la deuxième bulle */}
                        <div className="flex flex-col items-center">
                            {/* Sous-événements */}
                            <div className="flex justify-center w">
                                <div className="h-1 w-[20vw]"></div>
                                {subEvents.map((event, index) => (
                                    event.display ? 
                                    <WorkingCard working={event} key={index}/>
                                    : <div className="h-1 w-[10vw]" key={index}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <PageSeparator />
            </main>
        </>
    )
}