class Post {
    constructor (userName, message, retweet, love, reply, upload) {
    this.userName = userName;
    this.message = message;
}

    retweet () {
    return post.message = `${this.userName} retweeted your post!`;   
}

    love () {
     return post.message = `${this.userName} loved your post!`;   
}

    reply () {
      return post.message = `${this.userName} replied to your post!`;   
}

    upload () {
        return post.message = `${this.userName} uploaded a picture!`;    
}

}
    
    myPost = new Post("Azeez", "Azeez loves to code");
    console.log(`${myPost.userName} ${myPost.message}`);