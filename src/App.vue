<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>

  :root {
    --bg-color: #f0f0f0;
    --primary-color: #42b983;
    --text-color: #2c3e50;
    --primary-error: #E53935;
    --border-radius: 8px;
    --spacing: 0.5rem;
    --shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text-color);
    max-width: 900px;
    margin: 0 auto;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: var(--primary-color);
  }

  ul {
    margin-top: 1rem;
    padding: 0;
    list-style: none;
  }

  li {
    background: var(--bg-color);
    margin-bottom: var(--spacing);
    padding: 0.75rem 1rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    text-align: left;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  li:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
</style>
