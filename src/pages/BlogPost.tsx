import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { posts } from '../data/posts';
import { SEO } from '../components/SEO';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 min-h-[80vh]">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        schemaType="BlogPosting"
        schemaData={{
          datePublished: new Date(post.date).toISOString()
        }}
        url={`/blog/${post.id}`}
      />
      <Link to="/blog" className="text-blue-600 font-medium hover:underline mb-8 inline-block">
        &larr; Back to all articles
      </Link>
      
      <header className="mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 capitalize">
          {post.title}
        </h1>
        <div className="flex gap-4 items-center text-slate-500">
          <time dateTime="2023-10-12">{post.date}</time>
          <span>&bull;</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="max-w-none text-slate-700">
        <Markdown
          components={{
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4" {...props} />,
            p: ({node, ...props}) => <p className="text-slate-700 mb-6 leading-relaxed text-lg" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-8 text-lg" {...props} />,
            li: ({node, ...props}) => <li className="text-slate-700" {...props} />,
            a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />,
            code: ({node, ...props}) => <code className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm font-mono" {...props} />,
            pre: ({node, ...props}) => <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mb-8 text-sm" {...props} />
          }}
        >
          {post.content}
        </Markdown>

        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mt-14">
          <h3 className="text-lg font-bold text-slate-900 mb-2">Advertisement Space</h3>
          <p className="text-slate-500 text-sm">Once Google AdSense is fully approved, contextual auto-ads will appear in spaces like these.</p>
        </div>
      </div>
    </article>
  );
}
