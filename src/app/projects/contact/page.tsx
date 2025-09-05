export default function ContactPage() {
  return (
    <section className="py-8">
      <h1 className="mb-4 text-2xl font-bold">Contact</h1>

      {/* Option A: simple mailto link (always works) */}
      <p className="mb-6 text-zinc-600 dark:text-zinc-300">
        Email me at{" "}
        <a
          className="underline underline-offset-4"
          href="mailto:jatinvksharma@gmail.com"
        >
          jatinvksharma@gmail.com
        </a>
        .
      </p>

      {/* Option B: form (works after you add a Formspree action) */}
      <form
        action="https://formspree.io/f/REPLACE_ME" // replace with your real Formspree ID later
        method="POST"
        className="max-w-lg space-y-4"
      >
        <input
          className="w-full rounded-xl border border-zinc-300 p-3 dark:border-zinc-700"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className="w-full rounded-xl border border-zinc-300 p-3 dark:border-zinc-700"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
        <textarea
          className="w-full rounded-xl border border-zinc-300 p-3 dark:border-zinc-700"
          name="message"
          placeholder="How can I help?"
          rows={5}
          required
        />
        <button
          className="rounded-xl bg-zinc-900 px-4 py-2 text-white dark:bg-white dark:text-zinc-900"
          type="submit"
        >
          Send
        </button>
      </form>
    </section>
  );
}
