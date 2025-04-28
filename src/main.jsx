// Import the necessary modules
import { createRoot } from "react-dom/client";

import App from "./App";
import  Advice from "./Advice";

// render the App component to the root element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <>
    <App />
    <Advice />
  </>
);
