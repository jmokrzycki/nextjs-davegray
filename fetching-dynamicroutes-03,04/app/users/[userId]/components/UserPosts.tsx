type Props = {
  promise: Promise<Post[]>;
};

import React from "react";

export default async function UserPosts({ promise }: Props) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await promise;

  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </article>
    );
  });

  return content;
}
