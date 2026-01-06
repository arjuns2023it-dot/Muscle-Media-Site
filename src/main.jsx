import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function makeRoundFavicon(src) {
  const img = new Image();
  img.src = src;
  img.crossOrigin = "anonymous"; // avoid CORS issues
  img.onload = () => {
    const size = 64; // favicon size
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    // Draw a circular mask
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Draw the image inside the circle
    ctx.drawImage(img, 0, 0, size, size);

    // Set as favicon
    const link = document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    link.href = canvas.toDataURL("image/png");
    document.head.appendChild(link);
  };
}

// Call it with your PNG path
makeRoundFavicon("/tab.png");
