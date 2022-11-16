import { NextApiResponse, NextApiRequest } from "next";
import { prisma } from "../../server/db/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      const posts = await prisma.section.findMany();

      res.status(200).json(posts);
      break;
    case "POST":
      try {
        const post = await prisma.section.create({
          data: {
            title: "eloo",
            id: 2,
          },
        });

        res.status(201).json(post);
      } catch (error) {
        console.log(error);
      }
      break;
    default:
      console.log("first");
      break;
  }
}

export default handler;
