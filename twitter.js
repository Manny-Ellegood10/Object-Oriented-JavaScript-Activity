class Post {
    constructor (userName, message, retweet, love, reply, upload) {
    this.userName = userName;
    this.message = message;
}

    retweet () {
    return post.message = `${this.name} retweeted your post!`;   
}

    love () {
     return post.message = `${this.name} loved your post!`;   
}

    reply () {
      return post.message = `${this.name} replied to your post!`;   
}

    upload () {
        return post.message = `${this.name} uploaded a picture!`;    
}

}
    
    myPost = new Post("Azeez", "Azeez loves to code");
    console.log(myPost.name + " " + myPost.message);