import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import marked from "marked";
import { useParams } from "react-router-dom";
import styles from "./post.module.css";
import { DiscussionEmbed } from "disqus-react";

export function Post() {
  const [post, setPost] = useState("");
  const { id } = useParams();
  const disqusConfig = {
    url: "https://aishagregg.disqus.com/",
    identifier: id,
    title: id
  };

  // https://en.wikipedia.org/wiki/Immediately_invoked_function_expression
  useEffect(() => {
    (async () => {
      const value = await import(`../../posts/${id}.md`);
      const response = await fetch(value.default);
      const post = await response.text();
      setPost(marked(post));
    })();
  }, [id]);

  return (
    <>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: post }}
      ></div>
      <DiscussionEmbed config={disqusConfig} shortname="aishagregg" />
    </>
  );
}
