const posts = [
    {
        title : "Post 1",
        description : "This ia a post 1"
    },
    {
        title : "Post 2",
        description : "This is a post 2"
    }
];
function getposts(){
    setTimeout(function(){
        posts.forEach(function(value){
            console.log(value.title)
        })
    }, 1000)
}
function createpost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}
createpost({
    title : "Post 3",
    description : "This is a post 3"
}, getposts);