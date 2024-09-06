import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return getAllCreations(req, res);
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}

async function getAllCreations(req: NextApiRequest, res: NextApiResponse) {
    try {
        const doc = await prisma.creations.findMany();
      res.status(200).json(doc);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des créations" });
    }
  }