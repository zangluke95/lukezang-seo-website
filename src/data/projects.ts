export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  resultsSummary: string;
  tags: string[];
  content: string;
}

export const projects: Project[] = [
  {
    id: 'ai-business-analyzer',
    category: 'Artificial Intelligence',
    title: 'AI Business Analyzer: Architecture, Prompt Design & Full Stack Integration',
    description: 'A deep dive into building an automated business analysis tool utilizing large language models to dissect marketing strategies and generate actionable insights.',
    resultsSummary: 'Analyzed 50+ local businesses, generating automated technical SEO and marketing reports that led to a 300% increase in outreach response rates.',
    tags: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'Prompt Engineering'],
    content: `
## The Problem: Scaling Business Outreach

When running a local agency or offering consulting services as a high school student, establishing credibility is the hardest part. You are competing against established professionals. Standard cold-email outreach ("Hi, I can build your website") yields conversion rates of less than 1%. 

I realized that to get attention, I needed to provide **upfront, personalized value** before ever asking for a meeting. But manually researching a business, analyzing their web presence, auditing their SEO, and writing a comprehensive report took 2-3 hours per prospect. 

I needed a way to scale this.

## The Solution: AI Business Analyzer

The AI Business Analyzer is a full-stack web application designed to automate the initial audit process. By simply inputting a company's URL, the tool:
1. Scrapes the target website for public text and metadata.
2. Formats and sanitizes the data.
3. Injects the data into a finely-tuned LLM prompt.
4. Generates a structured PDF report highlighting precise vulnerabilities and actionable fixes.

### System Architecture

The architecture was split into a reliable, fast frontend and a secure Node.js backend.

- **Frontend:** Built with React and Vite. It utilizes Tailwind CSS for a modern, dashboard-like aesthetic. React handles the state of the analysis pipeline, showing the user real-time progress indicators (Scraping -> Parsing -> Analyzing -> Generating).
- **Backend:** An Express.js server handles the heavy lifting. It uses \`puppeteer\` (headless Chrome) for JavaScript-rendered site scraping, \`cheerio\` for HTML parsing, and the \`openai\` SDK for intelligence.

### The Most Crucial Component: Prompt Engineering

The difference between a generic, useless AI output and a hyper-valuable business report lies in Prompt Engineering. 

My initial attempts looked like this:
> *"Analyze this website text: {text} and tell me what they are doing wrong."*

The resulting output was generic fluff ("The site should improve its SEO").

After weeks of iterative testing, I designed a **Multi-Shot System Prompt**:

\`\`\`text
You are an elite Digital Marketing & SEO Consultant.
You will be provided with the extracted text grid and metadata of a client's website.

Your task is to identify three specific, technical vulnerabilities that cost the business money.

Constraints:
1. Do not use generic advice (e.g., "Add more keywords"). 
2. Point out specific missing structural tags (H1s, Meta descriptions).
3. Analyze the call-to-action (CTA) clarity based on the extracted text.
4. Output your response strictly in the following JSON schema: { ... }
\`\`\`

By forcing a JSON output, my backend could reliably parse the AI's response and inject it into a beautifully formatted React-PDF template.

## Challenges & Roadblocks

**1. Context Window Limitations**
Initial versions crashed when feeding large websites into the LLM because it exceeded the token limits of early models. I had to implement a chunking algorithm that summarized sub-pages individually before passing a "master summary" to the final analysis prompt.

**2. Anti-Bot Protections**
Many modern sites block basic HTTP scraping. Transitioning to a headless browser (\`puppeteer\`) with rotating user agents solved 90% of the scraping failures, though it increased processing time from 2 seconds to 8 seconds per site.

## Results & Lessons Learned

Deploying this tool transformed my outreach completely. Instead of sending generic emails, I utilized my script to generate 50 highly personalized, 5-page PDF reports for local businesses in an afternoon. 

- **Quantitative Result:** Open rates increased from 15% to 42%. Response rates jumped from <1% to nearly 8% when an AI-generated audit was attached.
- **Qualitative Lesson:** I learned that AI is not a substitute for domain knowledge. The AI could only generate a good report because I spent time learning what actually constitutes good SEO and feeding those strict constraints into the system prompt. Software engineering is increasingly about orchestrating AI to do the heavy lifting of your own expertise.
`
  },
  {
    id: 'cybersecurity-education-platform',
    title: 'Architecting a Cybersecurity Educational Sandbox for High Schools',
    excerpt: 'Building safe, isolated web environments to teach students the fundamentals of SQL injection, XSS, and network security without compromising school infrastructure.',
    resultsSummary: 'Successfully deployed across 2 classrooms, providing hands-on penetration testing experience to over 60 students in a fully sandboxed environment.',
    category: 'Cybersecurity',
    tags: ['Docker', 'Express', 'Security', 'Education'],
    content: `
## The Problem: Theoretical vs. Practical Learning

Cybersecurity is an actively growing field, but high school education often limits it to abstract theory. We are taught *about* SQL injections, but rarely given the opportunity to actually execute one. The reason is obvious: school IT departments rightfully do not want students practicing hacking techniques on active networks.

I wanted to bridge this gap by creating an educational platform that was highly practical, yet perfectly isolated.

## The Solution: A Containerized "Capture The Flag" (CTF) Environment

I architected a web-based educational sandbox where students are provided with intentionally vulnerable web applications. The goal is to safely exploit these vulnerabilities to retrieve a "Flag" (a hidden string of text).

### Technical Stack & Implementation

To ensure absolute safety and repeatability, the entire infrastructure was built using **Docker**.

1. **The Vulnerable Containers:** Each lesson (e.g., an SQL injection module) runs as an isolated Docker container on a remote server. The application is built using an outdated, unpatched version of Node/Express and SQLite.
2. **The Orchestrator:** A central dashboard built in React allows students to click "Start Instance." The backend uses the Docker Engine API to spin up a temporary, isolated instance of the vulnerable app, assigning it a unique, randomized port.
3. **The Sandbox Constraint:** The Docker network bridges are strictly configured so the vulnerable containers cannot communicate with the host machine or the broader internet. They can only return HTTP responses to the student's IP address.

### Designing the Challenges

**Challenge 1: The Broken Login (SQLi)**

I built a simple login form containing a classic vulnerability: concatenating raw user input directly into an SQL query.

\`\`\`javascript
// Intentionally vulnerable code used in the educational module
const username = req.body.username;
const query = "SELECT * FROM users WHERE username = '" + username + "' AND role = 'admin'";
db.execute(query);
\`\`\`

The lesson material guides the student through inputting \`' OR '1'='1\` to bypass the password check and log in as an administrator, revealing the hidden flag.

**Challenge 2: The Malicious Comment (Stored XSS)**

The second module is a message board application that fails to sanitize input. Students learn how to write a script tag (\`<script>alert(document.cookie)</script>\`) that executes when the simulated "admin bot" views the comments page, successfully stealing a session cookie.

## Challenges & Roadblocks

The hardest part was state management and resource cleanup. If 30 students all requested an instance of a vulnerable app, the server would quickly run out of memory. 

I had to implement an automated garbage collection script (a simple Node cron job) that monitored active containers and aggressively shut them down and wiped their volumes after 30 minutes of inactivity. This ensured the server remained stable and reduced cloud computing costs to pennies a day.

## Results & Lessons Learned

Deploying this platform was one of my proudest high school achievements.
- Over 60 students participated in the introductory cybersecurity module using this tool.
- Seeing the "Aha!" moment when a student successfully executes their first payload and understands *why* it works is incredibly rewarding.
- From an engineering perspective, I gained a profound understanding of containerization, network namespaces in Linux, and secure API design. When you have to build applications that are intentionally broken, you learn exactly what is required to build them correctly.
`
  }
];
