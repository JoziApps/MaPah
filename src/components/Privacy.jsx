import Modal from "./Modal.jsx";

export default function Privacy({ onClose }) {
  return (
    <Modal title="Privacy Policy" onClose={onClose} wide>
      <div className="space-y-4 text-sm text-ink-muted leading-relaxed">
        <p className="text-xs text-ink-faint">Last updated: September 2026</p>

        <Section title="What we collect">
          <p>
            Nothing is sent to a server. Ma-Pah has no backend in this version — the bookmarks
            you add and the preferences you set are written only to your browser's local storage,
            on your device.
          </p>
        </Section>

        <Section title="What local storage holds">
          <ul className="list-disc list-inside space-y-1">
            <li>Links, titles, and platform names you bookmark</li>
            <li>Your favorite/filter choices</li>
            <li>Your preferences (default platform, SFW/NSFW mode, locks, notifications)</li>
            <li>A record that you accepted this policy and the age/terms confirmation</li>
          </ul>
        </Section>

        <Section title="Cookies">
          <p>
            Ma-Pah doesn't set tracking or advertising cookies. The only thing stored on your
            device is the local-storage data described above, which functions like a save file
            for the app rather than a tracking mechanism.
          </p>
        </Section>

        <Section title="Third parties">
          <p>
            This version doesn't call any third-party service, analytics provider, or ad network.
            If a future version adds sign-in based importing (e.g. connecting a YouTube account),
            that section of this policy will be rewritten before that feature ships, and you'll
            be asked to consent to it separately.
          </p>
        </Section>

        <Section title="Clearing your data">
          <p>
            Clearing your browser's site data for Ma-Pah, or using a different browser/device,
            removes everything — bookmarks, favorites, and preferences. There's no account
            recovery because there's no account.
          </p>
        </Section>

        <Section title="Your rights (POPIA)">
          <p>
            Under South Africa's Protection of Personal Information Act, you have the right to
            know what's held about you and to have it deleted. Since nothing leaves your device,
            you already hold full control — deleting your local site data is the same as a full
            data-deletion request.
          </p>
        </Section>

        <Section title="Contact">
          <p>Questions about this policy can be raised via the project's GitHub repository issues page.</p>
        </Section>
      </div>
    </Modal>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <p className="text-xs font-mono uppercase tracking-wider text-cyan mb-1">{title}</p>
      {children}
    </div>
  );
}
