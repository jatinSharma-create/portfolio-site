import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-3 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center">
      <p>© {new Date().getFullYear()} Jatin Kumar Sharma</p>
      <SocialLinks className="text-zinc-600 dark:text-zinc-300" />
    </footer>
  );
}
