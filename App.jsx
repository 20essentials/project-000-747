import { createRoot } from "react-dom/client";
import "materialize-css/dist/css/materialize.min.css";

const appStyles = {
  "--bg-size": "48px",
  height: "100vh",
  width: "100%",
  display: "flex",
  backgroundImage: `repeating-conic-gradient(from 0deg at 0% 0%, #8e1d9e 0deg, #8ca6db 5deg),
                    repeating-conic-gradient(from 0deg at 100% 100%, #8ca6db 0deg, #8e1d9e 5deg)`,
  backgroundSize: "var(--bg-size) var(--bg-size)",
  backgroundBlendMode: "screen",
  fontFamily:
    "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'",
  WebkitTapHighlightColor: "transparent"
};

const App = () => {
  return <div style={appStyles}></div>;
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(<App />);
