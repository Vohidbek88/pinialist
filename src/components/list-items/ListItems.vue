<template>
    <ul class="list-unstyled">
        <li class="text-center fs-4 fw-bolder" v-if="store.filterItem(store.searchItem(store.tasks,store.term),store.filter).length==0">Hozircha Yo'q</li>
    <ListItem v-for="task in store.filterItem(store.searchItem(store.tasks,store.term),store.filter)" :task="task" :key="task.id"/>
    </ul>
</template>
<script setup>
import ListItem from '../list-item/ListItem.vue';
import { useTasksStore } from '@/pinia-store/TaskStore';
const store=useTasksStore()
</script>
<style>

</style>