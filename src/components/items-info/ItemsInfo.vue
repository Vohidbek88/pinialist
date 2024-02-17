<template>
    <div class="text-center infi text-uppercase text-info">
        All:<span class="text-danger">{{ tasks.length }}</span>  Tugatilgan:<span class="text-danger">{{ tugaTilgan }}</span>  Tugatilmagan:<span class="text-danger">{{tugaTilmagan}}</span>  Yoqtirilgan:<span class="text-danger">{{yoqTirilgan}}</span>
    </div>
</template>
<script setup>
import {useTasksStore} from '../../pinia-store/TaskStore'

import {storeToRefs} from 'pinia'

const store=useTasksStore();

const {tasks,tugaTilgan,tugaTilmagan,yoqTirilgan}=storeToRefs(store);

</script>
<style>
    
</style>
