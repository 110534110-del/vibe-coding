import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
plugins: [react()],
base: "vibe-coding/" // ← GitHub repo 名稱
});