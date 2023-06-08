<template>
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <i>💩</i>Crap
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
                <strong>Crap</strong> by Kazuki Mikami.
            </p>
        </div>
    </footer>
</template>