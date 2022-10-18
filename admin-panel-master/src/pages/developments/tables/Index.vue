<template>
   <div>
    <json-excel :data="items" />
  </div>
<div class="flex flex-wrap -mx-3 mb-6 ">
 
      <div class="w-1/5 md:w-1px-3 mb-6 md:mb-0  p-2">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-gray-700 text-xs
            font-bold
            mb-2
          "
          for="grid-first-name"
        >
          Search
        </label>
        <input autofocus
          class="
            appearance-none
            block
            w-full
            bg-gray-200
            text-gray-700
            border border-red-500
            rounded
            py-3
            px-4
            mb-3
            leading-tight
            focus:outline-none focus:bg-white
          "
          @input="handleInput($event)"
          v-model="pencarian"
          type="text"
          placeholder="Isikan Pencarian"
        />
      </div>
    </div>
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
              Nama Pemohon
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
              Izin
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
              Status
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
              Terdaftar
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
              ID 
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
              Action
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

        <tr v-for="(item,index) in items" :key="item">
          <td
            :class="
              parseInt(item.h) < 0
                ? 'p-2 border-r bg-red-300 text-center border-b text-sm text-gray-600'
                : 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ index+1 }}
          </td>
          <td
            :class="
              parseInt(item.h) < 0
                ? 'p-2 border-r bg-red-300 text-center border-b text-sm text-gray-600'
                : 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.nama_pemohon }}
          </td>
          <td
            :class="
              parseInt(item.h) < 0
                ? 'p-2 border-r bg-red-300 text-center border-b text-sm text-gray-600'
                : 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.izin }}
          </td>
          <td
            :class="
              parseInt(item.h) < 0
                ? 'p-2 border-r bg-red-300 text-center border-b text-sm text-gray-600'
                : 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.status }}
          </td>
          <td
            :class="
              parseInt(item.h) < 0
                ? 'p-2 border-r bg-red-300 text-center border-b text-sm text-gray-600'
                : 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ format_date(item.dibuat) }}
          </td>
          <td
            :class="
              parseInt(item.h) < 0
                ? 'p-2 border-r bg-red-300 text-center border-b text-sm text-gray-600'
                : 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            {{ item.usernoid }}
          </td>
          <td
            :class="
              parseInt(item.h) < 0
                ? 'p-2 border-r bg-red-300 text-center border-b text-sm text-gray-600'
                : 'p-2 border-r bg-gray-100 text-center border-b text-sm text-gray-600'
            "
          >
            <a
              v-bind:href="'#/admin/permohonan/' + item.usernoid"
              class="
                bg-blue-500
                p-2
                text-white
                hover:shadow-lg
                text-xs
                font-thin
              "
              >Edit</a
            >
            <a
              @click="delet(item.usernoid)"
              class="
                bg-red-500
                p-2
                text-white
                hover:shadow-lg
                text-xs
                font-thin
              "
              >Remove</a
            >
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
import moment from 'moment';
import axios from "axios";
import JsonExcel from "vue-json-excel3";
export default {
  components: {
      JsonExcel,
    },
  data() {
    return {
      pencarian:"",
      items: [],
    };
  },
  methods: {
    handleInput(value){
      if(!!value.target.value){
         axios.get(`http://192.168.10.102:5000/namapermohonan/`+value.target.value).then((response) => {
          this.items = response.data.data;
        });
      }else{
        axios.get(`http://192.168.10.102:5000/permohonan`).then((response) => {
      this.items = response.data;
      console.log(response);
    });
      }
      },
  format_date(value){
         if (value) {
           return moment(String(value)).format('DD/MM/YYYY');
          }
      },
    delet(e) {
      axios.delete(`http://192.168.10.102:5000/permohonan/` + e).then((response) => {
        this.$swal(response.data);
        axios.get(`http://192.168.10.102:5000/permohonan`).then((response) => {
          this.items = response.data;
          console.log(response);
        });
      });
    },
  },
  created() {
    axios.get(`http://192.168.10.102:5000/permohonan`).then((response) => {
      this.items = response.data;
      console.log(response);
    });
  },
};
</script>