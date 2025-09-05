import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-zinc-200 transition hover:shadow-lg dark:border-zinc-800"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="text-sm text-zinc-500">{project.year}</span>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{project.summary}</p>
        {/* Optional: show tech badges later */}
      </div>
    </Link>
  );
}
