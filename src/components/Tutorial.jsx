import { useState } from "react";
import Modal from "./Modal.jsx";

const STEPS = [
  {
    title: "Add a link",
    body: "Paste any link into the bar at the top of the dashboard and hit Add. It shows up as a tile right away.",
    Icon: AddIcon,
  },
  {
    title: "Star your favorites",
    body: "Hover a tile and tap the star to favorite it. Use the Favorites filter to find your best stuff fast.",
    Icon: StarIcon,
  },
  {
    title: "Filter the grid",
    body: "Switch between All, Favorites, Bookmarks, Imported, and Converted using the tabs above the grid.",
    Icon: FilterIcon,
  },
  {
    title: "Set your preferences",
    body: "Open Preferences to set your default platform, SFW/NSFW mode, locks, and notifications. Saved on this device only.",
    Icon: GearIcon,
  },
];

export default function Tutorial({ onClose }) {
  const [step, setStep] = useState(0);
  const { title, body, Icon } = STEPS[step];
  const isLast = step === STEPS.length - 1;

  return (
    <Modal title="How Ma-Pah works" onClose={onClose}>
      <div className="flex flex-col items-center text-center">
        <div className="h-28 w-28 rounded-full border border-cyan-dim/60 flex items-center justify-center mb-6 relative">
          <span className="absolute inset-0 rounded-full border border-cyan/30 animate-ping" style={{ animationDuration: "2.5s" }} />
          <Icon />
        </div>

        <p className="font-display text-sm text-ink mb-2">{title}</p>
        <p className="text-sm text-ink-muted leading-relaxed mb-6">{body}</p>

        <div className="flex gap-1.5 mb-6">
          {STEPS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-5 bg-cyan" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2 w-full">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex-1 py-2 rounded-sm border border-line text-sm text-ink-muted disabled:opacity-30 hover:text-ink hover:border-cyan-dim transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => (isLast ? onClose() : setStep((s) => s + 1))}
            className="flex-1 py-2 rounded-sm bg-cyan text-void text-sm font-display hover:shadow-hud-active transition-shadow"
          >
            {isLast ? "Got it" : "Next"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

function AddIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 8v20M8 18h20" stroke="#4FD8E8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path
        d="M18 5l3.8 8.2 9 1-6.6 6.2 1.7 8.9-8-4.5-8 4.5 1.7-8.9-6.6-6.2 9-1L18 5z"
        stroke="#FFB454"
        strokeWidth="1.6"
        fill="rgba(255,180,84,0.15)"
      />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M6 10h24M11 18h14M15 26h6" stroke="#4FD8E8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function GearIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="6" stroke="#4FD8E8" strokeWidth="2" />
      <path
        d="M18 4v4M18 28v4M32 18h-4M8 18H4M27.3 8.7l-2.8 2.8M11.5 24.5l-2.8 2.8M27.3 27.3l-2.8-2.8M11.5 11.5L8.7 8.7"
        stroke="#4FD8E8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
