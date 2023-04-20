import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/seamus2002.github.io/",
    plugins: [react()],
});
