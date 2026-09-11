import { useEffect, useState, useCallback } from "react";

const ITEMS_KEY = "ma-pah:items";
const PREFS_KEY = "ma-pah:preferences";
const CONSENT_KEY = "ma-pah:consent";

const defaultPrefs = {
  defaultPlatform: "youtube",
  parentalLock: false,
  privacyLock: false,
  notifications: true,
  mode: "sfw", // "sfw" | "nsfw"
  recommendations: true,
};

function read(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage unavailable (private mode, quota) — fail silently, state stays in-memory
  }
}

export function useStore() {
  const [items, setItems] = useState(() => read(ITEMS_KEY, []));
  const [preferences, setPreferences] = useState(() => read(PREFS_KEY, defaultPrefs));
  const [consent, setConsent] = useState(() => read(CONSENT_KEY, null));

  useEffect(() => write(ITEMS_KEY, items), [items]);
  useEffect(() => write(PREFS_KEY, preferences), [preferences]);
  useEffect(() => write(CONSENT_KEY, consent), [consent]);

  const addItem = useCallback((item) => {
    setItems((prev) => [
      { id: crypto.randomUUID(), createdAt: Date.now(), ...item },
      ...prev,
    ]);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const toggleFavorite = useCallback((id) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, favorite: !i.favorite } : i))
    );
  }, []);

  const updatePreferences = useCallback((patch) => {
    setPreferences((prev) => ({ ...prev, ...patch }));
  }, []);

  const acceptConsent = useCallback((payload) => {
    setConsent({ acceptedAt: Date.now(), ...payload });
  }, []);

  return {
    items,
    addItem,
    removeItem,
    toggleFavorite,
    preferences,
    updatePreferences,
    consent,
    acceptConsent,
  };
}
