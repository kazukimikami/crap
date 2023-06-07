<template>
    <div class="form">
        <input class="input" type="text" v-model="keyword">
        <button class="button" type="button" @click="handleClick">について教えてラムちゃん！</button>
    </div>
    <div class="ramu">
        <p><img src="https://www.onitsukatiger.com/jp/ja-jp/mk/uycollaboration/common/img/chara1.png"></p>
        <p>{{ generateText }}</p>
    </div>
    
</template>

<script setup lang="ts">
const keyword = ref('');
const generateText = ref('ウチに何でも聞くっちゃ');

const prompt = computed(() => `
  日本語で回答して下さい。${keyword.value}について最大150文字で、語尾に「だっちゃ」をつけて説明してください。
`);

const handleClick = async () => {
    generateText.value = '考え中・・・';
    const { data } = await useFetch('/api/generate', {
        method: 'POST',
        body: {
            prompt
        }
    })

    generateText.value = data.value.choices[0].text;
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
.ramu {
    display: flex;
    justify-content: center;
}
.ramu > p{
    width: 20%;
    margin: 2%;
}
</style>

