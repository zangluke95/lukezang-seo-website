import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEO } from '../components/SEO';

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 min-h-[80vh]">
      <SEO 
        title="Blog & Articles" 
        description="Thoughts on artificial intelligence, software engineering, and navigating high school as a tech enthusiast."
        schemaType="Blog"
        url="/blog"
      />
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Articles & Insights</h1>
      <p className="text-lg text-slate-600 mb-12 border-b border-slate-200 pb-8">
        Thoughts on artificial intelligence, software engineering, and navigating high school as a tech enthusiast.
      </p>

      <div className="space-y-12">
        {posts.map(post => (
          <article key={post.id} className="group">
            <Link to={`/blog/${post.id}`}>
              <div className="flex gap-4 items-baseline mb-2">
                <time className="text-sm font-medium text-slate-500">{post.date}</time>
                <span className="text-sm text-slate-400">&bull;</span>
                <span className="text-sm text-slate-500">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>
              <div className="mt-4 text-blue-600 font-medium group-hover:translate-x-1 inline-block transition-transform duration-200">
                Read full article &rarr;
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
