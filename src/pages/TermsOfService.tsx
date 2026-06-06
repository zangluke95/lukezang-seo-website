import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 md:pt-32 pb-16 prose prose-slate prose-lg">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Terms of Service</h1>
      <p className="text-slate-500 text-sm mb-8">Last Updated: October 2023</p>

      <p>
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the lukezang.com website (the "Service") operated by Luke Zang ("us", "we", or "our").
      </p>

      <h2>1. Agreement to Terms</h2>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The Service and its original content (including articles, tutorials, guides, and documentation), features, and functionality are and will remain the exclusive property of Luke Zang and his licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.
      </p>

      <h2>3. Links To Other Web Sites</h2>
      <p>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by Luke Zang. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
      </p>
      <p>
        You further acknowledge and agree that Luke Zang shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>

      <h2>4. User Generated Content & Conduct</h2>
      <p>
        When you use forms, comments, or interactive features of the site, you agree not to submit material that is illegal, defamatory, abusive, or otherwise harmful. We reserve the right to remove any content at our sole discretion.
      </p>

      <h2>5. Disclaimer of Warranties</h2>
      <p>
        All content provided on this site is for informational and educational purposes only. The owner of this blog makes no representations as to the accuracy or completeness of any information on this site or found by following any link on this site.
      </p>
      <p>
        The owner will not be liable for any errors or omissions in this information nor for the availability of this information. The owner will not be liable for any losses, injuries, or damages from the display or use of this information.
      </p>

      <h2>6. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
      </p>

      <h2>7. Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
      </p>

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us via our <Link to="/contact">Contact Page</Link>.
      </p>
    </div>
  );
}
