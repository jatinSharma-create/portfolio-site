import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Header() {
  return (
    <header className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight">
          Jatin Sharma
        </Link>
        {/* Mobile-only socials to the right; hidden on sm+ */}
        <div className="sm:hidden">
          <SocialLinks />
        </div>
      </div>

      <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
        <Link className="hover:underline" href="/projects">Projects</Link>
        <Link className="hover:underline" href="/about">About</Link>
        <Link className="hover:underline" href="/contact">Contact</Link>
        <Link className="rounded-xl border border-zinc-300 px-3 py-1.5 dark:border-zinc-700" href="/resume">
          Resume
        </Link>
        {/* Desktop socials; hidden on mobile */}
        <div className="ml-2 hidden sm:block">
          <SocialLinks />
        </div>
      </nav>
    </header>
  );
}
