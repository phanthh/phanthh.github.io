import Image from 'components/Image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import EmailMe from 'components/EmailMe';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto mb-8 w-full max-w-2xl">
        <div className="flex flex-col-reverse sm:flex-row items-start w-full">
          <div className="flex flex-col w-full sm:pr-8 sm:w-auto">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white text-center sm:text-left">
              Hau Phan
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4 text-center sm:text-left">
              Data science undergrads at{' '}
              <a
                href="https://www.aalto.fi/en"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
              >
                Aalto University
              </a>{' '}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16 text-center sm:text-left">
              React/Next.js, Linux, AI/ML and Mathematics.
            </p>
          </div>
          <div className="mx-auto w-[45%] sm:w-[176px] relative mb-8 sm:mb-0">
            <Image
              alt="Hau Phan"
              src="/images/avatar.jpg"
              width={176}
              height={176}
              className="rounded-full filter grayscale w-full h-auto"
            />
          </div>
        </div>
        {/*
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Work in progress ..."
            slug="wip"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Work in progress ..."
            slug="wip"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Work in progress ..."
            slug="wip"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
        */}
        <Link href="/blogs">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Read my blog
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  );
}
