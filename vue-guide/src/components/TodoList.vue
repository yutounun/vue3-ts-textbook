<script setup lang="ts">
import { inject } from 'vue';
import { todoKey } from '../usetodo'

const { todos, addTodo: _addTodo } = inject(todoKey)
// const _addTodo = inject('addTodo')

const addTodo = (title: string) => {
  _addTodo(title)
}

</script>

<template>
  <div>
    <ul :style="{ listStyle: 'none' }">
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <button @click="addTodo('add!')">Add</button>
  </div>
</template>

<style scoped>
</style>