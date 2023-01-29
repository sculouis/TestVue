<script lang="ts" setup>
import { useTodoStore } from "@/stores/todos";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

const store = useTodoStore()
var {todos} = storeToRefs(store);
const {switchTodoStatus, deleteTodo, batchDelete, getData} = store;
const visible = ref(false);

onMounted(() => getData())
</script>

<template>
  <div class="w-96 py-2">
    <div class="text-center my-4">
      <button class="bg-red-500 text-white px-3 py-1" @click="batchDelete">
        Batch delete.
      </button>
    </div>
    <ul>
      <li
        class="flex justify-between border-b mb-2"
        v-for="(todo, index) in todos"
        :key="todo.Name"
      >
        <label class="flex-grow py-1">
          <input type="checkbox" v-model="todo.Selected" :value="index" />
          {{ todo.Name }}
        </label>

        <div class="flex">
          <button
            class="text-white px-3 py-1"
            :class="todo.Done ? 'bg-yellow-500' : 'bg-green-500'"
            @click="switchTodoStatus(index)"
          >
            {{ todo.Done ? "Undone" : "Done" }}
          </button>
          <button
            class="bg-red-500 text-white px-3 py-1"
            @click="deleteTodo(todo)"
          >
            x
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>