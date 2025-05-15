import { Home, Fingerprint, Inbox, Star, Eye } from "lucide-react";
import Link from "next/link";

export const Dock = () => {
  return (
    <header className="flex justify-center items-end fixed bottom-4 md:bottom-8 w-full h-svh cursor-default z-10 pointer-events-none">
      <nav className="flex items-center p-1 border rounded-[16px] bg-background text-foreground pointer-events-auto">
        <Link href="/" className="header-item">
          <Home className="size-4" />
        </Link>
        <Link href="#" className="header-item">
          <Fingerprint className="size-4" />
        </Link>
        <Link href="#" className="header-item">
          <Inbox className="size-4" />
        </Link>
        <Link href="#" className="header-item">
          <Star className="size-4" />
        </Link>
        <Link href="/blog" className="header-item">
          <Eye className="size-4" />
        </Link>
      </nav>
    </header>
  );
};
