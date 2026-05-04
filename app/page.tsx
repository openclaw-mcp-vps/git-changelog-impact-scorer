export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-generate changelogs with{" "}
          <span className="text-[#58a6ff]">user impact scores</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect your GitHub repos, let AI analyze every commit, and publish polished changelogs ranked by real user impact — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "🔗", title: "GitHub Integration", desc: "Connect any public or private repo via GitHub API in one click." },
          { icon: "🤖", title: "AI Impact Scoring", desc: "OpenAI scores each commit by estimated user-facing impact automatically." },
          { icon: "📋", title: "Formatted Changelogs", desc: "Export Markdown or HTML changelogs sorted by impact, ready to publish." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month · billed monthly</p>
          <ul className="text-left space-y-2 mb-8">
            {[
              "Unlimited repositories",
              "AI impact scoring on every commit",
              "Markdown & HTML export",
              "GitHub webhook auto-sync",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg text-sm transition-colors"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "Which repositories are supported?",
              a: "Any GitHub repository — public or private. You authenticate via GitHub OAuth and grant access to the repos you choose."
            },
            {
              q: "How does the AI impact scoring work?",
              a: "Each commit message and diff summary is sent to OpenAI, which returns a 1–10 user impact score with a short rationale. Your changelog is then sorted by score."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Subscriptions are managed through Lemon Squeezy. Cancel from your customer portal at any time — no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Git Changelog Impact Scorer. All rights reserved.
      </footer>
    </main>
  );
}
