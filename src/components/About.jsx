import Modal from "./Modal.jsx";

export default function About({ onClose }) {
  return (
    <Modal title="About Ma-Pah" onClose={onClose} wide>
      <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
        <p>
          <span className="text-ink">Ma-Pah — Grabber for Online Media</span> is a personal
          dashboard for keeping track of the media, links, and profiles you care about, in one
          tile-based view.
        </p>

        <p>
          This version is a bookmark and organizer tool. It does not download, copy, or store
          media from any platform, and it does not remove or replace watermarks on anyone's
          content. What it does do:
        </p>

        <ul className="list-disc list-inside space-y-1">
          <li>Save links you paste in as bookmarked tiles</li>
          <li>Let you favorite, filter, and organize them</li>
          <li>Remember your preferences (platform, SFW/NSFW mode, locks, notifications) on this device</li>
        </ul>

        <p>
          A future version will add an official, sign-in based importer that can pull{" "}
          <em>your own</em> uploaded content from platforms that support it, plus a converter for
          files you already have the rights to. Nothing about bulk-downloading someone else's
          content or stripping their watermark is planned — that's a deliberate line this project
          doesn't cross.
        </p>

        <p className="text-xs text-ink-faint pt-2 border-t border-line">
          Built by Jozi Nites. Made in Johannesburg, South Africa 🇿🇦
        </p>
      </div>
    </Modal>
  );
}
