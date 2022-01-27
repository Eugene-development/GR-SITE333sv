<script context="module">
    export async function load({params, fetch, session, stuff}) {

        const url = `http://localhost:7751/get-all-category/`;
        const headers = {
            Authorization: `Bearer 2`
        }

        const res = await fetch(url, {
            headers,
        });
        const posts = await res.json();
        const category = posts.data
        console.log(category)
        return {props: {category}}
    }
</script>

<script>
    export let category;
</script>

{#each category as {name}, i }
<h2 >{name}</h2>
    {/each}
