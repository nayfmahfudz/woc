<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent="$emit('submit')" class="_form">
      <slot></slot>
    </form>
    <PreFormData :form="form" :errors="errors" />
  </div>
</template>

<script>
import PreFormData from "@/components/layouts/PreFormData.vue";

export default {
  components: {
    PreFormData
  },
  emits: ["submit"],
  props: {
    title: {
      type: String,
      required: true
    },
    form: {
      type: Object,
      required: true
    },
    errors: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
._form {
  margin: 2.5rem 0 5rem 0;
}
</style>