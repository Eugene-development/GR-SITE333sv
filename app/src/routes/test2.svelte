<script context="module">
    export async function load({fetch}) {
        const id = 1;
        // const id = page.params.id;
        const url = `https://jsonplaceholder.typicode.com/users`;
        const res = await fetch(url);
        const post = await res.json();
        console.log(post)
        return {props: {post}}
    }
</script>

<script>
    export let post;
</script>

{#each post as {name}, i }
    <h2 >{name}</h2>
{/each}
