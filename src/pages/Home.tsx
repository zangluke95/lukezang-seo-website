import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { projects } from '../data/projects';

export default function Home() {
  const recentPosts = posts.slice(0, 3);
  const featuredProjects = projects.slice(0, 2);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">Student Innovator. AI Builder. Researcher.</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Hi, I'm Luke Zang
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            I write deep-dive tutorials on Machine Learning, analyze college admission systems, and publish architectural case studies of my software projects.
          </p>
          <div className="flex justify-center flex-col sm:flex-row gap-4">
            <Link to="/blog" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
              Read Latest Articles
            </Link>
            <Link to="/projects" className="px-8 py-3 bg-slate-100 text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Publisher Focus: Latest Articles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Recent Articles</h2>
            <p className="text-slate-600">Technical insights, tutorials, and deep-dives.</p>
          </div>
          <Link to="/blog" className="text-blue-600 font-medium hover:underline hidden sm:block">View all articles &rarr;</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group block bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-center text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <span className="text-blue-600 font-medium text-sm flex items-center">
                  Read article <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform border-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
          <Link to="/blog" className="text-blue-600 font-medium hover:underline">View all articles &rarr;</Link>
        </div>
      </section>

      {/* Case Studies Section (Replacing generic grid) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Technical Case Studies</h2>
            <p className="text-slate-600">Deep architectural breakdowns of platforms I've built.</p>
          </div>
          
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white border text-left border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow">
                <div className="p-8 md:w-3/4 flex flex-col justify-center">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">{project.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Link to={`/projects/${project.id}`} className="text-blue-600 font-medium hover:underline inline-flex items-center w-fit">
                    Read the Engineering Case Study &rarr;
                  </Link>
                </div>
                <div className="bg-slate-100 p-8 md:w-1/4 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-center">
                  <h4 className="font-bold text-slate-900 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
             <Link to="/projects" className="inline-block px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-100 transition-colors">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
