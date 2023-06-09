<template>
    <form class="form" @submit.prevent="handleClick">
        <input class="input" type="text" placeholder="Let's talk!" v-model="keyword" required>
        <button class="button" type="submit">Talk</button>
    </form>
    <div class="lam">
        <p><img src="https://www.onitsukatiger.com/jp/ja-jp/mk/uycollaboration/common/img/chara1.png"></p>
        <p>{{ generateText }}</p>
    </div>
    
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
.form {
    text-align: center;
    padding: 20px;
}
input {
    width: 40%;
    margin-bottom: 20px;
}
.lam {
    display: flex;
    justify-content: center;
}
.lam > p{
    width: 20%;
    margin: 2%;
}
</style>

