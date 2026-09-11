export default function Modal({ title, onClose, children, wide = false }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={onClose} />
      <div
        className={`relative w-full ${wide ? "max-w-2xl" : "max-w-md"} max-h-[85vh] overflow-y-auto rounded-sm border border-line bg-panel shadow-hud p-6 sm:p-8`}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-base text-ink">{title}</h2>
          <button onClick={onClose} className="text-ink-muted hover:text-ink text-sm" aria-label="Close">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
