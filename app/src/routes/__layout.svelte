<script>
  import Header from "$lib/header/Header.svelte";
  import Footer from "$lib/footer/Footer.svelte";
  import "../app.css";
</script>

<Header>
  <main>
    <slot />
  </main>
</Header>

  <slot />

<Footer/>
