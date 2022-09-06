<svelte:head>
<title>FDND Squadpagina</title>
</svelte:head>

<script>
  let title = 'Daphne Zwuup'

  const updateTitle = () => {
    title = 'Something different'
  }

  function handleClick() {
		alert('clicked')
	}
</script>

<section class="card" on:click={handleClick}>
  <div class="home-title">
    <h1>{title}</h1>
    <h2>Frontend Developer</h2>
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
    font-family: Helvetica, sans-serif;
  }

  :global(::selection) {
    color: #fff;
    background-color: #443e73;
  }

  .card {
    background-color: #292643;
  }

  h1 {
    font-size: 5rem;
  }
</style>
