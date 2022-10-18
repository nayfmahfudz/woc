
<template>
<div class="table w-full p-2">
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b">
                    
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            id
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Nama 
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Deskripsi
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                            Action
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <!-- <tr class="bg-gray-50 text-center">
                    <td class="p-2 border-r">
                        
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2 border-r">
                        <input type="text" class="border p-1">
                    </td>
                    <td class="p-2">
                        <input type="text" class="border p-1">
                    </td>
                    
                    
                </tr> -->

                <tr class="bg-gray-100 text-center border-b text-sm text-gray-600" v-for="item in  items" :key="item">
 <td class="p-2 border-r">{{item.id}}</td>
                    <td class="p-2 border-r">{{item.nama}}</td>
                    <td class="p-2 border-r">{{item.deskripsi}}</td>
                    <td>
                        <a v-bind:href="'#/admin/formIzin/'+ item.id" class="bg-blue-500 p-2 text-white hover:shadow-lg text-xs font-thin">Edit</a>
                        <a @click="delet(item.id)" class="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Remove</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
 <!-- <table>
 <thead>
  <tr>
   <th>Company</th>
  </tr>
 </thead>
 <tbody id="stocksTerminal">
 <tr>
  <td v-for="stockName in items">{{ stockName.fields.stockName }}</td>
 </tr>
 </tbody>
</table> -->
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        items: [
        ],
      }
    },
     methods:{
       delet (e) {
           axios.delete(`http://192.168.10.102:5000/izin/`+e)
    .then(response => {
         this.$swal(response.data);
         axios.get(`http://192.168.10.102:5000/izin`)
    .then(response => {
      this.items  =response.data;
      console.log(response)
      })
      })
  },},
    created() {
    axios.get(`http://192.168.10.102:5000/izin`)
    .then(response => {
        if(response){
      this.items  =response.data;
      }
      })}

  }




</script>