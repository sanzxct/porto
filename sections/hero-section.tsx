import Image from "next/image";

import MemojiLaptop from "@/assets/icons/memoji-laptop.png";
import Grain from "@/assets/images/grain.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="hero" className="py-32 relative z-0 min-h-svh">
      {/* Mask */}
      <div className="absolute pointer-events-none inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div
          className="absolute pointer-events-none inset-0 -z-10 opacity-5 "
          style={{
            backgroundImage: `url(${Grain.src})`,
          }}
        />
      </div>

      <div className="container flex flex-col items-center gap-y-6 md:gap-y-8 z-0">
        {/* Memoji */}
        <div className="flex flex-col items-center justify-center max-w-lg">
          <Image
            src={MemojiLaptop}
            alt="Image of Salman peeking from behind of a laptop"
            width={64}
            height={64}
          />
          <div className="inline-flex gap-x-3 items-center border border-background/20 bg-foreground text-background h-fit w-fit px-3 py-2 rounded-lg">
            <div className="size-2 rounded-full bg-green-500 relative" />
            <p className="font-medium text-xs md:text-sm">Open to new things</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col max-w-lg gap-y-4 z-0">
          <h1 className="text-2xl md:text-3xl font-serif text-balance text-center">
            Thoughtfully Designed and Engineered
          </h1>
          <p className="text-xs md:text-base text-muted-foreground text-balance text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            recusandae ratione nesciunt odio voluptatum tempora ex placeat
            dignissimos, doloremque ullam eum quo esse dolorum.
          </p>
        </div>

        {/* Button */}
        <div className="flex items-center gap-x-4 flex-wrap justify-center gap-y-3 z-0">
          <Button size={"sm"}>
            <span>👋</span>
            <span>Let's connect</span>
          </Button>
          <Button variant={"outline"} size={"sm"} asChild>
            <Link href={"/blog"} aria-label="Go to /blog">
              <span>Read entries</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
