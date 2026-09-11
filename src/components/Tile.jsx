const KIND_LABEL = {
  bookmark: "Bookmark",
  imported: "Imported",
  converted: "Converted",
};

export default function Tile({ item, onToggleFavorite, onRemove }) {
  return (
    <div className="group relative rounded-sm border border-line bg-panel hover:border-cyan-dim hover:shadow-hud transition-all overflow-hidden">
      <div className="aspect-video bg-panel-raised flex items-center justify-center relative">
        {item.thumbnail ? (
          <img src={item.thumbnail} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="font-mono text-xs text-ink-faint">no preview</span>
        )}
        <span className="absolute top-2 left-2 text-[10px] font-mono uppercase tracking-wider text-cyan bg-void/70 px-1.5 py-0.5 rounded-sm">
          {KIND_LABEL[item.kind] || "Item"}
        </span>
      </div>

      <div className="p-3">
        <p className="text-sm text-ink truncate">{item.title || item.url}</p>
        <p className="text-xs text-ink-muted truncate font-mono">{item.platform || item.url}</p>
      </div>

      <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onToggleFavorite(item.id)}
          aria-label={item.favorite ? "Remove favorite" : "Add favorite"}
          className={`h-7 w-7 rounded-sm flex items-center justify-center text-sm ${
            item.favorite ? "bg-amber/20 text-amber" : "bg-void/70 text-ink-muted hover:text-amber"
          }`}
        >
          ★
        </button>
        <button
          onClick={() => onRemove(item.id)}
          aria-label="Remove"
          className="h-7 w-7 rounded-sm bg-void/70 text-ink-muted hover:text-ink flex items-center justify-center text-sm"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
