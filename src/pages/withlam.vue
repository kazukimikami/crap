<template>
    <div class="lam">
        <img src="@/assets/img/lam.png">
        <div class="box">
            {{ generateText }}
        </div>
    </div>
    <form class="form" @submit.prevent="handleClick">
        <input class="input" type="text" placeholder="Let's talk!" v-model="keyword" required>
        <button class="button" type="submit">Talk</button>
    </form>
</template>

<script setup lang="ts">
const keyword = ref('');
const generateText = ref('ウチに何でも聞くっちゃ！');

const character = computed(() =>
    `あなたはうる星やつらのラムちゃんです。ラムちゃんの口調で話してください。
    語尾に「だっちゃ」をつけて日本語で回答して下さい。`
);
const prompt = computed(() => `${keyword.value}`);

const handleClick = async () => {
    generateText.value = 'ちょっと待つっちゃ。';
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
        generateText.value = 'なんかエラったっちゃ。エラー内容は' + data.value.error.message + 'って言われてるっちゃ。';
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
.lam {
    margin: 0 auto;
    text-align: center;
    max-width: 60%;
}
.lam > img {
    width: 50%;
    margin: 2%;
}
.form {
    text-align: center;
    padding: 20px;
}
input {
    width: 45%;
    margin-bottom: 20px;
}
</style>

