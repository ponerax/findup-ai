import { Links } from "@/libs/Links";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col items-center mt-52">
      <div className="flex flex-col gap-5 items-center">
        <h4 className="text-3xl text-white streamlinedtextstroke text-center max-w-3xl leading-[1.3] z-50">
          Ready to elevate your crypto game with FINDUP AI?
        </h4>
        <p className="max-w-5xl text-center text-white tracking-[0.15em] opacity-75">
          Join our Telegram community to get started and experience the benefits
          of AI-powered trading insights.
        </p>
      </div>
      <div className="flex gap-3 items-center mt-5">
        {Links.telegram ? (
          <Link
            href={Links.telegram}
            rel="noopener noreferrer"
            target="_blank"
            className="flex gap-3 items-center bg-white p-2 rounded-3xl text-black tracking-widest px-5 buttonhover z-50"
          >
            Telegram
            <div className="bg-[#4C4C4C] rounded-full text-white border border-[#4C4C4C] transition">
              <ArrowUpRight className="p-0.5" />
            </div>
          </Link>
        ) : (
          <button
            className="flex gap-3 items-center bg-white p-2 rounded-3xl text-black tracking-widest px-5 z-50 cursor-not-allowed bg-white/70 transition"
            disabled
          >
            Telegram
            <div className="bg-[#4C4C4C] rounded-full text-white border border-[#4C4C4C] transition px-2">
              SOON
            </div>
          </button>
        )}
        <Link
          href={Links.twitter}
          rel="noopener noreferrer"
          target="_blank"
          className="flex gap-3 items-center bg-white p-2 rounded-3xl text-black tracking-widest px-5 buttonhover z-50"
        >
          Twitter
          <div className="bg-[#4C4C4C] rounded-full text-white border border-[#4C4C4C] transition">
            <ArrowUpRight className="p-0.5" />
          </div>
        </Link>
      </div>

      <p className="mt-20 text-white text-sm mb-10">
        FINDUPAI 2024, All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
