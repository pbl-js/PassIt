import React from "react";

import { getSections } from "../../../server/models/section";
import { ControlCenter } from "./ControlCenter";

const mockTopics = [
  {
    id: 1,
    title: "Owoce i warzywa",
  },
  {
    id: 2,
    title: "Słodycze i przekąski",
  },
  {
    id: 3,
    title: "Napoje",
  },
];

export default async function AdminPage() {
  const sections = await getSections();

  return (
    <div className="w-full">
      <ControlCenter />
      <div className="flex flex-col gap-12">
        {sections.map(({ id, title }) => (
          <div key={id}>
            <div className="text-xl font-semibold tracking-wider uppercase">
              {title}
            </div>
            <div className="mt-5 flex flex-row gap-6">
              {mockTopics.map(({ title, id }) => (
                <div
                  key={id}
                  className="w-[200px] h-[150px] p-6 bg-yellow-500 rounded-2xl text-lg font-semibold"
                >
                  {title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
