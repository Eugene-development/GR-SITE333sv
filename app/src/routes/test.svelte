<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ params, fetch, session, stuff }) {
        const url = `https://jsonplaceholder.typicode.com/users`;
        const res = await fetch(url);

        if (res.ok) {
            return {
                props: {
                    users: await res.json()
                }
            };
        }

        return {
            status: res.status,
            error: new Error(`Не могу загрузить ${url}`)
        };
    }
</script>




<script>
    export let users;
</script>


<h1>Фотоальбом</h1>

<div >
    {#each users as user}
        {user.name} <br>
    {:else}
        <!-- этот блок отрисовывается, пока photos.length === 0 -->
        <p>загрузка...</p>
    {/each}
</div>

