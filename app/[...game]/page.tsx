import React from "react";

export default function PlayPage() {
  return <div>This is play page</div>;
}

export async function generateStaticParams() {
  return [
    {
      game: "food",
    },
    {
      game: "drinks",
    },
  ];
}
