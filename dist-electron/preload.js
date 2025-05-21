import { contextBridge as o, ipcRenderer as s } from "electron";
o.exposeInMainWorld("electronAPI", {
  // Add any IPC functions you want to expose to the renderer here
  sendMessage: (e) => s.send("message", e),
  onMessage: (e) => {
    s.on("main-process-message", (r, n) => e(n));
  }
});
