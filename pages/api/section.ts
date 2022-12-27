import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";
import { getCurrentUser } from "../../utils/session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await prisma.section.findMany();

        res.status(200).json(posts);
      } catch (error) {
        res.status(500).json({ error: "Failed to load data" });
      }
      break;
    case "POST":
      // eslint-disable-next-line no-case-declarations
      const user = await getCurrentUser();

      if (!user) {
        res.status(401).json({ error: "Unauthorized" });
      }

      try {
        const post = await prisma.section.create({
          data: {
            title: "eloo",
            id: "2",
          },
        });

        res.status(201).json(post);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
      break;
  }
}

export default handler;
