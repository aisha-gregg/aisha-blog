import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import marked from "marked";
import { useParams } from "react-router-dom";

export function Post() {
  const [post, setPost] = useState("");
  const { id } = useParams();

  // https://en.wikipedia.org/wiki/Immediately_invoked_function_expression
  useEffect(() => {
    (async () => {
      const value = await import(`../../posts/${id}.md`);
      const response = await fetch(value.default);
      const post = await response.text();
      setPost(marked(post));
    })();
  }, [id]);

  return <div dangerouslySetInnerHTML={{ __html: post }}></div>;
}
