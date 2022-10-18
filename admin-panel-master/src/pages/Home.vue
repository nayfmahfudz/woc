<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
    <div class="bg-green-50 rounded-xl p-5">
      <credit-card-icon-o class="w-10 h-10 text-green-500" />
      <p class="mt-8 text-green-500 text-sm">{{angkapermohonan}}</p>
      <p class="mt-8 text-green-500 text-sm">Surat Permohonan</p>
    </div>
    <div class="bg-purple-50 rounded-xl p-5">
      <chart-pie-icon-o class="w-10 h-10 text-purple-500" />
      <p class="mt-8 text-purple-500 text-sm">{{Activated}}</p>
      <p class="mt-8 text-purple-500 text-sm">Activated</p>
    </div>
    <div class="bg-yellow-50 rounded-xl p-5">
      <user-group-icon-o class="w-10 h-10 text-yellow-500" />
       <p class="mt-8 text-yellow-500 text-sm">{{Expired}}</p>
      <p class="mt-8 text-yellow-500 text-sm">Expired</p>
    </div>
    <div class="bg-red-50 rounded-xl p-5">
      <library-icon-o class="w-10 h-10 text-orange-500" />
      <p class="mt-8 text-orange-500 text-md-center">{{Danger}}</p>
      <p class="mt-8 text-orange-500 text-sm">Danger</p>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  data() {
    return {
      angkapermohonan: 0,
      Activated:0,
      Expired:0,
      Danger:0,
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(`http://192.168.10.102:5000/permohonan`)
    .then(response => {
      console.log(response.data.length);
      let activateddArray=[]
       let ExpireddArray=[]
      for (let i = 0; i < response.data.length; i++) {
        if(response.data[i].status=="Activated"){
activateddArray.push(response.data[i])
        }else if(response.data[i].status=="Expired"){
ExpireddArray.push(response.data[i])
        }
//         if(response.data[i].status=="Expired"){
// ExpireddArray.push(response.data[i])
//         }
        
      }
      // JSON responses are automatically parsed.
      this.angkapermohonan = (response.data).length
       this.Activated = activateddArray.length
        this.Expired= ExpireddArray.length
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>