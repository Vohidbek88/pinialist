import {defineStore} from 'pinia'


export const useTasksStore=defineStore('taskstore',{
    state:()=>({
        tasks:JSON.parse(localStorage.getItem('data')),
          term:'',
          filter:'',
          isModal:false,
    }),
    getters:{
        tugaTilgan(state){
            return state.tasks.filter(item=>item.check).length
        },
        tugaTilmagan(state){
            return state.tasks.filter(item=>!item.check).length
        },
        yoqTirilgan(state){
            return state.tasks.filter(item=>item.isLike).length
        },
    },

    actions:{
        addTask(task){
            this.tasks.push({
                id:Math.floor(Math.random()*100),
                title:task,
                isLike:false,
                check:false,
            })
            localStorage.setItem('data',JSON.stringify(this.tasks))
        },
        deleteTask(id){
          this.tasks= this.tasks.filter(item=>item.id!=id)
          localStorage.setItem('data',JSON.stringify(this.tasks))
        },
        likeDa(id){
            this.tasks=this.tasks.map(item=>{
                if(item.id==id){
                    return{...item,isLike:!item.isLike}
                }
                return item
            })
            localStorage.setItem('data',JSON.stringify(this.tasks))
        },
        checKed(id){
            this.tasks=this.tasks.map(item=>{
                if(item.id==id){
                    return{...item,check:!item.check}
                }
                return item
            })
            localStorage.setItem('data',JSON.stringify(this.tasks))
        },
       searchItem(array,term){
        this.term=term
            if(!this.term){
              return array
            }
            return array.filter(item=>item.title.toLowerCase().includes(this.term.toLowerCase()))

        },
        filterItem(array,filter){
            this.filter=filter
            switch (this.filter) {
                case 'tugatilgan':
                    return array.filter(item=>item.check)
                case 'tugatilmagan':
                    return array.filter(item=>!item.check)
                case 'yoqtirilgan':
                    return array.filter(item=>item.isLike)
                default:
                    return array
        
            }
        },
        editItem(id,val){
            this.tasks=this.tasks.map(item=>{
                if(item.id==id){
                    return{...item,title:val}
                }
                return item
            })
            localStorage.setItem('data',JSON.stringify(this.tasks))
        }
    }
})