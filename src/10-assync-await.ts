//FETCH API
// https://dummyjson.com/posts

const fetchPosts = async () => {
    const response = await fetch('https://dummyjson.com/posts');
    console.log("response: ", response);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    // console.log(data);
    return data.posts;
}

// fetchPosts()


fetchPosts().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})

export default fetchPosts;