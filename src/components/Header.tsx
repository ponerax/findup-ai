import { Links } from "@/libs/Links";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterXFill } from "react-icons/ri";

function Header() {
  return (
    <header className="flex justify-between absolute top-8 z-50 items-center w-full px-10 text-white">
      <nav className="flex items-center gap-10 tracking-widest">
        <Link href="#" rel="noopener noreferrer" target="_blank">
          <Image
            src="/images/logo_with_text.svg"
            alt="Logo with text"
            width={200}
            height={200}
          />
        </Link>
        <Link
          href="#strategy"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:scale-105 transition sm:block hidden"
        >
          Our strategy
        </Link>
        <Link
          href="#companion"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:scale-105 transition sm:block hidden"
        >
          Your companion
        </Link>
        <Link
          href="#whyus"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:scale-105 transition sm:block hidden"
        >
          Why us?
        </Link>
      </nav>
      <Link
        href={Links.twitter}
        rel="noopener noreferrer"
        target="_blank"
        className="items-center bg-black p-2 text-xl rounded-full text-white tracking-widest hover:text-black hover:bg-white transition"
      >
        <RiTwitterXFill />
      </Link>
    </header>
  );
}

export default Header;
