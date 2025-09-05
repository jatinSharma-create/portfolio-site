import { SITE } from "@/lib/site";

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
      >
        GitHub
      </a>
      <span className="text-zinc-300 dark:text-zinc-700">•</span>
      <a
        href={SITE.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
      >
        LinkedIn
      </a>
    </div>
  );
}
