<script setup lang="ts">
  defineProps<{
    pageName: string;
  }>();

  const handleNavigate = (pathname: string) =>
    navigateTo({ path: `/${pathname}` });
</script>

<template>
  <section v-if="pageName === 'home'">
    <div class="wrapper">
      <h1>Home Page!</h1>

      <SharedTextTab>
        <slot />
      </SharedTextTab>

      <SharedButtonRedirect :onClick="() => handleNavigate('about')"
        >Go to About page
      </SharedButtonRedirect>
    </div>
  </section>

  <section v-if="pageName === 'about'">
    <div class="wrapper">
      <h1>About Page!</h1>

      <SharedTextTab>
        <slot />
      </SharedTextTab>

      <SharedButtonRedirect :onClick="() => handleNavigate('')"
        >Go to Home page
      </SharedButtonRedirect>
    </div>
  </section>
</template>
ƒ

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;
    padding: 0.5rem;
  }
</style>
