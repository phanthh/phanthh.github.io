import Link from 'next/link';

// import NowPlaying from 'components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 grid-cols-2 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/blogs">
            <a className="text-gray-500 hover:text-gray-600 transition">Blog</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://www.linkedin.com/in/phanthh/">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://github.com/phanthh">GitHub</ExternalLink>
          <ExternalLink href="https://www.facebook.com/phanthh1/">
            Facebook
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Uses</a>
          </Link>
          <Link href="/tba">
            <a className="text-gray-500 hover:text-gray-600 transition">TBA</a>
          </Link>
          <Link href="/tba">
            <a className="text-gray-500 hover:text-gray-600 transition">TBA</a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <p className="text-gray-500">
          Inspired by{' '}
          <Link href="https://leerob.io/">
            <a className="text-gray-500 hover:text-gray-600 transition underline">
              leerob.io
            </a>
          </Link>
        </p>
      </div>
    </footer>
  );
}
