import Image from 'components/Image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
// import Subscribe from 'components/Subscribe';
// import ViewCounter from 'components/ViewCounter';
import type { PropsWithChildren } from 'react';
import type { Code } from 'contentlayer/generated';

const editUrl = (slug) =>
  `https://github.com/phanthh/phanthh.github.io/edit/main/data/code/${slug}.mdx`;

export default function CodeLayout({
  children,
  post
}: PropsWithChildren<{ post: Code }>) {
  return (
    <Container
      title={`${post.title} – Hau Phan`}
      description={post.summary}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Hau Phan"
              height={24}
              width={24}
              src="/images/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Hau Phan / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
            {` • `}
            {post.readingTime.text}
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <div className="text-sm mt-4 text-gray-700 dark:text-gray-300">
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
          {` • `}
        </div>
      </article>
    </Container>
  );
}
