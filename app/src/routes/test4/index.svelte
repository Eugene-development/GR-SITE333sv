<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("/api/users")
        const data = await res.json()
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


<pre>{JSON.stringify(data)}</pre>
