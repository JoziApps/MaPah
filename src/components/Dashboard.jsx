import { useMemo, useState } from "react";
import Tile from "./Tile.jsx";

const FILTERS = ["all", "favorites", "bookmark", "imported", "converted"];

export default function Dashboard({ items, addItem, removeItem, toggleFavorite, preferences }) {
  const [url, setUrl] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return items;
    if (filter === "favorites") return items.filter((i) => i.favorite);
    return items.filter((i) => i.kind === filter);
  }, [items, filter]);

  function handleAddBookmark(e) {
    e.preventDefault();
    if (!url.trim()) return;
    let hostname = url;
    try {
      hostname = new URL(url).hostname.replace("www.", "");
    } catch {
      // not a full URL — keep raw input as the label
    }
    addItem({ kind: "bookmark", url, title: hostname, platform: hostname });
    setUrl("");
  }

  return (
    <div>
      <form onSubmit={handleAddBookmark} className="flex gap-2 mb-6">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder={`Paste a link to bookmark (default platform: ${preferences.defaultPlatform})`}
          className="flex-1 bg-panel border border-line focus:border-cyan-dim rounded-sm px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint font-mono"
        />
        <button
          type="submit"
          className="px-5 rounded-sm bg-cyan text-void text-sm font-display hover:shadow-hud-active transition-shadow"
        >
          Add
        </button>
      </form>

      <div className="flex gap-1 mb-6 font-mono text-xs uppercase tracking-wider">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-sm transition-colors ${
              filter === f
                ? "bg-cyan/15 text-cyan border border-cyan-dim"
                : "text-ink-muted hover:text-ink border border-transparent"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState filter={filter} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <Tile
              key={item.id}
              item={item}
              onToggleFavorite={toggleFavorite}
              onRemove={removeItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState({ filter }) {
  const copy =
    filter === "all"
      ? "Nothing here yet. Paste a link above to add your first bookmark."
      : `No ${filter} items yet.`;
  return (
    <div className="border border-dashed border-line rounded-sm py-16 flex flex-col items-center justify-center text-center">
      <p className="text-sm text-ink-muted">{copy}</p>
    </div>
  );
}
