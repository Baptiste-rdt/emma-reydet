import PageSeparator from "@/components/page-separator/PageSeparator";
import Image from "next/image";

export default function Page() {

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
                        j'ai effectué un CAP Pâtisserie, je souhaite approfondir mes connaissances en
                        réalisant une mention complémentaire pâtisserie. Déterminée et motivée, je suis
                        donc à larecherche d'un poste d'apprentie pâtissière pour l'année 2024-2025.
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
                <PageSeparator backgroundColor="bg-rose-400" foregroundColor="bg-neutral-200"/>
                <div>Ici le graphe de l'historique</div>
                <PageSeparator/>
            </main>
        </>
    )
}