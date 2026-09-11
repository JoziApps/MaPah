import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path must match your GitHub repo name exactly (case-sensitive).
// e.g. if your repo is github.com/you/MaPah, base is "/MaPah/".
// If you deploy to a custom domain or user/org page (you.github.io), set base to "/".
export default defineConfig({
  plugins: [react()],
  base: "/MaPah/",
});
