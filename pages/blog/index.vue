<template>
  <div>
    <li v-for="post of posts" :key="post.slug">
        <div class="backgroundImage" :style="{ backgroundImage: `url(${post.thumbnail})` }">
      <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
        </div>
    </li>
  </div>
</template>

<script>
export default {
   async asyncData({ $content }) {
    const posts = await $content("/blog").fetch();

    return {
      posts,
    };
  },
};
</script>