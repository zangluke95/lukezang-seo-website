import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { SEO } from '../components/SEO';

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16 min-h-[80vh]">
      <SEO 
        title="Case Studies & Projects" 
        description="Deep dives into the architecture, challenges, and lessons learned from building software."
        schemaType="CollectionPage"
        url="/projects"
      />
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Studies & Projects</h1>
      <p className="text-lg text-slate-600 mb-12 border-b border-slate-200 pb-8">
        Deep dives into the architecture, challenges, and lessons learned from building software. 
        Google AdSense favors comprehensive project breakdowns over thin portfolio grids.
      </p>

      <div className="space-y-16">
        {projects.map(project => (
          <article key={project.id} className="bg-white border text-left border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row hover:shadow-md transition-shadow">
            <div className="md:w-1/3 bg-slate-100 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">{project.category}</span>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-between">
              <div>
                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                  {project.description}
                </p>
                <div className="bg-amber-50 p-4 border-l-4 border-amber-400 mb-6">
                  <p className="text-amber-800 text-sm font-medium">
                    <strong>Results:</strong> {project.resultsSummary}
                  </p>
                </div>
              </div>
              <Link to={`/projects/${project.id}`} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center">
                Read full case study 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
