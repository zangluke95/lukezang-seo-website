import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-24 md:pt-32 pb-16 prose prose-slate prose-blue prose-lg">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-8">Last Updated: October 2023</p>
      
      <p>
        At <strong>Luke Zang</strong> ("we", "our", or "us"), we operate the website lukezang.com. 
        This page informs you of our policies regarding the collection, use, and disclosure of personal data 
        when you use our website and the choices you have associated with that data.
      </p>

      <h2>1. Information Collection and Use</h2>
      <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
      <ul>
        <li>
          <strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (e.g., Email address, First name and last name, Cookies and Usage Data when submitting forms).
        </li>
        <li>
          <strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used. This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
        </li>
      </ul>

      <h2>2. Use of Data</h2>
      <p>We use the collected data for various purposes:</p>
      <ul>
        <li>To provide and maintain our site</li>
        <li>To notify you about changes to our site</li>
        <li>To allow you to participate in interactive features when you choose to do so</li>
        <li>To provide customer support</li>
        <li>To gather analysis or valuable information so that we can improve our content</li>
        <li>To monitor the usage of the site</li>
      </ul>

      <h2>3. Google AdSense & Third-Party Advertising</h2>
      <p>
        We use Google AdSense to display ads on some of our pages. Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on their visits to our site and other sites on the Internet.
      </p>
      <p>
        Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
      </p>

      <h2>4. Transfer of Data</h2>
      <p>
        Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
      </p>

      <h2>5. Links to Other Sites</h2>
      <p>
        Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.
      </p>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us via our <Link to="/contact">Contact Page</Link>.
      </p>
    </div>
  );
}
