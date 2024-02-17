<template>
    <div>
    <input type="search" class="form-control" v-model="val" @input="seaRch" placeholder="Search by items">
    </div>
</template>
<script setup>
import { useTasksStore } from '@/pinia-store/TaskStore';
import { ref } from 'vue';
const val=ref('')
const store=useTasksStore()
function seaRch(){
    store.searchItem(store.tasks,val.value)
}
</script>
<style>
    
</style>