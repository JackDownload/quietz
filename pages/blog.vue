<template>
  <div>
    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="blog/post.slug">{{ post.title }} {{ post.thumbnail }}</NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const posts = await $content("blog").fetch();

    return {
      posts,
    };
  },
};
</script>