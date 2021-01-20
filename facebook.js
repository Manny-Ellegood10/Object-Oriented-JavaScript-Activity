class Post {
    constructor (name, message, like, comment, share, upload) {
    this.name = name;
    this.message = message;
}

    like () {
    return post.message = `${this.name} liked your post!`;   
}

    comment () {
     return post.message = `${this.name} left a comment on your post!`;   
}

    share () {
      return post.message = `${this.name} shared your post!`;   
}

    upload () {
        return post.message = `${this.name} updated post!`;    
}

}
    
    myPost = new Post("Azeez", "Azeez loves to code");
    console.log(myPost.name + " " + myPost.message);



