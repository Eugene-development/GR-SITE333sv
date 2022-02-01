<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("/api/users")
        const dataX = await res.json()
        const data = dataX.post.data
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


<!--{JSON.stringify(data)}-->
{#each data as {name}}
    <p class="px-2 border text-2xl bg-white w-full m-3">{name}</p>
    {/each}
