import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <h1>Forum</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/Create"}>Create Post</Link>
      </nav>
    </div>
  );
}
