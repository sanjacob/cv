<script setup lang="ts">
const props = defineProps({
  name: String,
  lang: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  }
});

const colorClass = computed(() => {
  if (props.color) {
    return null;
  }

  const lang = (props.lang) ?
    props.lang : props.name.toLowerCase();
  return `bg-color-${lang}`;
});
</script>

<template>
<div class="tile">
  <div class="icon" :class="colorClass"
      :style="{ 'background-color': color }"></div>
  <span>{{ name }}</span>
</div>
</template>

<style scoped>
.tile {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  grid-gap: 0.5rem;

  padding: 0.25rem 1rem;

  border-radius: 1rem;
  box-shadow: 0px 2px 2px -2px black;
  user-select: none;

  transition: background-color 0.2s ease-in;
}

.tile:hover {
  background-color: #C1C1C1;
}

.icon {
  height: 0.5rem;
  width: 0.5rem;

  border-radius: 50%;
}
</style>
