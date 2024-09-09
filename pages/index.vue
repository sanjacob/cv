<script setup lang="ts">
const { profile, skills } = useAppConfig();
</script>

<template>
<main>
  <h1>{{ profile.name }} {{ profile.surname}}</h1>

  <CVSection v-for="{ name, items } in skills" :title="name">
    <CVChips :items />
  </CVSection>
</main>
</template>

<style>
body {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}

main {
  padding: 1rem 4rem;
  width: min(60rem, 80lvw);
}
</style>
