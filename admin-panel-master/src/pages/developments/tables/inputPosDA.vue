<template>
     <vue-csv-import
    v-slot="{file}"
    v-model="csv"
    :fields="{Nama_Pos: {required: true, label: 'Nama_Pos'}, X: {required: true, label: 'x'},Y: {required: true, label: 'Y'},R: {required: true, label: 'R'}}"
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
<div @click="simpan(csv,picked)" class="bg-blue-500 w-20 p-4  text-white hover:shadow-lg text-xs font-thin">Simpan</div>
<br>
  <div class="table w-full p-2">
    <table class="w-full border">
      <thead>
        <tr class="bg-gray-50 border-b">
          <th
            class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500"
          >
            <div class="flex items-center justify-center">
              No
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
              Pagi
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
            Siang
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
              Malam
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
            {{ index+1 }}
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
            {{ item.R }}
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
    simpan(e,date) {
      for (let i = 0; i < e.length; i++) {
          return e[i].date =moment(this.picked).format('YYYY-MM-DD');
      }
      axios

            .post(`http://192.168.50.7:5000/data`, e)
            .then((response) => {
              this.$swal(response.data);
      });
    },
  },
  created() {
  },
};
</script>