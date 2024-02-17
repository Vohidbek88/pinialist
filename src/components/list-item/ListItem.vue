<template>
  <li class="border mt-2 d-flex justify-content-between align-items-center p-2 border-primary">
    <div class="d-flex align-items-center">
      <input type="checkbox" class="form-check-input fs-4 m-0" :checked="task.check" @change="tanlAndi(task.id)">
      <p class="fs-4 m-0 ms-2">{{ task.title }}</p>
    </div>
    <div class="d-flex">
      <i class="fa-solid fa-pen-to-square fs-4" @click="editTask(task.id,task.title)" style="cursor: pointer;"></i>
      <i class="fa-solid fa-trash fs-4 mx-2" @click="deleteItem(task.id,task.title)" style="cursor: pointer;"></i>
      <i class="fa-heart fs-4" :class="[task.isLike ? 'fa-solid':'fa-regular']" @click="likeFavor(task.id)"
        style="cursor: pointer;"></i>
    </div>
  </li>
</template>
<script>
import { useTasksStore } from '@/pinia-store/TaskStore';
import {toast} from 'vue3-toastify'

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup() {

    const store = useTasksStore()
    let ismodal=store.isModal
    function deleteItem(id, val) {
      const conf = confirm(`Rostdan o\'chirish ${val} ni`)
      if (conf) {
        store.deleteTask(id)
        toast('Successful delete item!')
      }
    }
    function likeFavor(id) {
      store.likeDa(id)
    }
    function tanlAndi(id) {
      store.checKed(id)
    }
    function editTask(id, title) {
      const val = prompt('Edite ', title)
      const value = val != null ? val : title
      store.editItem(id, value)
      toast('Successful edit item!')
    }
    return { deleteItem, likeFavor, tanlAndi, editTask,ismodal }
  }
}
</script>
<style>

</style>