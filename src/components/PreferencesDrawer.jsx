const PLATFORMS = ["youtube", "instagram", "tiktok", "x", "pinterest", "soundcloud"];

export default function PreferencesDrawer({ open, preferences, onChange, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex justify-end">
      <div className="absolute inset-0 bg-void/70" onClick={onClose} />
      <aside className="relative w-full max-w-sm h-full bg-panel border-l border-line p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-base text-ink">Preferences</h2>
          <button onClick={onClose} className="text-ink-muted hover:text-ink text-sm">
            Close
          </button>
        </div>

        <Section title="Default platform">
          <select
            value={preferences.defaultPlatform}
            onChange={(e) => onChange({ defaultPlatform: e.target.value })}
            className="w-full bg-panel-raised border border-line rounded-sm px-3 py-2 text-sm text-ink font-mono"
          >
            {PLATFORMS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Section>

        <Section title="Content mode">
          <div className="flex rounded-sm overflow-hidden border border-line">
            {["sfw", "nsfw"].map((mode) => (
              <button
                key={mode}
                onClick={() => onChange({ mode })}
                className={`flex-1 py-2 text-xs font-mono uppercase tracking-wider ${
                  preferences.mode === mode
                    ? "bg-cyan text-void"
                    : "bg-panel-raised text-ink-muted hover:text-ink"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          {preferences.mode === "nsfw" && (
            <p className="text-xs text-amber mt-2">
              NSFW mode assumes the age confirmation you already gave. It only affects what's shown — it doesn't change what this app is allowed to download.
            </p>
          )}
        </Section>

        <Section title="Locks & alerts">
          <Toggle
            label="Parental lock"
            checked={preferences.parentalLock}
            onChange={(v) => onChange({ parentalLock: v })}
          />
          <Toggle
            label="Privacy lock (require unlock to open dashboard)"
            checked={preferences.privacyLock}
            onChange={(v) => onChange({ privacyLock: v })}
          />
          <Toggle
            label="Notifications"
            checked={preferences.notifications}
            onChange={(v) => onChange({ notifications: v })}
          />
          <Toggle
            label="Recommendations based on my activity"
            checked={preferences.recommendations}
            onChange={(v) => onChange({ recommendations: v })}
          />
        </Section>

        <p className="text-[11px] text-ink-faint mt-8 leading-relaxed">
          All preferences are stored only in this browser (localStorage). Nothing here is sent to a
          server in this version of Ma-Pah.
        </p>
      </aside>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-6">
      <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-2">{title}</p>
      {children}
    </div>
  );
}

function Toggle({ label, checked, onChange }) {
  return (
    <label className="flex items-center justify-between py-2 cursor-pointer">
      <span className="text-sm text-ink">{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-5 w-9 rounded-full transition-colors ${
          checked ? "bg-cyan" : "bg-panel-raised border border-line"
        }`}
      >
        <span
          className={`absolute top-0.5 h-4 w-4 rounded-full bg-void transition-transform ${
            checked ? "translate-x-4" : "translate-x-0.5"
          }`}
        />
      </button>
    </label>
  );
}
