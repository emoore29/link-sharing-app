import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/links"}>links</Link>
        </li>
        <li>
          <Link href={"/profile"}>profile</Link>
        </li>
        <li>
          <Link href={"/preview"}>preview</Link>
        </li>
      </ul>
    </nav>
  );
}
