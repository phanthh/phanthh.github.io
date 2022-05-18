import Footer from 'components/Footer';
import { domain } from 'lib/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EmailMe from './EmailMe';
import Navbar from './Navbar';

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Hau Phan – Data analyst, Linux enthusiast, Writer.',
    description: `Data scientist, JavaScript enthusiast, and researcher.`,
    image: props.image ? props.image : `${domain}/images/avatar.jpg`,
    type: 'website',
    ...customMeta
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`${domain}${router.asPath}`} />
        <link rel="canonical" href={`${domain}${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hau Phan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        {/* <meta name="twitter:site" content="@leeerob" /> */}
        {/* <meta name="twitter:title" content={meta.title} /> */}
        {/* <meta name="twitter:description" content={meta.description} /> */}
        {/* <meta name="twitter:image" content={meta.image} /> */}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-8"></div>
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center px-8 bg-gray-50 dark:bg-gray-900"
      >
        {children}
        <EmailMe />
        <Footer />
      </main>
    </div>
  );
}
