// fetch-level-1_1

// - Nutze den Endpunkt /list der [Picsum API](https://picsum.photos/v2/list) und lass dir die Liste der Bilder in der Console ausgeben.
// // - Fange mögliche Fehler beim Aufruf der API ab und zeige sie in der Konsole an

// type Photo = {
//   id: number;
//   author: string;
//   width: number;
//   height: number;
//   url: string;
// };

// fetch("https://picsum.photos/v2/list")
//   .then((response: Response) => {
//     if (!response.ok) {
//       console.log("Response was not ok");
//     }
//     return response.json();
//   })
//   .then((photos: Photo[]) => {
//     if (!photos || !photos.length) {
//       throw new Error("No photos available");
//     }
//     photos.forEach((photo: Photo) => {
//       console.log(photo);
//     });
//   })

//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Done with fetching photos.");
//   });

//   fetch-level-1_2

// hole dort mit fetch die Kommentare zum post1 unter

type Kommentar = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const commentsUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";

fetch(commentsUrl)
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((comments: Kommentar[]) => {
    comments.forEach((comment: Kommentar) => {
      console.log(comment.email);
    });
  })
  .catch((error: Error) => {
    console.error("There was a problem with your fetch operation:", error);
  });

// - Hole in einem neuen fetch alle Posts ab https://jsonplaceholder.typicode.com/posts
// und verarbeite sie weiter
// - gib alle Posts auf der Konsole aus
// - finde die höchste Post-Id und gib sie auf der Konsole aus
// - finde den kürzesten Titel gib ihn auf der Konsole aus
// - finde den längsten Body und gib ihn auf der Konsole aus

const postsUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(postsUrl)
  .then((response: Response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })

  // - gib alle Posts auf der Konsole aus
  .then((posts: Post[]) => {
    console.log("All Posts:", posts);

    if (!posts || !posts.length) {
      throw new Error("No posts available");
    }

    // - finde die höchste Post-Id und gib sie auf der Konsole aus

    let highestPostId = 0;
    posts.forEach((post) => {
      if (post.id > highestPostId) {
        highestPostId = post.id;
      }
    });
    console.log("Highest Post ID:", highestPostId);

    // - finde den kürzesten Titel gib ihn auf der Konsole aus

    let shortestTitle = posts[0].title;
    posts.forEach((post) => {
      if (post.title.length < shortestTitle.length) {
        shortestTitle = post.title;
      }
    });

    console.log("Shortest Title:", shortestTitle);

    // - finde den längsten Body und gib ihn auf der Konsole aus

    let longestBody = posts[0].body;

    posts.forEach((post) => {
      if (post.body.length > longestBody.length) {
        longestBody = post.body;
      }
    });

    console.log("Longest Body:", longestBody);
  })

  .catch((error: Error) => {
    console.error("There was a problem with your fetch operation:", error);
  });

//   fetch-level-2_1
