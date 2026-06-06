import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  schemaType?: string;
  schemaData?: Record<string, any>;
  url?: string;
}

export const SEO = ({ title, description, schemaType, schemaData, url }: SEOProps) => {
  const fullTitle = `${title} | Luke Zang`;
  
  const siteUrl = 'https://lukezang.com'; // Adjust exactly as needed if you have a defined domain
  const canonicalUrl = url ? `${siteUrl}${url}` : siteUrl;

  const jsonLd = schemaType ? {
    "@context": "https://schema.org",
    "@type": schemaType,
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": "Luke Zang"
    },
    "url": canonicalUrl,
    ...schemaData
  } : null;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
};
