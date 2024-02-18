<template>
  <div class="app">
    <h1 class="alert alert-primary text-center media m-auto mt-1">Best Task</h1>
    <main class="d-flex flex-column">
      <section class="m-auto mt-2 media">
        <AddForm />
      </section>
      <section class="m-auto mt-2 media">
        <ItemsInfo />
      </section>
      <div class="m-auto mt-2 d-flex justify-content-between media">
        <section class="media">
          <SearchItem />
        </section>
        <section>
          <FilterItems />
        </section>
      </div>
      <section class="media m-auto mt-3">
        <ListItems/>
      </section>
    </main>
  </div>
</template>
<script>

import AddForm from './components/add-form/AddForm.vue';
import FilterItems from './components/filter-items/FilterItems.vue';
import ItemsInfo from './components/items-info/ItemsInfo.vue';
import ListItems from './components/list-items/ListItems.vue';
import ModalDelete from './components/modal/ModalDelete.vue';
import SearchItem from './components/search-item/SearchItem.vue';
export default {
  components: { AddForm, ItemsInfo, SearchItem, FilterItems, ListItems ,ModalDelete},
setup(){
 async function myNotif(){
  const perm=await Notification.requestPermission()
  console.log(perm);
if(perm==='granted'){
  new Notification('Assolomu Aleykum!!!',{
    body:"Bir qarab qo'ying ishlarga!",
    icon:'https://cdn-icons-png.flaticon.com/256/10279/10279604.png',
    tag:'Ishlar!',
  })
}
}
setInterval(myNotif,3000)

}
}
</script>
<style>

</style>