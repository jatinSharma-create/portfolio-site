export default function ResumePage() {
  return (
    <section className="py-8">
      <h1 className="mb-4 text-2xl font-bold">Resume</h1>
      <p className="text-zinc-600 dark:text-zinc-300">
        Download the PDF version below.
      </p>
      <a
        className="mt-4 inline-block rounded-xl border border-zinc-300 px-4 py-2 dark:border-zinc-700"
        href="/resume.pdf"
        target="_blank"
      >
        Download Resume
      </a>
    </section>
  );
}
