<script setup lang="ts">
import PersonPostForm from './PersonPostForm.vue';
import PersonList from './PersonList.vue';
import { ref, Ref } from 'vue'

type Person = {
  id: number,
  name: string,
  age: number,
}

const persons: Ref<Person[]> = ref([{id: 0, name:'John', age:24},{id: 0, name:'John', age:24}]);

const registerPerson = (person: Person) => {
  persons.value.push(person)
}

const deletePerson = (id:number) => {
  // pは展開したpersons.valueの一つ一つ→for eachみたいな感じ
  persons.value = persons.value.filter(p => p.id !== id)
}
</script>

<template>
  <div class="container">
    <h1>title</h1>
    <!-- 子要素のregisterが呼ばれたら、このファイルのスクリプト内のregisterPersonが実行される -->
    <PersonPostForm @register="registerPerson"/>
    <div class="list-container">
      <ul>
        <!-- 左が受け取り先の変数名、右がこのvueでの変数名 -->
        <PersonList :persons="persons" @delete="deletePerson"/>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.container {
  /* 横並び？ */
  display: flex;
  /* 要素を縦並びにする */
  flex-direction: column;
  /* flex-box内の要素をX軸中央に寄せる */
  align-items: center;
}
</style>