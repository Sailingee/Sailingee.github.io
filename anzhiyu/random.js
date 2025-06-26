var posts=["2023/01/01/hello world/","2025/06/26/hello-world/","2025/06/26/golang使用swagger/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };