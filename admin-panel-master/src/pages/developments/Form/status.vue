<template>
<form class="w-full max-w-lg"  id="appx" @submit="checkForm" method="post">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"  for="grid-first-name">
        Nama Status
      </label>
      <input v-model="nama"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nama Status">
      <p class="text-red-500 text-xs italic">{{nameerr}}</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Hari
      </label>
      <input  v-model="hari" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jumlah Hari">
      <p class="text-red-500 text-xs italic">{{harierr}}</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Deskripsi
      </label>
      <input v-model="deskripsi" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Deskripsi">
     
    </div>
  </div>
  
    <!-- <div > -->
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Submit
</button>
  <!-- </div> -->
</form>
</template>
<script>

import axios from 'axios';

export default {
  el:'#appx',
  data() {
    return {
    nama: '',
    nameerr:'',
    hari: '',
    harierr:'',
    deskripsi:'',
    }
  },
    methods:{
       onChange (e) {
        this.statusSelected = e.target.value;
       },
    checkForm: function (e) {
      e.preventDefault();
      if (this.nama === '') {
        this.nameerr ='nama pemohon is required.';
      }else  if (this.hari === '') {
        this.harierr ='Jumlah hari pemohon is required.';
      } 
      else {
          const datapost = {
      nama: this.nama,
         hari: this.hari,
         deskripsi:this.deskripsi
    };
         axios.post(`http://192.168.10.102:5000/status`,datapost)
    .then(response => {
      this.$swal(response.data);
        });
      }
    }
  },  
  created() {
      axios.get(`http://192.168.10.102:5000/status/`+this.$route.params.id)
    .then(response => {
      if(response.data.status==="succes")
     {
     this.nama=response.data.data.nama,
     this.deskripsi=response.data.data.deskripsi,
     this.hari=response.data.data.hari
    }
      })
      }  
  }


</script>

