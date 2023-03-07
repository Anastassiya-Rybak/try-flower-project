<template>
  <div class="Navbar">
    <nav>
      <div class="navbar__logo">
        <nuxt-link no-prefetch to="/">
          <img src="../static/Vegan-Logo-PNG-File.png" alt="Логотип">
        </nuxt-link>
      </div>
      <ul>
        <li>
          <nuxt-link exact active-class="active-link" to="/about">О нас</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contacts">Контакты</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/range">Ассортимент</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="js">
export default {
  name: 'NavBar',
}
</script>

<style lang="css">
  nav {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  nav .navbar__logo {
    width: 7%;
    min-width: 30px;
  }
  nav .navbar__logo img {
    max-width: 100%;
  }
  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    width: 40%;
    min-width: 250px;
  }
  nav a {
    text-decoration: none;
    font-size: 18px;
    color: rgb(44, 173, 108);
    text-shadow: 1px 1px 1px pink;
  }
  a:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s;
    text-shadow: 1px 1px 2px rgb(165, 124, 131);
  }
  .active-link {
    text-shadow: 1px 1px 2px rgb(165, 124, 131);
  }
</style>