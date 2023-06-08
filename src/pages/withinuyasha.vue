<template>
    <div class="form">
        <input class="input" type="text" placeholder="Let's talk!" v-model="keyword">
        <button class="button" type="button" @click="handleClick">Talk</button>
    </div>
    <div class="inuyasha">
        <p><img src="https://img.p-gabu.jp/assets/machine/c8a8d143a1895cd873eb0add69819e0d/main_d183c9e1bdbd5260651e0e48debf3d3868db0c3a.png"></p>
        <p>{{ generateText }}</p>
    </div>
</template>

<script setup lang="ts">
const keyword = ref('');
const generateText = ref('いくぜ！鉄砕牙！');

const prompt = computed(() => `
  ${keyword.value}について最大150文字で、日本語で回答して下さい。
`);

const handleClick = async () => {
    generateText.value = '考え中だよ。ちょっと待ってね。';
    const input = document.getElementsByClassName('input')[0];
    const button = document.getElementsByClassName('button')[0];
    // TODO 絶対いい方法あるから暫定ってことで。
    input.disabled = true;
    button.disabled = true;

    const { data } = await useFetch('/api/generate', {
        method: 'POST',
        body: {
            prompt
        }
    })

    if (data.value.error) {
        generateText.value = 'エラーだぜ！エラー内容は' + data.value.error.message + 'らしいぞ。';
        input.disabled = false;
        button.disabled = false;
    } else {
        generateText.value = data.value.choices[0].message.content;
        input.disabled = false;
        button.disabled = false;
    }
}
</script>

<style scoped>
.form {
    text-align: center;
    padding: 20px;
}
input {
    width: 40%;
    margin-bottom: 20px;
}
.inuyasha {
    display: flex;
    justify-content: center;
}
.inuyasha>p {
    width: 20%;
    margin: 2%;
}
</style>

