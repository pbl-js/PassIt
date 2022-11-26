import Link from "next/link";

const sections = ["Section One", "Section Two", "Section Three"];

export default function Page() {
  return (
    <div className="p-10">
      <div className="flex flex-row mb-12 gap-10 items-center">
        <h1 className="mr-auto text-2xl font-bold">LOGO</h1>
        <div className="flex flex-row gap-8 font-medium">
          <Link href="#">Link one</Link>
          <Link href="#">Link two</Link>
          <Link href="#">Link three</Link>
        </div>
        <Link
          className="py-5 px-8 bg-yellow-500 rounded-xl text-purple-700 font-bold"
          href="/learn"
        >
          Go to application
        </Link>
      </div>
      <div className="flex flex-col gap-8">
        {sections.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center w-full h-[800px] rounded-xl bg-purple-700 text-purple-300 text-4xl"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
