<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("/api/users")
        // const res = await fetch("/api/users")
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
    <p>{name}</p>
    {/each}
