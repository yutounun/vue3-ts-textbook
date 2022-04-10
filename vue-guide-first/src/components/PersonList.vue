<script setup lang="ts">
import { Person } from './Persons.vue'

type Props = {
  // 同ファイル内でtype Personを定義してもいいが、Persons.vueのものを再利用する
  persons: Person
}

// definePropsでpersonがこのコンポーネントで利用可能に
defineProps<Props>()

const emit = defineEmits(['register'])


const onClickDelete = (id: number, name:string) => {
  // confirm is a built-in function
  if (confirm('Delete '+ name + '?')) emit('delete', id)
}

</script>

<template>
  <li v-for="person in persons" :key="person.id" class="person-list">
    <span>{{ person.name }}</span>
    <span>{{ person.age }}yrs old</span>
    <button>
      <span @click="onClickDelete(person.id, person.name)">delete</span>
    </button>
  </li>
</template>

<style scoped>
.person-list {
  font-weight: bold;
  list-style: none;
  margin-bottom: 12px;
  border-radius: 4px;
  font-size: 20px;
  display:flex;
  justify-content: space-between;
  background-color: rgb(228, 201, 133);
  padding: 8px 20px;
  width: 300px;
}
</style>