import Image from "next/image"
import Link from "next/link"
import MemojiLaptop from "@/assets/icons/memoji-laptop.png"
import Grain from "@/assets/images/grain.jpg"

import { Button } from "@/components/ui/button"

export const HeroSection = () => {
  return (
    <section id="hero" className="relative z-0 min-h-svh py-32">
      {/* Mask */}
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${Grain.src})`,
          }}
        />
      </div>

      <div className="container z-0 flex flex-col items-center gap-y-6 md:gap-y-8">
        {/* Memoji */}
        <div className="flex max-w-lg flex-col items-center justify-center">
          <Image
            src={MemojiLaptop}
            alt="Image of Salman peeking from behind of a laptop"
            width={64}
            height={64}
          />
          <div className="inline-flex h-fit w-fit items-center gap-x-3 rounded-lg border border-background/20 bg-foreground px-3 py-2 text-background">
            <div className="relative size-2 rounded-full bg-green-500" />
            <p className="text-xs font-medium md:text-sm">Open to new things</p>
          </div>
        </div>

        {/* Content */}
        <div className="z-0 flex max-w-lg flex-col gap-y-4">
          <h1 className="text-balance text-center font-serif text-2xl md:text-3xl">
            Thoughtfully Designed and Engineered
          </h1>
          <p className="text-balance text-center text-xs text-muted-foreground md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            recusandae ratione nesciunt odio voluptatum tempora ex placeat
            dignissimos, doloremque ullam eum quo esse dolorum.
          </p>
        </div>

        {/* Button */}
        <div className="z-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
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
  )
}
