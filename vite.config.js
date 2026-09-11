import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path must match your GitHub repo name for Pages to serve assets correctly.
// e.g. if your repo is github.com/you/ma-pah, base stays "/ma-pah/".
// If you deploy to a custom domain or user/org page (you.github.io), set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/ma-pah/",
});
