<template>
    <form class="form" @submit.prevent="handleClick">
        <input class="input" type="text" placeholder="Let's talk!" v-model="keyword" required>
        <button class="button" type="submit">Talk</button>
    </form>
    <div class="yoruichi">
        <p><img src="https://pbs.twimg.com/media/E854tX9VoAIi1px.png"></p>
        <p>{{ generateText }}</p>
    </div>
</template>

<script setup lang="ts">
const keyword = ref('');
const generateText = ref('見せてやろう、わしの真の姿を');

const character = computed(() => `あなたはBLEACHの四楓院夜一です。四楓院夜一の口調で話してください。四楓院夜一は忍者のような口調で話します。日本語で回答して下さい。`);
const prompt = computed(() => `${keyword.value}`);

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
        generateText.value = 'エラーのようじゃ。エラー内容は' + data.value.error.message + 'と申しておる。';
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
.yoruichi {
    display: flex;
    justify-content: center;
}
.yoruichi>p {
    width: 20%;
    margin: 2%;
}
</style>

