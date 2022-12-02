<template>
  <!-- Toggle sidebar button -->
  <button class="fixed z-50 bottom-4 right-4 w-16 h-16 rounded-full bg-gray-900 lg:hidden">
    <menu-alt-4-icon-s 
      class="btn-toggle"
      :class="{'opacity-0': showSidebar}"
      @click="toggleSidebar" />
    <x-icon-s 
      class="btn-toggle"
      :class="{'opacity-0': !showSidebar}"
      @click="toggleSidebar" />
  </button>
  <!-- Overlay -->
  <div class="fixed inset-0 bg-black bg-opacity-25 z-30 lg:hidden" :class="{'hidden': !showSidebar}"></div>
  <div class="fixed z-40 left-0 top-0 right-24 lg:right-auto lg:w-64 h-screen border-r border-gray-200 overflow-y-auto bg-white" :class="{'hidden': allowSidebarHide && !showSidebar}">
    <!-- Header -->
    <header class="flex items-center pt-10 px-5">
      <img src="@/assets/logo.svg" alt="Logo" class="w-10">
      <div class="ml-2 flex flex-col">
        <h1 class="text-sm text-gray-700 font-medium">Admin Panel</h1>
        <p class="text-gray-400 text-xs">Hidrologi</p>
      </div>
    </header>
    <!-- Menu -->
    <div class="mt-14">
      <menu-header text="Development" />
      <menu-item icon="lightning-bolt-icon-o" text="Getting Started" :route="{name: 'dev-getting-started'}" />
      <menu-item icon="cube-icon-o" text="Curah Hujan">
        <template #sub-menu>
          <menu-item-sub text="Input Data Pos" :route="{name: 'inputpos'}" />
          <menu-item-sub text="Live Data" :route="{name: 'liveDataCH'}" />
          <menu-item-sub text="Data Pos" :route="{name: 'listpos'}" />
        </template>
      </menu-item>
      <menu-item icon="cube-icon-o" text="Water Level">
        <template #sub-menu>
          <menu-item-sub text="Input Data Pos" :route="{name: 'inputposDA'}" />
          <menu-item-sub text="Live Data" :route="{name: 'liveDataAwlr'}" />
          <menu-item-sub text="Data Pos" :route="{name: 'listposDA'}" />
        </template>
      </menu-item>
      <menu-item icon="cube-icon-o" text="Klimatologi">
        <template #sub-menu>
          <menu-item-sub text="Input Data Pos" :route="{name: 'inputposKL'}" />
          <menu-item-sub text="Data Pos" :route="{name: 'listposKL'}" />
        </template>
      </menu-item>
      <menu-item icon="cube-icon-o" text="Kualitas Air">
        <template #sub-menu>
          <menu-item-sub text="Input Data Pos" :route="{name: 'inputposKA'}" />
          <menu-item-sub text="Data Pos" :route="{name: 'listposKA'}" />
        </template>
      </menu-item>
    </div>
  </div>
</template>

<script>
import MenuHeader from '@/components/layouts/SidebarMenuHeader.vue'
import MenuItem from '@/components/layouts/SidebarMenuItem.vue'
import MenuItemSub from '@/components/layouts/SidebarMenuItemSub.vue'
import { vueWindowSizeMixin } from 'vue-window-size/option-api'
export default {
  name: 'Sidebar',
  mixins: [vueWindowSizeMixin()],
  components: {
    MenuHeader,
    MenuItem,
    MenuItemSub,
  },
  data() {
    return {
      widthBreakpoint: 1024, // Tailwind 'lg' breakpoint
      showSidebar: false
    }
  },
  watch: {
    $windowWidth(val) {
      if (val < this.widthBreakpoint) { 
        this.showSidebar = false
      }
    },
    $route() {
      this.showSidebar = false
    },
    showSidebar(val) {
      this.$emit('visibility-change', val)
    }
  },
  computed: {
    allowSidebarHide() {
      return this.$windowWidth < this.widthBreakpoint;
    }
  },
  methods: {
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    }
  }
}
</script>

