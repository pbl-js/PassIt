import Link from 'next/link';

const sections = ['Section One', 'Section Two', 'Section Three'];

export default function Page() {
  return (
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
  );
}
