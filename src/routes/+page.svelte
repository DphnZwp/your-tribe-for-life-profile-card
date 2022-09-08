<script>
  // import * as prismicH from '@prismicio/helpers';
  export let data;
  console.log(data);
  let flip = false;
</script>

<main>
    <!-- <pre>{JSON.stringify(data.document, null, 2)}</pre> -->
  <section class="business-card" class:flip="{flip}" on:click="{() => flip = !flip}">
    <article class="front">
      <h1>{data.document.title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nisi maiores totam modi. Quidem repellendus ipsa praesentium architecto impedit! Quasi atque earum cupiditate excepturi dolorum mollitia recusandae dicta aspernatur magnam?</p>
    </article>
    
    <article class="back">
      <h2>Kopje 2</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque unde voluptates ut nihil dolorem facilis cupiditate mollitia praesentium. Facere quo saepe minus, non vero rerum dignissimos dolorum fuga laudantium mollitia.</p>
    </article>
  </section>
</main>

<style>
  .business-card.flip .front {
    transform: rotateY(180deg)
  }

  .business-card.flip .back {
    transform: rotateY(0deg)
  }

  .business-card {
    perspective: 600px;
  }

  .front {
    margin: 3em;
    color: white;
    background-color: purple;
    position: absolute;
    transform: rotateX(0deg) rotateY(0deg);
    transform-style: preserve-3d;
    transition: transform 4s cubic-bezier(0.2, 1, 0.3, 1.3);
    backface-visibility: hidden;
  }

  .back {
    margin: 3em;
    color: white;
    background-color: purple;
    position: absolute;
    transform: rotateY(-180deg);
    transform-style: preserve-3d;
    transform-style: preserve-3d;
    transition: transform 4s cubic-bezier(0.2, 1, 0.3, 1.3);
    backface-visibility: hidden;
  }
</style>