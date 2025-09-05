import SocialLinks from "@/components/SocialLinks";

export default function AboutPage() {
  return (
    <section className="prose prose-zinc py-8 dark:prose-invert">
      <h1>About</h1>
      <p>
        I’m a UNSW Computer Science student with a Marketing minor. I like building secure
        systems, networking tools, and clean typed backends.
      </p>

      <h3>Skills</h3>
      <ul>
        <li>Python, TypeScript/Node.js, React</li>
        <li>Security: X25519, HKDF, AEAD (XChaCha20-Poly1305)</li>
        <li>Networking: UDP/TCP, packet capture, RTT/jitter analysis</li>
        <li>Shell scripting, SQL/PostgreSQL basics</li>
      </ul>

      <h3>Find me</h3>
      {/* SocialLinks renders GitHub + LinkedIn */}
      <div className="not-prose">
        <SocialLinks />
      </div>
    </section>
  );
}
