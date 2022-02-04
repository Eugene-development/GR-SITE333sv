export const get = async ({ params }) => {
    const { id } = params;
    const domain = import.meta.env.VITE_API_CRUD;
    const url = `${ domain }/get-category/${ id }`;
    const headers = {
        Authorization: `Bearer ${ import.meta.env.VITE_TOKEN }`
    }
    const res = await fetch(url, { headers });
    const post = await res.json();
    return { body: { post } }
}
