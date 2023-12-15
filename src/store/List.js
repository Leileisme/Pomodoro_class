import { defineStore } from 'pinia'

const time = parseInt(import.meta.env.VITE_TIME)
const timeBreak = parseInt(import.meta.env.VITE_TIME_BREAK)


export const useListStore = defineStore('list', {
  state: () => ({
    items: [],
    id: 1,
    timeleft:time,
    break:false,
    finishedItems:[],
    // 目前進行中的事，會到items第一個資料放到這，完成後放到finishedItem的陣列
    currentItem:''
  }),
  actions:{
    addItem(name){
      this.items.push({
        id:this.id++,
        name,
        edit:false,
        model:name
      })
    },
    findIndexById(id){
      return this.items.findIndex(item=>item.id===id)
    },
    editItem(id){
      const i =this.findIndexById(id)
      if(i<0) return
      this.items[i].edit=true
    },
    delItem(id){
      const i =this.findIndexById(id)
      if(i<0) return
      this.items.splice(i,1)
    },
    cancelEditItem(id){
      const i =this.findIndexById(id)
      if(i<0) return
      this.items[i].model=this.items[i].name
      this.items[i].edit=false
    },
    confirmEditItem(id){
      const i =this.findIndexById(id)
      if(i<0) return
      this.items[i].name=this.items[i].model
      this.items[i].edit=false
    },
    setCurrentItem () {
      //另一種寫法
      // this.currentItem = this.items[0].name
      // this.items.splice(0,1)

      // shift() 移除陣列內的第一個東西 並回傳移除內容
      this.currentItem = this.break ? '休息一下' : this.items.shift().name
    },
    countdown(){
      this.timeleft--
    },
    setFinishedItem(){
      if(!this.break){ 
        this.finishedItems.push({
          name:this.currentItem,
          // currentItem進去的時候沒有id，所以再給他一個id
          id:this.id++
        })
      }
      this.currentItem = ''
      if(this.items.length>0){
        this.break = !this.break
      }

      this.timeleft = this.break? timeBreak: time
    },
    delFinishedItem(id){
      const i = this.finishedItems.findIndex(item =>item.id === id)
      if(i<0) return
      this.finishedItems.splice(i,1)
    }
  },
  persist:{
    // 本地儲存的名稱
    key:'pomodoro-list'
  }
})
