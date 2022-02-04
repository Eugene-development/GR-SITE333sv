<script context="module">
    export const load = async ({fetch, params}) => {
        const id = params.id;


        // console.log(id)


        const res = await fetch(`/api/${id}`)
        const dataXk = await res.json();

        const data = dataXk.post.data[0]


        return {
            props: {
                data
            }
        }
    }
</script>

<script>
    export let data
</script>

<p>123</p>

{data.name}

<!--{#each data as {id, name}}-->
<!--    <p class="px-2 border text-2xl bg-white w-full m-3">{name}</p>-->
<!--{/each}-->

