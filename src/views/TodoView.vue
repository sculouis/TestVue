<script lang="ts" setup>
import TodoList from "@/components/TodoList.vue";
import { useTodoStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { ref } from "vue";
const name = ref("");
const store = useTodoStore();
const {todos} = storeToRefs(store);
const {addTodo} = store;
</script>

<template>
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
    <TodoList></TodoList>
</template>