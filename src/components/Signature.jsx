/**
 * Reusable "signature" footer — the calling card for Jozi Nites apps.
 * Drop this into any project: pass the app's own name and accent color
 * (Tailwind class) and the signature line stays consistent everywhere.
 */
export default function Signature({ appName = "Ma-Pah", links = [] }) {
  return (
    <footer className="border-t border-line mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-ink-faint">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
          <span>
            {appName} · Made in Johannesburg 🇿🇦 · Built by{" "}
            <span className="text-ink-muted">Jozi Nites</span>
          </span>
        </div>

        {links.length > 0 && (
          <nav className="flex gap-4 text-xs font-mono uppercase tracking-wider text-ink-muted">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={link.onClick}
                className="hover:text-cyan transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </footer>
  );
}
