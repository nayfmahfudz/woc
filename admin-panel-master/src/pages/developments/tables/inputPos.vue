<template>
     <vue-csv-import
    v-slot="{file}"
    v-model="csv"
    :fields="{id: {required: true, label: 'id'},sih3: {required: true, label: 'sih3'},Nama_Pos: {required: true, label: 'Nama Pos'}, X: {required: true, label: 'X'},Y: {required: true, label: 'Y'},Nilai: {required: true, label: 'Nilai'}}"
>
    <vue-csv-toggle-headers ></vue-csv-toggle-headers>
<br>
<br>
    <vue-csv-errors></vue-csv-errors>
    <vue-csv-input></vue-csv-input>
    <br>
<br>
    <vue-csv-map :auto-match="true"></vue-csv-map>
</vue-csv-import>
<br>
<Datepicker v-model="picked" @change="onChangeIzin($event)" />
<br>
<div @click="simpan(csv)" class="bg-blue-500 w-20 p-4  text-white hover:shadow-lg text-xs font-thin">Simpan</div>
<br>
  <div class="table w-full p-2">
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-50 border-b">
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              Id
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              SIH3
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              Nama POS
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
          <div class="flex items-center justify-center">
              X
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
          <div class="flex items-center justify-center">
              Y
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              Nilai
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="(item,index) in csv" :key="item">
          <td
            :class=" 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.id }}
          </td>
          <td
            :class=" 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.sih3 }}
          </td>
          <td
            :class="'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.Nama_Pos }}
          </td>
          <td
            :class="
                'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.X }}
          </td>
          <td
            :class="
                'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.Y }}
          </td>
          <td
            :class="
                'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.Nilai }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import moment from 'moment';
import axios from "axios";
import JsonExcel from "vue-json-excel3";
import { ref } from 'vue';
export default {
  components: {
      JsonExcel,
      Datepicker 
    },
  data() {
    return {
      pencarian:"",
      items: [],
      csv: [],
      picked : ref(new Date())
    };
  },
  methods: {
    onChangeIzin(e) {
      this.$swal(e);
    },
    simpan(e) {
      for (let i = 0; i < e.length; i++) {
       
           e[i].date =moment(this.picked).format('YYYY-MM-DD');
      }
      axios.post(`http://192.168.50.7:5000/datach`, e)
            .then((response) => {
              this.$swal(response.data);
      });
    },
  },
  created() {
  },
};
</script>