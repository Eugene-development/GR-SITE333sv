<script context="module">

    import axios from "axios";

    // const axios = require('axios')

    /** @type {import('@sveltejs/kit').Load} */
    export async function load({ params, fetch, session, stuff }) {
        // const url = `https://jsonplaceholder.typicode.com/users`;
        const url = `get-all-category/`;

        const confReq =  {
            baseURL: import.meta.env.VITE_API_CRUD,
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
            }
        }

        try {
        const res = await axios.get(url, confReq);

            return {
                props: {
                    users: await res.data.data
                }
            };

        } catch (error) {
            console.error(error);
        }
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

