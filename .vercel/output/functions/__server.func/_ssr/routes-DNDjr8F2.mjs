import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DNDjr8F2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	(0, import_react.useEffect)(() => {
		let dead = false;
		const boot = () => {
			if (dead) return;
			window.startDxBall?.();
		};
		const SRC = "/dxball/game.js?v=timbre1";
		let script = document.querySelector("script[data-dxball]");
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
		if (window.startDxBall && script.src.includes("v=timbre1") && document.getElementById("c")?.dataset.booted === "1") return () => {
			dead = true;
		};
		if (script.dataset.loaded === "1" && window.startDxBall) {
			const id = requestAnimationFrame(boot);
			return () => {
				dead = true;
				cancelAnimationFrame(id);
			};
		}
		script.addEventListener("load", () => {
			script.dataset.loaded = "1";
			requestAnimationFrame(boot);
		}, { once: true });
		return () => {
			dead = true;
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "dx-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			id: "c",
			width: 1008,
			height: 860
		})
	});
}
//#endregion
export { Home as component };
