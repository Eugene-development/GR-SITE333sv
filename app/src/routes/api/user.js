export const get = async () => {




    const url = `https://jsonplaceholder.typicode.com/posts/1`;
    const res = await fetch(url);
    const post = await res.json();

    // const url = `https://adminexpo.com:7751/get-all-category`;
    // const headers = {
    //     Authorization: `Bearer 2`
    // }
    // const res = await fetch(url, {
    //     headers,
    // });
    // const post = await res.json();
    //

    // const url = `http://webserver:7751/get-all-category/`;
    //
    // const res = await fetch(url);
    // const post = await json.dumps(res)

    // const post = await users.json();

    // const stringified = JSON.stringify(res);
    // const post = JSON.parse(stringified);

    // console.log(post);





    return {
        body: {
            post
        }
    }
}
