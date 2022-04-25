const worker = new Worker("./count_worker.ts", { type: "module" });

export default {
  worker,
};
