import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { projects, getProject } from "@/data/projects";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = getProject(params.slug);
  if (!p) return { title: "Project Not Found — Jatin Sharma" };
  return {
    title: `${p.title} — Jatin Sharma`,
    description: p.summary,
    openGraph: {
      title: p.title,
      description: p.summary,
      type: "article",
      images: [SITE.ogImage],
      url: `${SITE.url}/projects/${params.slug}`,
    },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  const url = `${SITE.url}/projects/${p.slug}`;
  const coverAbs = p.cover.startsWith("/") ? `${SITE.url}${p.cover}` : p.cover;

  return (
    <article className="py-8">
      <Link href="/projects" className="text-sm text-zinc-600 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
        ← All projects
      </Link>

      <h1 className="mt-3 text-3xl font-bold">{p.title}</h1>
      <p className="mt-1 text-zinc-600 dark:text-zinc-300">
        {p.year} • {p.tech.join(" · ")}
      </p>

      <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
        <Image src={p.cover} alt={p.title} fill className="object-cover" />
      </div>

      <div className="prose prose-zinc mt-6 max-w-none dark:prose-invert">
        <p>{p.summary}</p>
        {p.body && <p>{p.body}</p>}
      </div>

      {(p.links?.github || p.links?.demo || p.links?.report) && (
        <div className="mt-6 flex flex-wrap gap-3">
          {p.links.github && (
            <Link className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-700" href={p.links.github} target="_blank">
              GitHub
            </Link>
          )}
          {p.links.demo && (
            <Link className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-700" href={p.links.demo} target="_blank">
              Demo
            </Link>
          )}
          {p.links.report && (
            <Link className="rounded-xl border border-zinc-300 px-3 py-1.5 text-sm dark:border-zinc-700" href={p.links.report} target="_blank">
              Report
            </Link>
          )}
        </div>
      )}

      {/* JSON-LD for project */}
      <Script id={`ld-${p.slug}`} type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.title,
            url,
            abstract: p.summary,
            image: coverAbs,
            author: { "@type": "Person", name: SITE.name, url: SITE.url },
            dateCreated: p.year,
            keywords: p.tech
          }),
        }}
      />
    </article>
  );
}
