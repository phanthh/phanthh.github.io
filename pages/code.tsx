import { useState } from 'react';

import Container from 'components/Container';
import CodePost from 'components/CodePost';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'lib/utils';
import { allCodes } from '.contentlayer/generated';

export default function Code({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredCodePosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container
      title="Code – Hau Phan"
      description="Some of projects/snippet of code that I have accumulated over the years."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Code
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Moi! These are some of my projects/code snippets that I work on and
          off over the years. Most of them are just hobby project that I did in
          my freetime. Feel free to explore!
        </p>
        <div className="relative w-full mb-8">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!filteredCodePosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredCodePosts.map((post) => (
          <CodePost key={post.title} {...post} />
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allCodes
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );

  return { props: { posts } };
}
