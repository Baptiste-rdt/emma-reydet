'use client'

import { Loader } from '@/components/loader/Loader'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

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
            <div className='pt-[100px]'>{creation.name}</div>
        </>
    )
}