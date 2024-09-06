'use client';

import { Separator } from "../ui/separator";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

interface PageSeparatorProps {
  backgroundColor?: string;
  foregroundColor?: string;
}

export default function PageSeparator({
  backgroundColor = "bg-white", // valeur par défaut si non fourni
  foregroundColor = "bg-neutral-950", // autre valeur par défaut si non fourni
}: PageSeparatorProps) {
  return (
    <>
      <div className={`flex justify-center items-center h-[100px] w-full ${backgroundColor}`}>
        <Separator className={`w-[80vw] h-[2px] ${foregroundColor}`} />
      </div>
    </>
  );
}
