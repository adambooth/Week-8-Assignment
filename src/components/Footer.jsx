import Link from "next/link";

export default function Footer() {
  return (
    <div className="header" id="footer">
      <h1>Forum</h1>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/Create"}>Create Post</Link>
      </nav>
    </div>
  );
}
