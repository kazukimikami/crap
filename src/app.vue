<template>
  <NuxtLayout>
    <div class="form">
        <input class="input" @keypress.enter="addTask()" type="text" placeholder="やること入力" v-model="taskName">
        <button class="button" @click="addTask()">追加</button>
    </div>
    <h2 class="subtitle">タスク名</h2>
    <div class="content">
      <div class="box" v-for="taskName in taskNames" :key="taskName">
        <span>{{ taskName }}</span>
        <button class="button is-success is-small" @click="completeTask(taskName)">
          <span class="icon">
            <i>☑︎</i>
          </span>
          <span>終了</span>
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const taskName = ref<string>('');
const taskNames = ref<string[]>([]);
const addTask = (): void => {
  if (taskName.value === '') return;

  taskNames.value.push(taskName.value);
  taskName.value = '';
}
const completeTask = (completedTaskName: string): void => {
  taskNames.value = taskNames.value.filter((taskName: string): boolean => {
    return completedTaskName !== taskName;
  })
}
</script>

<style scoped>
.subtitle {
  text-align: center;
}
.content {
  width: 600px;
  text-align: center;
  margin: 2em auto;
}
.content .box span {
  vertical-align: middle;
}
.box .button {
  display: block;
  margin: -30px 0 0 auto;
}
.form {
  text-align: center;
  padding: 20px;
}
input {
  width: 20%;
  margin-bottom: 20px;
}
</style>