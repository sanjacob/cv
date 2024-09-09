<script setup lang="ts">
const props = defineProps({
  items: Array
});
</script>

<template>
<ul>
  <li v-for="chip in items">
    <CVChipTile :=chip />
  </li>
</ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-flow: row wrap;
  grid-gap: 0.25rem;
}
</style>
