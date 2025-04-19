import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <p>This is the blog page of our Next.js application.</p>
      <p><Link href="/blog/post-1">first blog</Link></p>
      <p><Link href="/blog/post-2">second blog</Link></p>
    </main>
  );
}