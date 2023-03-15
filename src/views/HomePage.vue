<template>
  <div class="container">
    <NavBar />
    <div class="home">
      <img class="myImg" src="../assets/myProfilePic.jpeg" alt="logo" />
      <i>HELLO! <br />Welcome to my world</i>
      <p>My name is Ruthie Obasi,</p>
      <p>I am an Altschool student,</p>
      <P>This is my submission for my 3rd semester exam</P>
      <div class="links">
      <a
        target="_blank"
        href="https://github.com/ruthietut/counter-3rd-semester-exam"
        >Github Link</a
      >
      <router-link active-class="active" to="./NotFound.vue">Error page</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "HomePage",

  components: {
    NavBar,
  },
};
</script>
