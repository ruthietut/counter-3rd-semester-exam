<template>
  <nav>
    <router-link active-class="active" to="/"
      ><img class="img" src="../assets/altschool-logo.png" alt="logo"
    /></router-link>

    <ul>
      <li><router-link active-class="active" to="/">Home</router-link></li>
      <li>
        <router-link active-class="active" to="/counter">Counter</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
