export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tech: string[];
  cover: string; // /images/<file> under public/
  // NEW (optional)
  links?: { github?: string; demo?: string; report?: string };
  body?: string; // longer case-study text
};

export const projects: Project[] = [
  {
    slug: "e2ee-chat",
    title: "End-to-End Encrypted Chat",
    year: "2025",
    summary:
      "Double-Ratchet style chat using X25519, HKDF, XChaCha20-Poly1305; asyncio relay + TUI client.",
    tech: ["Python", "X25519", "AEAD"],
    cover: "/images/e2ee.png",
    links: { github: "https://github.com/yourname/e2ee-chat" },
    body:
      "Built a small chat with modern primitives and documented threat model. Verified forward secrecy in tests; captured PCAPs to confirm tamper detection via AEAD.",
  },
  {
    slug: "udp-ping-client",
    title: "UDP Ping Client (RTT/Jitter)",
    year: "2025",
    summary:
      "Measured RTT, loss, jitter; graphed latency distributions under artificial loss/delay.",
    tech: ["Python", "UDP", "Matplotlib"],
    cover: "/images/ping.png",
    links: { github: "https://github.com/yourname/udp-ping-client" },
    body:
      "Implements a simple UDP ping tool; calculates RTT statistics and jitter. Includes plotting scripts to visualize latency distributions.",
  },
  {
    slug: "ts-quiz-backend",
    title: "TypeScript Quiz Backend",
    year: "2024",
    summary:
      "Backend for a Kahoot-style game; HTTP handling & integration in a team of 5.",
    tech: ["TypeScript", "Node.js"],
    cover: "/images/quiz.png",
    links: { github: "https://github.com/yourname/ts-quiz-backend" },
    body:
      "Implemented endpoints, request parsing, and status code handling. Coordinated task breakdown and integration with a provided frontend.",
  },
  {
    slug: "shell-mygive",
    title: "Shell MyGive Tool",
    year: "2024",
    summary: "Local submission/marking script suite; POSIX-compatible.",
    tech: ["Shell", "POSIX"],
    cover: "/images/shell.png",
    links: { github: "https://github.com/yourname/shell-mygive" },
    body:
      "A simple submission/marking workflow using POSIX shell, checks, and diffs to simulate local assignment tooling.",
  },
  {
    slug: "dns-dig-report",
    title: "DNS Deep-Dive Report",
    year: "2025",
    summary:
      "Explored DNS records, caching, and resolver behaviour with concrete captures.",
    tech: ["Networking", "DNS"],
    cover: "/images/dns.png",
    links: { report: "/resume.pdf" }, // placeholder example
    body:
      "Recorded lookups with dig; analyzed TTLs, caching, and recursive resolver behaviour in different scenarios.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
