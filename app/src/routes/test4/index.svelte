<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("/api/users")
        const dataXk = await res.json();

        // const p = undefined
        // console.log?.(p)

        // let x;
        // let y = 5;
        // const func = (y) => {
        //     x = 9;
        //     console.log(x + y)
        // };
        // y && func(y);
        // if (y) func(y);


        const data = dataXk.post.data



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
{#each data as {id, name}}
    <p class="px-2 border text-2xl bg-white w-full m-3">{name}</p>
    <a href={`/test4/${id}`}>link</a>
    {/each}
