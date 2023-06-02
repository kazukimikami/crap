<template>
  <NuxtLayout>

    <div class="form">
        <input v-model="taskName">
        <p>{{ taskName }}</p>
    </div>

  </NuxtLayout>
</template>

<script setup lang="ts">
const taskName = ref<string>('')
</script>

<style scoped>
.form {
  text-align: center;
}
</style>