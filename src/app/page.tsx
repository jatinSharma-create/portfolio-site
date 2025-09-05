import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Script from "next/script";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12">
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          I build secure systems, networking tools, and neat backend services.
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-300">
          UNSW Computer Science + Marketing minor. Currently focused on E2EE chat, UDP performance tools, and TypeScript backends.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/projects" className="rounded-xl bg-zinc-900 px-4 py-2 text-white dark:bg-white dark:text-zinc-900">View Projects</Link>
          <Link href="/resume" className="rounded-xl border border-zinc-300 px-4 py-2 dark:border-zinc-700">Resume</Link>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-6">
          <Link href="/projects" className="text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">See all projects →</Link>
        </div>
      </section>

      {/* JSON-LD: Person */}
      <Script id="ld-person" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: SITE.name,
            url: SITE.url,
            sameAs: [SITE.github, SITE.linkedin],
            jobTitle: "Computer Science Student",
            alumniOf: "UNSW",
            knowsAbout: ["Security Engineering", "Networking", "TypeScript", "Python"]
          }),
        }}
      />
      {/* JSON-LD: Website */}
      <Script id="ld-website" type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: `${SITE.name} — Portfolio`,
            url: SITE.url,
            potentialAction: {
              "@type": "SearchAction",
              target: `${SITE.url}/projects?query={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
    </>
  );
}
