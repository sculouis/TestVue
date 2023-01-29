import type Todo from '@/models/Todo';
import { defineStore } from 'pinia';
import axios from 'axios';
import { nextTick } from 'vue';
const url = "http://localhost:8080/v1/todos/";

export const useTodoStore = defineStore('todo', {
    state: () => (
        { todos: [] as Todo[] }
    ),
    actions: {
        async getData() {
            const res = await axios.get(url);
            this.todos = res.data as Todo[];
        },
        async addTodo(val: string) {
            if (!val) return;
            const result = await axios.post(url, { Name: val })
            console.log(result.data);
            this.getData();
        },
        switchTodoStatus(index: number) {
            this.todos[index].Done = !this.todos[index].Done;
        },
        async deleteTodo(todo: Todo) {
            const resdelete = await axios.delete(url + todo.ID);
            console.log(resdelete.data);
            this.getData()
        },
        batchDelete() {
            this.todos.forEach(async (todo) => {
                if (todo.Selected) {
                    const res = await axios.delete(url + todo.ID);
                    console.log(res.data);
                }
            })
            this.getData();
            nextTick()
        }
    }
})