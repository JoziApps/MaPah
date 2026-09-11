import { useState } from "react";
import { useStore } from "./store/useStore.js";
import ConsentGate from "./components/ConsentGate.jsx";
import PreferencesDrawer from "./components/PreferencesDrawer.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Signature from "./components/Signature.jsx";
import About from "./components/About.jsx";
import Privacy from "./components/Privacy.jsx";
import Tutorial from "./components/Tutorial.jsx";

export default function App() {
  const {
    items,
    addItem,
    removeItem,
    toggleFavorite,
    preferences,
    updatePreferences,
    consent,
    acceptConsent,
  } = useStore();

  const [prefsOpen, setPrefsOpen] = useState(false);
  const [modal, setModal] = useState(null); // "about" | "privacy" | "tutorial" | null
  const [seenTutorial, setSeenTutorial] = useState(
    () => !!JSON.parse(localStorage.getItem("ma-pah:seen-tutorial") || "false")
  );

  function handleAcceptConsent(payload) {
    acceptConsent(payload);
    // First-run: show the tutorial right after consent, once.
    if (!seenTutorial) {
      setModal("tutorial");
    }
  }

  function closeTutorial() {
    localStorage.setItem("ma-pah:seen-tutorial", "true");
    setSeenTutorial(true);
    setModal(null);
  }

  if (!consent) {
    return <ConsentGate onAccept={handleAcceptConsent} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line px-6 py-4 flex items-center justify-between sticky top-0 bg-void/80 backdrop-blur z-30">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 40 40" className="h-8 w-8 hud-ring" style={{ transformOrigin: "50% 50%" }}>
            <circle cx="20" cy="20" r="17" fill="none" stroke="#2A6E78" strokeWidth="1" />
            <circle
              cx="20"
              cy="20"
              r="17"
              fill="none"
              stroke="#4FD8E8"
              strokeWidth="1.5"
              strokeDasharray="8 90"
              strokeLinecap="round"
            />
            <circle cx="20" cy="20" r="3" fill="#4FD8E8" />
          </svg>
          <div>
            <p className="font-display text-lg leading-none tracking-tight text-ink">Ma-Pah</p>
            <p className="text-[11px] text-ink-muted font-mono">Grabber for Online Media</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setModal("tutorial")}
            className="text-xs font-mono uppercase tracking-wider text-ink-muted hover:text-cyan border border-line hover:border-cyan-dim rounded-sm px-3 py-2 transition-colors"
          >
            How it works
          </button>
          <button
            onClick={() => setPrefsOpen(true)}
            className="text-xs font-mono uppercase tracking-wider text-ink-muted hover:text-cyan border border-line hover:border-cyan-dim rounded-sm px-3 py-2 transition-colors"
          >
            Preferences
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 flex-1 w-full">
        <Dashboard
          items={items}
          addItem={addItem}
          removeItem={removeItem}
          toggleFavorite={toggleFavorite}
          preferences={preferences}
        />
      </main>

      <Signature
        appName="Ma-Pah"
        links={[
          { label: "About", onClick: () => setModal("about") },
          { label: "Privacy", onClick: () => setModal("privacy") },
          { label: "How it works", onClick: () => setModal("tutorial") },
        ]}
      />

      <PreferencesDrawer
        open={prefsOpen}
        preferences={preferences}
        onChange={updatePreferences}
        onClose={() => setPrefsOpen(false)}
      />

      {modal === "about" && <About onClose={() => setModal(null)} />}
      {modal === "privacy" && <Privacy onClose={() => setModal(null)} />}
      {modal === "tutorial" && <Tutorial onClose={closeTutorial} />}
    </div>
  );
}
