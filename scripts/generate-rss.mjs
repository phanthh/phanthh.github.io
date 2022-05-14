import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Hau Phan',
    site_url: 'https://phanthh.github.io',
    feed_url: 'https://phanthh.github.io/feed.xml'
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://phanthh.github.io/blog/${post.slug}`,
      date: post.publishedAt,
      description: post.summary
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
