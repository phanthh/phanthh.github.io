import { useRef, useState } from 'react';
import SuccessIcon from './SuccessIcon';
import cn from 'classnames';

export default function EmailMe() {
  const [copied, setCopied] = useState(false);
  const inputEl = useRef(null);
  // const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  // const subscriberCount = new Number(data?.count);

  return (
    <div className="border border-blue-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque max-w-2xl mx-auto mb-16">
      <p className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
        Contact me!
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Below are my primary work email address. <br />
        You can also message me on{' '}
        <a
          className="text-gray-500 hover:text-gray-600 transition text-center sm:text-left"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/phanthh/"
        >
          LinkedIn
        </a>{' '}
        and{' '}
        <a
          className="text-gray-500 hover:text-gray-600 transition text-center sm:text-left"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/phanthh1/"
        >
          Facebook
        </a>
        .
      </p>
      <div className="relative my-4">
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="hau.phan@aalto.fi"
          type="email"
          autoComplete="email"
          required
          disabled
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 pr-32"
        />
        <button
          className={cn(
            'transition-all',
            'flex items-center justify-center absolute right-1 top-1 px-4 pt-1 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded',
            copied ? 'w-16' : 'w-24'
          )}
          onClick={() => {
            navigator.clipboard.writeText('hau.phan@aalto.fi');
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 3000);
          }}
        >
          {copied ? (
            <SuccessIcon className="m-0 h-6 w-6" />
          ) : 'Copy'}
        </button>
        <div className="text-gray-700 mt-2 dark:text-gray-500 text-sm ">
          Reply times tend to be 1-2 days (at most).
        </div>
      </div>
    </div>
  );
}
