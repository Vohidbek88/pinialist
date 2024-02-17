<template>
    <div class="d-flex justify-content-between addform m-auto">
        <input type="text" required class="form-control w-75" @change="addItem" placeholder="Items name" v-model="nomi">
        <button :disabled="!nomi && nomi==''" class="btn btn-info" @click="addItem">Qo'shish</button>
    </div>
</template>
<script setup>
import { useTasksStore } from '@/pinia-store/TaskStore';
import { ref } from 'vue';
import {toast} from 'vue3-toastify'
const store = useTasksStore()
const nomi = ref('')
function addItem() {
  if (!nomi.value && nomi.value.length==0 && e.code=='Space') return
  store.addTask(nomi.value)
  toast('Successful add Item!')
  nomi.value = ''
}

</script>
<style>

</style>