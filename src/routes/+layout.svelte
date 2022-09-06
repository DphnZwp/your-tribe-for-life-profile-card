<script>

</script>

<header>
  <p>abkkfkaf</p>
  <img src="/favicon.png" alt="logo">
</header>

<main>
  <!-- Page content -->
  <slot></slot>
</main>

<footer>
  <p>Copyright 2022 Daphne Zwuup</p>
</footer>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }
  
  :global(body) {
    font-family: Helvetica, sans-serif;
    color: #fff;
  }

  :global(::selection) {
    color: #fff;
    background-color: #3a457f;
  }
</style>