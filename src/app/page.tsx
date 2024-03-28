import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Links } from "@/libs/Links";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mainbg overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}

      <section className="flex items-center flex-col min-h-screen justify-center sm:mr-10 sm:px-0 px-8">
        <div className="flex flex-col gap-7 relative items-center">
          {/* LOGO & TITLE */}

          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/logo.svg"
              alt="Logo without text"
              width={70}
              height={70}
              className="z-50"
            />
            <h1
              className="sm:text-6xl text-4xl text-white sm:herotextstroke herotextstroke text-center tracking-[0.06em] z-50"
              style={{
                lineHeight: "1.2",
              }}
            >
              Next-Gen AI for Alpha Finder
              <br />
              Move Faster Than The Market Itself
            </h1>
          </div>

          {/* PARAGRAPH AND TELEGRAM */}

          <div className="flex flex-col gap-10 items-center">
            <p className="text-center tracking-[0.15em] leading-5 text-white max-w-2xl z-50 opacity-75">
              Leverage AI with our Telegram Bot.
              <br />
              <br />
              FINDUP AI&apos;s provides real-time market analytics to support
              your decision-making process in trading.
            </p>
            <div className="flex gap-3 items-center">
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

            {/* CLOUDS TOP LEFT */}

            <Image
              src="/assets/cloud.png"
              alt="Cloud"
              width={190}
              height={190}
              className="absolute left-0 sm:-top-5 -top-24 sm:w-[190px] w-[120px]"
            />

            {/* CLOUDS TOP RIGHT */}

            <Image
              src="/assets/cloud.png"
              alt="Cloud"
              width={90}
              height={90}
              className="absolute -right-14 -top-7 -rotate-[3deg] scale-x-[-1]"
            />

            {/* SUN WITH CLOUDS BOTTOM RIGHT */}

            <Image
              src="/assets/sun.png"
              alt="Cloud"
              width={450}
              height={450}
              className="absolute -right-40 sm:bottom-[-5.2rem] bottom-[-7.2rem] animate-bounce-sun"
            />

            {/* CLOUDS BOTTOM LEFT */}

            <Image
              src="/assets/cloud.png"
              alt="Cloud"
              width={150}
              height={150}
              className="absolute sm:left-0 sm:ml-28 -left-14 -bottom-44 -rotate-[3deg] scale-x-[-1]"
            />
          </div>
        </div>
      </section>

      {/* STREAMLINED SECTION */}

      <section
        className="flex scroll-m-5 flex-col gap-5 items-center sm:mt-20 mt-5 sm:px-0 px-8 relative"
        id="strategy"
      >
        <h4 className="text-3xl text-white streamlinedtextstroke text-center max-w-3xl leading-[1.3] z-50">
          Gain Unfair Advantages with Instant Alpha Insights to Beat Competitors
        </h4>
        <p className="sm:max-w-[49rem] max-w-[19rem] text-center text-white tracking-[0.15em] opacity-75">
          FINDUP AI optimizes your decision-making by providing tailored
          analyses that help you quickly identify profitable trading
          opportunities.
          <br />
          <br />
          Our Telegram bot quickly finds hidden and profitable opportunities
          using smart AI. Find your hidden gem before anyone else with unseen
          speed and precision.
        </p>

        {/* GRAPHIC BOTTOM RIGHT */}

        <Image
          src="/assets/graphic.png"
          alt="Graphic"
          width={400}
          height={400}
          className="absolute sm:right-[-19rem] mr-5 sm:-bottom-44 -bottom-60 sm:w-[400px] w-[200px]"
        />
      </section>

      {/* ULTIMATE TRADING COMPANION SECTION */}

      <section
        className="flex scroll-m-8 flex-col gap-10 items-center sm:mt-96 mt-[32rem] sm:px-0 px-8 relative"
        id="companion"
      >
        <h2 className="sm:text-6xl text-3xl text-white sm:ultimatetradingcompaniontextstroke ultimatetradingcompaniontextstroke text-center max-w-5xl sm:leading-[1.3] tracking-[0.1em] z-50">
          AI Insights for Top Token <br />
          Snipe the Next Big Thing Before Anyone Else
        </h2>
        <p className="max-w-5xl text-center text-white tracking-[0.15em] leading-6 opacity-75 text-lg">
          Your ultimate trading companion.
          <br />
          <br />
          AI scans the crypto markets, providing traders with decisive insights.
        </p>

        {/* ARROW TOP LEFT */}

        <Image
          src="/assets/arrow.png"
          alt="Arrow"
          width={250}
          height={250}
          className="absolute -top-60 left-14"
        />

        {/* CLOUD TOP RIGHT */}

        <Image
          src="/assets/cloud.png"
          alt="Cloud"
          width={150}
          height={150}
          className="absolute right-[-12.9rem] -top-40"
        />
      </section>

      {/* PRECISION, INNOVATION & AWARENESS, RAPIDITY SECTION */}

      <section
        className="flex scroll-m-5 flex-col sm:gap-20 gap-10 items-center mt-20 relative mb-10 sm:px-0 px-8"
        id="whyus"
      >
        {/* PRECISION */}

        <article className="boxprecision p-8 sm:w-[52rem] flex flex-col gap-7 justify-center relative">
          <h3 className="text-4xl precisionboxtextstroke">Precision</h3>
          <p className="opacity-75 tracking-widest max-w-lg leading-[1.35rem]">
            It&apos;s a powerful tool that reveals the market&apos;s hidden gems
            <br />
            <br />
            Our bot examines the crypto landscape with precision, enabling you
            to see beyond the surface of market movements and discover
            opportunities that others might miss.
          </p>

          {/* GLASS RIGHT */}

          <Image
            src="/assets/glass.png"
            alt="Glass"
            width={250}
            height={250}
            className="absolute sm:-right-10 sm:-bottom-5 sm:w-[250px] w-[90px] top-2 right-0"
          />

          {/* CLOUD BOTTOM LEFT */}

          <Image
            src="/assets/cloud.png"
            alt="Cloud"
            width={150}
            height={150}
            className="absolute -left-[20.5rem] bottom-6 scale-x-[-1] -rotate-[7deg]"
          />
        </article>

        {/* INNOVATION & AWARENESS */}

        <div className="flex sm:flex-row flex-col sm:gap-8 gap-10 w-full relative">
          {/* INNOVATION */}

          <article className="boxprecision justify-center p-8 sm:w-[22rem] flex flex-col gap-7 relative">
            <h3 className="text-4xl precisionboxtextstroke">Innovation</h3>
            <p className="opacity-75 tracking-widest max-w-[11rem] leading-[1.35rem] text-sm">
              AI lies the fusion of expert trading insights and engineering
              precision
              <br />
              <br />
              Saving you hours of laborious dig.
            </p>

            {/* AI RIGHT */}

            <Image
              src="/assets/ai.png"
              alt="AI"
              width={250}
              height={250}
              className="absolute sm:-right-[4.9rem] sm:-top-1 z-50 sm:w-[250px] w-[200px] -right-5 bottom-5"
            />
          </article>

          {/* AWARENESS */}

          <article className="boxprecision justify-center p-8 sm:w-[35rem] flex flex-col gap-7 relative">
            <h3 className="text-4xl precisionboxtextstroke">Awareness</h3>
            <p className="opacity-75 tracking-widest max-w-[18rem] leading-[1.35rem] text-sm">
              It ensures you&apos;re always in the loop with crucial market
              updates, delivering real-time and relevant trading signals.
              <br />
              <br />
              We provide you with charts, details, and links to keep you
              informed.
            </p>

            {/* AI RIGHT */}

            <Image
              src="/assets/horn.png"
              alt="Horn"
              width={250}
              height={250}
              className="absolute sm:-right-7 sm:top-4 sm:w-[250px] w-[110px] top-0 right-0"
            />
          </article>

          {/* CLOUD RIGHT */}

          <Image
            src="/assets/cloud.png"
            alt="Cloud"
            width={80}
            height={80}
            className="absolute -right-[17.4rem] -bottom-20 scale-x-[-1] -rotate-[13deg] sm:block hidden"
          />
        </div>

        {/* RAPIDITY */}

        <article className="boxprecision p-8 sm:w-[59rem] flex flex-col gap-7 justify-center relative z-50">
          <h3 className="text-4xl precisionboxtextstroke">Rapidity</h3>
          <p className="opacity-75 tracking-widest max-w-[40rem] leading-[1.35rem]">
            Delegate, Don&apos;t Dig.
            <br />
            <br />
            It leverages sophisticated algorithms to provide rapid analysis and
            execution, turning brief market opportunities into actionable
            insights.
            <br />
            <br />
            Base your decisions on reliable data and AI-powered analysis to
            guarantee your chances of success.
          </p>

          {/* THUNDER RIGHT */}

          <Image
            src="/assets/thunder.png"
            alt="Thunder"
            width={350}
            height={350}
            className="absolute sm:-right-10 sm:w-[320px] w-[110px] sm:-top-7 top-0 right-0"
          />
        </article>

        {/* ARROW DOWN BOTTOM RIGHT */}

        <Image
          src="/assets/arrow_down.png"
          alt="Arrow Down"
          width={350}
          height={350}
          className="absolute sm:-right-10 -bottom-60"
        />
      </section>

      <Footer />
    </main>
  );
}
