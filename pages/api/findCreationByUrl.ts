import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return findCreationByUrl(req, res);
  } else {
    res.status(405).json({ message: "Méthode non autorisée" });
  }
}

async function findCreationByUrl(req: NextApiRequest, res: NextApiResponse) {
    const {url} = req.query
    try {
      console.log(url)
        const doc = await prisma.creations.findFirst({
        where:{
            url : url as string
        }
        })
      res.status(200).json(doc);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération de la création" });
    }
  }