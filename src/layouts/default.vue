<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                Vamillion
            </a>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Bae
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item" href="/withlam">Lamu</a>
                        <a class="navbar-item" href="/withsonoko">Sonoko</a>
                        <a class="navbar-item" href="/withyoruichi">Yoruichi</a>
                        <a class="navbar-item" href="/withinuyasha">Inuyasha</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <slot />

    <footer class="footer">
        <div class="content has-text-centered">
            <p>
                <strong>Vamillion</strong> by Kazuki Mikami.
            </p>
        </div>
    </footer>
</template>

<style scoped>
.navbar {
    background-color: rgba(243,166,180);
}
</style>