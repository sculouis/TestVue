<script lang="ts" setup>
import { ref } from "vue";
import { useTodoStore } from "./stores/todos";
import { storeToRefs } from "pinia";
var drawer = ref(true);
var rail = ref(true);
</script>
<template>
<v-card>
  <v-layout>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
      >
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" to="/"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="My Account" value="account" to="/about"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group-outline" title="Todo" value="todos" to="/todos"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main><router-view></router-view></v-main>
  </v-layout>
</v-card>
</template>


