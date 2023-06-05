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
                  Menu
                </a>

                <div class="navbar-dropdown">
                  <a class="navbar-item" href="/about">
                    About
                  </a>
                  <a class="navbar-item">
                    Jobs
                  </a>
                  <a class="navbar-item">
                    Contact
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item">
                    Report an issue
                  </a>
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