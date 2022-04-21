import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

// let n: number = 0

// const worker = new Worker("./workers/fibonachi_worker.ts", {
//   type: "module",
// });

// // worker.addEventListener("message", (e) => {
// //   result.innerHTML = e.data;
// // });

// worker.addEventListener("error", (e) => {
//   //result.innerHTML = `message: ${e.message}; filename: ${e.filename}; line: ${e.lineno}`;
//   console.error(e);
// });

// worker.runWorker(n);
app.use(createPinia());

app.mount("#app");
