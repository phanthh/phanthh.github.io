import { useMDXComponent } from 'next-contentlayer/hooks';
import components from 'components/MDXComponents';
import CodeLayout from 'layouts/code';
import { allCodes } from 'contentlayer/generated';
import type { Code } from 'contentlayer/generated';

export default function Post({ post }: { post: Code }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <CodeLayout post={post}>
      <Component components={components as any} />
    </CodeLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allCodes.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allCodes.find((post) => post.slug === params.slug);
  return { props: { post } };
}
