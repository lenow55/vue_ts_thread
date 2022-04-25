<script setup lang="ts">
import { ref } from "vue";
import worker from "@/workers/index";

// let props = defineProps<{}>();

const counter1 = ref(0);
const counter2 = ref(0);
function incrise_c1() {
  const worker: Worker = new Worker("./count_worker.ts");
  console.log(worker);
  worker.postMessage(counter1.value);
  worker.onmessage = function (res) {
    counter1.value = res.data;
  };
}

function incrise_c2() {
  const worker: Worker = new Worker("./count_worker.ts", {
    type: "module",
  });
  worker.postMessage(counter2.value);
  worker.onmessage = function (res) {
    counter2.value = res.data;
  };
  console.log(2);
}
</script>

<template>
  <div class="app">
    <header class="left">
      <div class="title">
        <h1>Тестовый сайт с воркером</h1>
      </div>
      <div class="order">
        <button @click="incrise_c1()">Incrise counter1</button>
        <button @click="incrise_c2()">Incrise counter2</button>
      </div>
      <div class="result">
        <h2>
          Результат счётчика 1 <br />
          {{ counter1 }}
        </h2>
        <h2>
          Результат счётчика 2 <br />
          {{ counter2 }}
        </h2>
      </div>
    </header>
  </div>
</template>

<style>
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.order {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.left {
  display: flex;
  flex-direction: column;
}

@media (min-width: 1024px) {
  .order {
    flex-direction: row;
  }
  .result {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    text-align: center;
  }
  .app {
    height: 100%;
  }
  .left {
    height: 100%;
    justify-content: space-evenly;
  }
}
</style>
