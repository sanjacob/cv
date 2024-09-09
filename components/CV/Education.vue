<script setup lang="ts">
const { education } = useAppConfig();
</script>

<template>
<ol>
  <li v-for="uni in education">
    <CVUniversity :=uni />
  </li>
</ol>
</template>

<style scoped>
</style>
