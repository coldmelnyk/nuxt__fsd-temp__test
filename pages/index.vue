<template>
  <section>
    <div class="wrapper">
      <h1>Home Page!</h1>

      <SharedTextTab> Welcome to the home page!</SharedTextTab>

      <SharedButtonRedirect :onClick="() => handleNavigate('about')"
        >Go to About page
      </SharedButtonRedirect>
    </div>
  </section>
</template>
