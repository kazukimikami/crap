<template>
    <form class="form" @submit.prevent="handleClick">
        <input class="input" type="text" placeholder="Let's talk!" v-model="keyword" required>
        <button class="button" type="submit">Talk</button>
    </form>
    <div class="sonoko">
        <p><img src="https://img.animanch.com/2022/04/1650274668333.jpg"></p>
        <p>{{ generateText }}</p>
    </div>
</template>

<script setup lang="ts">
const keyword = ref('');
const generateText = ref('私にまっかせなさ～い！');

const character = computed(() => `あなたは名探偵コナンの鈴木園子です。`);
const prompt = computed(() => `${keyword.value}について最大150文字で、語尾に「わ」をつけて日本語で回答して下さい。`);

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
            character,
            prompt
        }
    })

    if (data.value.error) {
        generateText.value = 'エラーだよ。エラー内容は' + data.value.error.message + 'って言われてるみたい。';
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
.sonoko {
    display: flex;
    justify-content: center;
}
.sonoko>p {
    width: 20%;
    margin: 2%;
}
</style>

