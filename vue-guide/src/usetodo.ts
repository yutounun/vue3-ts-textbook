import { ref, InjectionKey, inject, provide } from 'vue'

type Todo = {
  id: number,
  title: string,
}

const defaultTodos = [{ id: 0, title: 'first' }, { id: 1, title: 'second' }]

// 外(provide)から使うためexport必要
// 二つの変数と関数を下のようにしてまとめた
// export const todos = ref<Todo[]>(defaultTodos)
// export const addTodo = (title:string) => {
//   const newTodo: Todo = {
//     id: Math.random(),
//     title,
//   }
//   todos.value.push(newTodo)
// }
export const todos = (() => {
  const todos = ref<Todo[]>(defaultTodos)
  const addTodo = (title:string) => {
    const newTodo: Todo = {
      id: Math.random(),
      title,
    }
    todos.value.push(newTodo)
  }
  return { todos, addTodo }
})()

// 既存のtodosという変数を型にする.基本的にkeyに対するvalueから型を取る
type TodosType = typeof todos
// Symbolで引数から一意のものを生み出す組み込む関数
export const todoKey: InjectionKey<TodosType> = Symbol('useTodo');