<script lang="ts" setup>
import { ref } from "vue";
import TheHeader from "./components/TheHeader.vue";
import TodoList from "./components/TodoList.vue";
import { useTodoStore } from "./stores/todos";
import { storeToRefs } from "pinia";
const name = ref("");
const store = useTodoStore()

const {todos} = storeToRefs(store);
const {addTodo} = store;
</script>

<template>
  <TheHeader />

  <main class="flex flex-col items-center">
    <form @submit.prevent="addTodo(name)">
      <div class="flex items-center justify-center">
        <input
          id="todo-input"
          class="border-b outline-none w-96 px-4 py-2"
          type="text"
          v-model="name"
          placeholder="Please input todo name..."
        />
        <button class="bg-blue-500 text-white px-4 py-2">Add</button>
      </div>
    </form>

    <TodoList />
  </main>
</template>

<style>
.alerts-container {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 20px;
  right: 40px;
  width: 380px;
}
</style>