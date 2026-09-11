import { useState } from "react";

const CHECKS = [
  {
    key: "age",
    label: "I confirm I am 18 years of age or older.",
  },
  {
    key: "terms",
    label: "I have read and agree to the Terms & Conditions.",
  },
  {
    key: "popia",
    label:
      "I understand how my information is processed, in line with the Protection of Personal Information Act (POPIA) and applicable privacy law.",
  },
  {
    key: "cookies",
    label: "I accept the use of local browser storage to save my preferences and bookmarks on this device.",
  },
];

export default function ConsentGate({ onAccept }) {
  const [checked, setChecked] = useState({});

  const allChecked = CHECKS.every((c) => checked[c.key]);

  function toggle(key) {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 backdrop-blur-sm px-4">
      <div className="w-full max-w-md rounded-sm border border-cyan-dim/60 bg-panel shadow-hud p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 rounded-full border-2 border-cyan flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_8px_2px_rgba(79,216,232,0.6)]" />
          </div>
          <div>
            <p className="font-display text-lg tracking-tight text-ink">Ma-Pah</p>
            <p className="text-xs text-ink-muted">Before you get started</p>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {CHECKS.map((c) => (
            <label key={c.key} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={!!checked[c.key]}
                onChange={() => toggle(c.key)}
                className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border-line bg-panel-raised accent-cyan cursor-pointer"
              />
              <span className="text-sm text-ink-muted group-hover:text-ink transition-colors">
                {c.label}
              </span>
            </label>
          ))}
        </div>

        <button
          disabled={!allChecked}
          onClick={() => onAccept(checked)}
          className="w-full py-2.5 rounded-sm font-display text-sm tracking-wide transition-all
            disabled:bg-panel-raised disabled:text-ink-faint disabled:cursor-not-allowed
            enabled:bg-cyan enabled:text-void enabled:hover:shadow-hud-active enabled:cursor-pointer"
        >
          Enter dashboard
        </button>
      </div>
    </div>
  );
}
