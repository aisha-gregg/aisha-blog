import React from "react";
import { getPostIds, getPost } from "../../features/posts-repository";
import styles from "./post.module.css";
import { DiscussionEmbed } from "disqus-react";
import { Page } from "../../components/page/Page";

export default function Post({ post, id }) {
  const disqusConfig = {
    url: "https://aishagregg.disqus.com/",
    identifier: id,
    title: id,
  };
  return (
    <Page>
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: post }}
      ></div>
      <DiscussionEmbed config={disqusConfig} shortname="aishagregg" />
    </Page>
  );
}

export function getStaticPaths() {
  const paths = getPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id);
  return {
    props: {
      post,
      id: params.id,
    },
  };
}
