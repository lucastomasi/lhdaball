import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({ component: Home });

declare global {
  interface Window {
    startDxBall?: () => void;
  }
}

function Home() {
  useEffect(() => {
    let dead = false;
    const boot = () => {
      if (dead) return;
      window.startDxBall?.();
    };
    const SRC = "/dxball/game.js?v=timbre1";
    let script = document.querySelector<HTMLScriptElement>("script[data-dxball]");
    if (script && !script.src.includes("v=timbre1")) {
      script.remove();
      document.getElementById("c")?.removeAttribute("data-booted");
      script = null;
    }
    if (!script) {
      script = document.createElement("script");
      script.src = SRC;
      script.dataset.dxball = "1";
      document.body.appendChild(script);
    }
    if (window.startDxBall && script.src.includes("v=timbre1") && document.getElementById("c")?.dataset.booted === "1") {
      return () => {
        dead = true;
      };
    }
    if (script.dataset.loaded === "1" && window.startDxBall) {
      const id = requestAnimationFrame(boot);
      return () => {
        dead = true;
        cancelAnimationFrame(id);
      };
    }
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "1";
        requestAnimationFrame(boot);
      },
      { once: true },
    );
    return () => {
      dead = true;
    };
  }, []);

  return (
    <main className="dx-shell">
      <canvas id="c" width={1008} height={860} />
    </main>
  );
}
