import Link from "next/link"

import { Eye, Home } from "lucide-react"

export const Dock = () => {
  return (
    <header className="pointer-events-none fixed bottom-4 z-10 flex h-svh w-full cursor-default items-end justify-center md:bottom-8">
      <nav className="pointer-events-auto flex items-center rounded-[16px] border bg-background p-1 text-foreground">
        <Link href={"/"} className="header-item">
          <Home className="size-4" />
        </Link>
        <Link href={"/blog"} className="header-item">
          <Eye className="size-4" />
        </Link>
      </nav>
    </header>
  )
}
