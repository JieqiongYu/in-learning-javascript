<template>
    <div class="posts-page">
      <PostList />
    </div>
</template>

<style scoped>
.posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script>
  import PostList from "@/components/Posts/PostList";
  export default {
    components: {PostList}
  }
</script>
