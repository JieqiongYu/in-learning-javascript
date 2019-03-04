<template>
  <section class="container">
    <div>
        <Header />
        <div class="links">
          <nuxt-link class="button--green" to="/Users">Users</nuxt-link>
        </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/Header.vue";

export default {
  components: {
    Logo,
    Header
  }
};
</script>

