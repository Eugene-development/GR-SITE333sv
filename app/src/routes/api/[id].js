export const get = async ({ params }) => {

    const {id} = params;

    const url = `https://adminexpo.com:7751/get-category/`;
    const headers = {
        Authorization: `Bearer 2`
    }
    const res = await fetch(url + id, {
        headers,
    });
    const post = await res.json();

    return {
        body: {
            post
        }
    }
}
