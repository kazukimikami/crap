<template>
    <div class="main">
        <img src="@/assets/img/main.jpg">
        <div class="main-title">
            <h1 class="title is-1">Crap</h1>
            <h2 class="subtitle is-3">Love with xxx</h2>
        </div>
    </div>
        <div class="navbar-dropdown">
            <a class="navbar-item" href="/withlam">Lamu</a>
            <a class="navbar-item" href="/withsonoko">Sonoko</a>
            <a class="navbar-item" href="/withyoruichi">Yoruichi</a>
            <a class="navbar-item" href="/withinuyasha">Inuyasha</a>
        </div>
</template>

<style scoped>
    .main {
        position: relative;
    }
    .main > img {
        background-image: url(@/assets/img/main.jpg);
        width: 100vw;
        height: 80%;
        opacity: 0.2;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .main-title {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        margin: 0;
        padding: 0;
    }
    .navbar-dropdown {
        text-align: center;
    }
</style>