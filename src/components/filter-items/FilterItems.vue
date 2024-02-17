<template>
    <div>
        <select class="form-select" v-model="selected" @change="onChange">
            <option value="" selected>Barchasi</option>
            <option value="tugatilgan">Tugatilgan</option>
            <option value="tugatilmagan">Tugatilmagan</option>
            <option value="yoqtirilgan">Yoqtirilgan</option>
        </select>
    </div>
</template>
<script setup>
import { useTasksStore } from '@/pinia-store/TaskStore';
import { ref } from 'vue';
const store=useTasksStore()
const selected=ref('')
function onChange(){
    store.filterItem(store.tasks,selected.value)
}

</script>
<style>
    
</style>