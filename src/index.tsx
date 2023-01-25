import App from "./app";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app-root");
const root = container && createRoot(container);
root?.render(<App />);
