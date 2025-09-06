// app/layout.tsx
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Jatin Sharma — Portfolio",
  description: "UNSW CS student portfolio: projects, about, resume.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        {/* Header / Top Nav (single source of truth so About appears only once) */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              Jatin Sharma
            </Link>
            <div className="flex items-center gap-5">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/about" className="hover:underline">About</Link>
              {/* Use <a> (not Link) for static files in /public */}
              <a href="/resume.pdf" className="hover:underline" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
              <a href="/resume.pdf" download className="rounded-xl border px-3 py-1 text-sm hover:bg-gray-50">
                Download
              </a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-5xl px-5 py-10">{children}</main>

        <footer className="mx-auto max-w-5xl px-5 py-10 text-sm text-gray-500">
          © {new Date().getFullYear()} Jatin Sharma
        </footer>
      </body>
    </html>
  );
}
