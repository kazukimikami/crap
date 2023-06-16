<template>
    <div class="sonoko">
        <img src="@/assets/img/sonoko.png">
        <div v-for="generateText in generateTexts" :key="generateText">
            <div class="box">
                {{ generateText }}
            </div>
        </div>
    </div>
    <form class="form" @submit.prevent="handleClick">
        <input class="input" type="text" placeholder="Let's talk!" v-model.lazy="keyword" required>
        <button class="button" type="submit">Talk</button>
    </form>
</template>

<script setup lang="ts">
const keyword = ref<string>('');
const generateTexts = ref<string[]>('私にまっかせなさ～い！');

const character = computed(() =>
    `あなたは名探偵コナンの鈴木園子です。鈴木園子の口調で、タメ口で話してください。
    鈴木園子は庶民的でサバサバした気さくな性格で、流行に敏感でイケメンに弱いミーハー気質の持ち主です。
    日本語で回答して下さい。`
);
const prompt = computed(() => `${keyword.value}`);

const handleClick = async () => {
    generateTexts.value = 'ちょっと待ってね。';
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
        generateTexts.value.pop();
        generateTexts.value.push('エラーだよ。エラー内容は' + data.value.error.message + 'って言われてるみたい。');
        input.disabled = false;
        button.disabled = false;
    } else {
        generateTexts.value.pop();
        generateTexts.value.push(data.value.choices[0].message.content);
        input.disabled = false;
        button.disabled = false;
    }
}
</script>

<style scoped>
.sonoko {
    margin: 0 auto;
    text-align: center;
    max-width: 60%;
}
.sonoko > img {
    width: 35%;
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

