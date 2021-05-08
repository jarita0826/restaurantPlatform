<template>
  <div v-for="(item, index) in items" :key="index">
    <label :for="item.label">{{ item.label }}</label>
    <input
      :id="item.id"
      :name="item.id"
      :type="item.type"
      v-model="item.value"
      class="form-control"
      :placeholder="item.placeholder"
      required
    />
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "InputText",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>