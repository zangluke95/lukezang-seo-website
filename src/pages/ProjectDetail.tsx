import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { projects } from '../data/projects';
import { SEO } from '../components/SEO';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline">Return to Case Studies</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 min-h-[80vh]">
      <SEO 
        title={project.title} 
        description={project.description}
        schemaType="Article"
        schemaData={{
          keywords: project.tags.join(", ")
        }}
        url={`/projects/${project.id}`}
      />
      <Link to="/projects" className="text-blue-600 font-medium hover:underline mb-8 inline-block">
        &larr; Back to Case Studies
      </Link>
      
      <header className="mb-12 border-b border-slate-200 pb-10">
        <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4 block">{project.category}</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          {project.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-200">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-none text-slate-700">
        <Markdown
          components={{
            h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6 pb-2 border-b border-slate-100" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4" {...props} />,
            p: ({node, ...props}) => <p className="text-slate-700 mb-6 leading-relaxed text-lg" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-3 text-slate-700 mb-8 text-lg" {...props} />,
            li: ({node, ...props}) => <li className="text-slate-700" {...props} />,
            a: ({node, ...props}) => <a className="text-blue-600 hover:underline font-medium" {...props} />,
            code: ({node, ...props}) => <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200" {...props} />,
            pre: ({node, ...props}) => <pre className="bg-slate-900 text-slate-50 p-6 rounded-xl overflow-x-auto mb-8 text-sm shadow-inner" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 my-6 bg-slate-50 py-2 pr-4 rounded-r-lg" {...props} />
          }}
        >
          {project.content}
        </Markdown>

        <div className="bg-slate-50 p-8 rounded-xl border border-slate-200 mt-16 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Interested in this architecture?</h3>
          <p className="text-slate-600 mb-6">If you need similar technical solutions or want to discuss this implementation, feel free to reach out.</p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>
    </article>
  );
}
