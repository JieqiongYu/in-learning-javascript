<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm'

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data() {
      return {
        loadedPost:{
          author: 'Mer',
          title: 'My first Post',
          content: 'Super amazing, thanks for that!!',
          thumbnailLink: 'http://cryptotimes.org/wp-content/uploads/2018/06/050318_LRR_MEN_WomenTech.jpg'
        }

      }
    }
  }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
