import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link href={"/learn"}>Go to application</Link>
    </div>
  );
}
