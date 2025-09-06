// app/about/page.tsx
export const metadata = {
  title: "About — Jatin Sharma",
  description: "About Jatin Sharma — UNSW CS student, education, awards.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
      <p className="mt-6 text-lg leading-7 text-gray-700">
        I’m Jatin Sharma, a third-year Computer Science student at UNSW (Sydney) with a
        marketing minor. I enjoy building backend systems and tooling. Recent work spans a
        Java dungeon game engine, a TypeScript backend for a Kahoot-style quiz platform,
        and systems tooling like a mini git/CLI submission workflow.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside">
          <li>
            <strong>UNSW Sydney</strong> — BSc (Computer Science), Marketing minor
            <span className="text-gray-500"> · 2023 — Present</span>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Awards & Scholarships</h2>
        <ul className="mt-4 space-y-2 list-disc list-inside">
          <li>International Student Award (UNSW)</li>
          <li>Australia’s Global University Award (UNSW)</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <ul className="mt-4 space-y-3 list-disc list-inside">
          <li>
            <strong>DungeonMania</strong> — Java game engine using OOP, SOLID, and tests.
          </li>
          <li>
            <strong>Quiz Backend (TypeScript)</strong> — Group project; HTTP handling,
            status codes, server ops; integrated with the provided frontend.
          </li>
          <li>
            <strong>MyGit & CLI tools</strong> — Mini version-control + shell utilities for
            submission/marking workflows.
          </li>
        </ul>
      </section>

      <div className="mt-12 flex gap-3">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-gray-50"
        >
          View Resume (PDF)
        </a>
        <a
          href="/resume.pdf"
          download
          className="rounded-2xl bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
