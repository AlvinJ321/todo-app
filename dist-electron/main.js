import { app as o, BrowserWindow as s } from "electron";
import n from "node:path";
import { fileURLToPath as l } from "url";
const d = l(import.meta.url), r = n.dirname(d), t = n.join(r, "../dist");
o.isPackaged || n.join(t, "../public");
let e;
const i = process.env.VITE_DEV_SERVER_URL;
function a() {
  e = new s({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: n.join(r, "preload.js"),
      nodeIntegration: !1,
      contextIsolation: !0
    }
  }), e.webContents.on("did-finish-load", () => {
    e == null || e.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), i ? e.loadURL(i) : e.loadFile(n.join(t, "index.html"));
}
o.on("window-all-closed", () => {
  process.platform !== "darwin" && o.quit();
});
o.whenReady().then(() => {
  a(), o.on("activate", () => {
    s.getAllWindows().length === 0 && a();
  });
});
