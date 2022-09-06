<svelte:head>
<title>FDND Squadpagina</title>
</svelte:head>

<script>
  let title = 'Daphne Zwuup'

  const updateTitle = () => {
    title = 'Something different'
  }

  function handleClick() {
    console.log('click')
	}
</script>

<article class="card" on:click={handleClick}>
  <section class="hero">
    <h1>{title}</h1>
    <h2>Frontend Developer</h2>
  </section>

  <section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae 
      dolorum impedit in magnam unde velit recusandae quas, modi consequatur? 
      Ipsam soluta voluptates, ullam cum rem sequi ducimus minus odit neque.</p>
  </section>

  <section class="button-title">
    <h2>Change title with button</h2>
    <button on:click={updateTitle}>Change title</button>
  </section>

  <section class="input-title">
    <h2>Change title with input</h2>
    <input type="text" bind:value={title}>
  </section>

  <a href="/back">Achterkant</a>
</article>

<style>
  .card {
    background-color: #292643;
  }

  h1 {
    font-size: 5rem;
  }

  a {
    color: #fff;
  }
</style>
