<svelte:head>
<title>FDND Squadpagina</title>
</svelte:head>

<script>
  let title = 'Welcome to SvelteKit'

  const updateTitle = () => {
    title = 'Something different'
  }
</script>

<section class="home">
  <div class="home-title">
    <img src="/favicon.png" alt="">
    <h1>{title}</h1>
  </div>
  <div class="hero-text">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae 
      dolorum impedit in magnam unde velit recusandae quas, modi consequatur? 
      Ipsam soluta voluptates, ullam cum rem sequi ducimus minus odit neque.</p>
  </div>

  <div class="button-title">
    <h2>Change title with button</h2>
    <button on:click={updateTitle}>Change title</button>
  </div>

  <div class="input-title">
    <h2>Change title with input</h2>
    <input type="text" bind:value={title}>
  </div>

  <a href="/about">About my site</a>
</section>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
  }
  
  :global(body) {
      background-color: #8fbbbd;
  }

  :global(::selection) {
    color: #fff;
    background-color: #292351;
  }

  h1 {
    font-size: 5rem;
    text-align: center;
  }

  .home-title {
    margin-bottom: 1em;
    display: flex;
  }

  .button-title {
    margin-top: 1em;
    text-align: center;
  }

  .input-title {
    margin-top: 1em;
    text-align: center;
  }

  .home {
    margin-top: 2em;
    padding: 1em;
    font-family: "Satoshi", sans-serif;
    display: grid;
    place-items: center;
  }

  .hero-text {
    padding: 1em;
    background-color: aliceblue;
    border-radius: 3em;
    width: fit-content;
  }

  p {
    padding: 1em;
    text-align: center;
    max-width: 60em;
  }
</style>
