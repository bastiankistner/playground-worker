declare var self: ServiceWorkerGlobalScope;
export {};

console.log("hello from worker 55");
// self.addEventListener("");

async function init() {
  self.addEventListener("install", () => console.log("install"));
  self.addEventListener("activate", () => console.log("activate"));
  // self.addEventListener("fetch", () => console.log("fetch"));
  self.addEventListener("message", () => console.log("message"));
  await self.skipWaiting();
}

init();
