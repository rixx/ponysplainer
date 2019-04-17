<template>
  <div id="app">
    <main>
    <router-view />
    </main>
    <footer>
      <p>
      Are you confused about the Django 
      <a href="https://code.djangoproject.com/query">issue tracker</a> works?
      You are not alone.<br>This page wants to be an addition to the
      <a href="https://docs.djangoproject.com/en/2.2/internals/contributing/triaging-tickets/#triage-workflow">
        official documentation
      </a> for newcomers to the Django community.
      </p>
      ponysplainer is a project by <a href="https://rixx.de">Tobias Kunze</a>
    </footer>
  </div>
</template>
<style lang="stylus">
main
  max-height: 90vh;
footer
  text-align: center
  height: auto
</style>
