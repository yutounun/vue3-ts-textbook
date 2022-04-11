<script setup lang="ts">
import TodoList from './components/TodoList.vue';
import { provide } from 'vue';
// これはemitなど不必要。子コンポーネントから来ているのではなく、ただの別ファイルから来ているため
import { todos, todoKey } from './usetodo'
// exportされたtodosをvalueに、'todos'をkeyに
// provideしたcomponentの子componentsはinjectできる → 一番親でprovideした方がいい
// provide('todos', todos)
// injectionKeyを使うことで変数かつ一意にできる。型を使える
provide(todoKey, todos)

</script>
<template>
  <div>
    <TodoList />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
