export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

export const posts: BlogPost[] = [
  {
    id: 'how-i-earned-36-act-systems-approach',
    title: 'How I Earned a 36 on the ACT: A Systems-Based Engineering Approach',
    excerpt: 'Applying the principles of software testing and algorithm optimization to conquer standardized testing.',
    date: 'March 15, 2024',
    readTime: '12 min read',
    content: `
When approaching the ACT, most students treat it as a test of intelligence or amassed high school knowledge. As a programmer, I realized very early on that this was the wrong framework. Standardized tests are not inherently testing your smarts; they are executing a strict, predictable algorithm to evaluate a very specific set of parameters. 

If the test is an algorithm, then studying for it should be approached like optimizing a piece of software. In this post, I will break down the systems-based approach I used to achieve a perfect 36.

## 1. Unit Testing: Identifying the Failed Edge Cases

In software development, when a massive system fails, you don't rewrite the whole thing. You write unit tests to isolate the exact function that is failing.

My initial practice tests were frustrating. I was scoring around a 32, but my errors felt random. I decided to build a simple spreadsheet to track my exact failure points. 

I stopped recording "I got 5 wrong in Math" and started recording:
- *Failed: Matrix multiplication in timed conditions.*
- *Failed: Comma splice identification.*
- *Failed: Science section data-extrapolation (conflicting viewpoints).*

I realized my core logic wasn't flawed; I was failing on specific edge cases. By isolating these precise "bugs" in my knowledge, my studying became hyper-efficient. I stopped doing full math worksheets and spent two days doing nothing but matrix logic and trigonometry identities until the bug was patched.

## 2. Refactoring for Time Complexity: The Reading Section

The ACT Reading section is notorious not for its difficulty, but for its time constraints (40 questions in 35 minutes). 

My initial algorithm for processing a reading passage was $O(n^2)$:
1. Read the entire passage slowly and carefully.
2. Read a question.
3. Scan the entire passage again to find the answer.
4. Repeat.

This was wildly inefficient. I refactored my approach to a mapping algorithm. 
Instead of reading for deep comprehension, I skimmed the passage in exactly 2.5 minutes, acting purely as a parser. I wasn't trying to understand the emotional depth of the narrative; I was building an internal index map: "Paragraph 1 = Introduction of concept X, Paragraph 2 = Counter-argument, Paragraph 3 = Result."

When a question asked about the counter-argument, I didn't need to re-read the text. My mental hash-map instantly pointed me to a localized search in Paragraph 2. This reduced my processing time per question from 45 seconds to 20 seconds.

## 3. The Science Section is Just Data Parsing

The Science section is the most misunderstood part of the ACT. It requires almost zero actual scientific knowledge. It is entirely a test of your ability to parse structured data (graphs, tables) rapidly.

I realized that the textual paragraphs in the Science section were often "bloatware"—information designed to slow down the CPU (your brain). I began skipping the text entirely and going straight to the graphs. 

I looked at the axes (what variables are we tracking?) and the trends (is the line going up or down?). 90% of the questions simply asked me to extrapolate a data point. By ignoring the extraneous text, I consistently finished the Science section with 5 minutes to spare.

## 4. Execution Consistency: The Deployment Environment

In software, it's common for code to work perfectly on your local machine but crash in the production environment. The same applies to the ACT. 

Practicing at 9 PM in your comfortable bedroom with your phone playing music is a fundamentally different runtime environment than a freezing cold high school cafeteria at 8 AM on a Saturday.

To ensure my "code" ran in production, I replicated the deployment environment rigorously. I woke up at 7 AM on Saturdays. I sat at a hard desk. I used a blunt #2 pencil. I timed myself strictly, allowing zero pauses. I trained my brain to execute the test algorithm under stress, minimizing the chance of an unexpected runtime error on test day.

## Conclusion

A perfect score on the ACT isn't about being a genius. It's about respecting the constraints of the system. Map the rules, isolate your failure points meticulously, refactor your timing strategies, and simulate the production environment. Treat your brain like an engine, and tune it accordingly.`
  },
  {
    id: 'beginner-cybersecurity-roadmap',
    title: "A Beginner's Cybersecurity Roadmap for High School Students",
    excerpt: 'How to transition from playing video games to understanding network protocols, Linux fundamentals, and ethical hacking.',
    date: 'April 02, 2024',
    readTime: '9 min read',
    content: `
When high school students ask me how to get into cybersecurity, they usually envision the movies: a dark room, green terminals, and furiously typing on a keyboard to "hack into the mainframe." 

The reality is much slower, much more analytical, and incredibly rewarding. Cybersecurity is fundamentally about understanding how systems work on such a deep level that you can manipulate them into doing things they weren't designed to do. 

Here is the exact, step-by-step roadmap I recommend for any student wanting to start their journey into Information Security (InfoSec).

## Phase 1: The Foundations (You Can't Hack What You Don't Understand)

The biggest mistake beginners make is jumping straight into hacking tools like Kali Linux or Metasploit without understanding the underlying technology. If you run an exploit script and it fails, you won't know *why* it failed unless you understand the network layer.

**1. Learn Basic Networking (The Post Office)**
You need to understand how computers talk to each other. Learn the OSI Model. Understand the difference between a MAC address (your house's physical location) and an IP address (your mailing address). Learn what ports are (the specific doors into the house) and protocols like TCP, UDP, HTTP, and DNS.
*Resource: Professor Messer's Network+ videos on YouTube (Free).*

**2. Live in the Command Line (Linux)**
Most of the servers running the internet run on Linux. Most security tools are built for Linux. If you want to be in cybersecurity, you must let go of graphical user interfaces (GUIs). 
Set up a Virtual Machine using VirtualBox and install Ubuntu. Learn how to navigate directories (\`cd\`, \`ls\`), manipulate files (\`grep\`, \`cat\`, \`chmod\`), and manage processes using only the terminal.
*Resource: OverTheWire - Bandit Wargames. This is a brilliant, game-like way to learn Linux.*

## Phase 2: Introduction to Web Vulnerabilities

Once you understand networks and basic Linux, start with Web Application Security. Why web? Because HTTP is everywhere, and the concepts are highly visual and intuitive to grasp.

Learn the OWASP Top 10 (The 10 most critical web application security risks). 
Focus deeply on understanding:
- **SQL Injection (SQLi):** How manipulating a form input can let you dump an entire database.
- **Cross-Site Scripting (XSS):** How injecting JavaScript can steal user cookies or deface a website.
- **Insecure Direct Object References (IDOR):** Changing an ID in a URL (e.g., \`user_id=5\` to \`user_id=6\`) to access someone else's private data.

*Resource: PortSwigger Web Security Academy (Created by the makers of Burp Suite. It is entirely free and the gold standard for web learning).*

## Phase 3: Applied Hacking and CTFs

Now it's time to actually start breaking things—legally.

Capture The Flag (CTF) challenges are gamified hacking isolated in secure environments. You are given a target machine and must exploit it to find a hidden text file (the flag).

Start playing on platforms like:
1. **TryHackMe:** The absolute best place for beginners. Their "Complete Beginner" path holds your hand through deploying machines and running introductory exploits, explaining the theory behind every step.
2. **HackTheBox:** Significantly harder, providing active machines with zero guidance. Save this for when you feel confident.

## Phase 4: Learn to Code (Python & Bash)

You do not need to be an elite software engineer to be a hacker, but you *must* know how to write scripts. 

When you find an exploit, you don't want to type it out manually 500 times. You want to write a script that does it for you. 
- **Bash:** For automating basic terminal tasks.
- **Python:** For writing customized network scripts, parsing large datasets, or interacting with web APIs.

## Conclusion: The Hacker Mindset

The most important skill isn't a programming language or an exploit—it's the mindset of relentless curiosity. When you use a website, stop asking "What does this button do?" and start asking, "What happens if I intercept the request this button sends, change the negative value to a positive value, and send it directly to the server?" 

That is the essence of cybersecurity. Keep learning, stay ethical, and never stop questioning how the systems around you are built.`
  },
  {
    id: 'understanding-neural-networks-high-school',
    title: 'Demystifying Neural Networks: A High Schooler\'s Deep Dive',
    excerpt: 'Breaking down the complexities of machine learning models, from basic perceptrons to modern transformer architectures.',
    date: 'February 12, 2024',
    readTime: '8 min read',
    content: `
At first glance, the term "Neural Network" sounds like science fiction—a synthetic brain capable of outsmarting its creators. But as a high school senior diving deeply into the mechanics of Artificial Intelligence, I've realized that the reality is grounded much more in mathematics than magic. In this article, I want to demystify how these systems actually work, drawing parallels to concepts we learn in standard calculus and statistics.

## The Biological Inspiration vs. Mathematical Reality

We often hear that neural networks mimic the human brain. While it's true that the architecture of nodes (neurons) and edges (synapses) was biologically inspired, modern Machine Learning (ML) has diverged significantly from neuroscience. 

A single node in a basic Artificial Neural Network (ANN) does something incredibly simple:
1. It takes inputs from other nodes.
2. It multiplies each input by a specific "weight" (signifying its importance).
3. It sums them all up and adds a "bias."
4. It passes the result through an "activation function" to determine if it should "fire."

In mathematical terms, for a set of inputs $x$, weights $w$, bias $b$, and activation function $f$, the output $y$ is simply: \\( y = f(\\sum (w_i \\cdot x_i) + b) \\).

## Layers Give Rise to Complexity

If a single neuron just draws a straight line through data, how do neural networks recognize faces, compose music, or drive cars? The magic happens when we stack them. 

### Input, Hidden, and Output Layers

- **Input Layer:** This is how the network perceives the world. If we are processing a 28x28 pixel grayscale image, we have 784 input neurons—one for each pixel's brightness value.
- **Hidden Layers:** Where the heavy lifting occurs. Early hidden layers might detect simple patterns, like edges or color gradients. Deeper hidden layers combine these features into complex shapes, like eyes or tires.
- **Output Layer:** The final verdict. If the network is classifying images of cats and dogs, the output layer might have two neurons, representing the probability of each category.

## How Networks Actually "Learn": Gradient Descent

You don't explicitly program a neural network to recognize a cat. Instead, you give it thousands of pictures of cats and let it adjust its weights until it gets the answer right. This process relies heavily on a concept called **Gradient Descent**.

Imagine you are blindfolded on a rugged mountain and need to find the lowest valley (representing the lowest margin of error or "loss"). You take a step in the steepest downward direction. You recalculate the slope, and take another step. Eventually, you reach the bottom. 

In calculus, we use partial derivatives to find this slope. The algorithm that calculates these derivatives across all the layers of a network is called **Backpropagation**. Every time the network makes a prediction, it calculates how wrong it was, and backpropagates that error to tweak the weights slightly in the right direction.

## The Shift to Transformers (The Era of Generative AI)

Standard neural networks struggle with sequences—like sentences in a paragraph. For years, we used Recurrent Neural Networks (RNNs) for natural language. But in 2017, a paper titled *"Attention Is All You Need"* revolutionized the field by introducing the **Transformer** architecture.

Transformers, the underlying technology for models like GPT-4 and Gemini, don't read words one by one. They evaluate all words simultaneously using an "Attention Mechanism," determining which words in a sentence are most relevant to each other regardless of their distance. This allows them to understand context far better than their predecessors.

## What's Next?

As I continue my journey into cloud computing and full-stack development, integrating these AI models into practical applications is my primary focus. We are moving from an era of *building* models to an era of *applying* them effectively to solve localized community problems. In my next post, I'll talk about how we can leverage these APIs directly within React applications.
`
  },
  {
    id: 'intersection-music-and-code',
    title: 'The Algorithmic Harmony: Intersections of Music and Code',
    excerpt: 'How studying music theory fundamentally improves your ability to write elegant, structured, and modular software.',
    date: 'January 05, 2024',
    readTime: '6 min read',
    content: `
I have always lived in two seemingly disparate worlds: the strict, logical realm of code, and the emotive, fluid world of music. However, the further I advance in both software engineering and musical performance, the more I realize they are practically identical disciplines. Both require a deep understanding of syntax, structure, repetition, and composition.

## Syntax and Notation

When you strip away the instruments and the compilers, both music and programming are fundamentally languages designed to instruct an executor—whether that executor is a silicon processor or a human musician.

- **Sheet Music is an Algorithm:** A musical score provides exact instructions on execution. It dictates initialization (clef, key signature, tempo), execution loops (repeats, Da Capo), and specific functions (dynamics, articulation).
- **Code is Composition:** A well-crafted codebase has an undeniable rhythm. You declare variables (setting the stage), write functions (creating motifs), and combine them into a larger architecture (the symphony).

## Modular Design and Motifs

In software engineering, we are taught the DRY principle: *Don't Repeat Yourself*. If you find yourself writing the same logic twice, you abstract it into a reusable function or component. 

Classical composers mastered this centuries before computers existed. Consider Beethoven's 5th Symphony. The iconic "dun-dun-dun-dunnn" isn't just a catchy introduction; it's a structural motif—a "function." Beethoven takes this 4-note function, passes it different parameters (changing the pitch, scaling the volume, changing instrumentation), and invokes it hundreds of times throughout the piece to build a cohesive structure out of remarkably modular parts.

## Debugging and Practicing

The process of learning a difficult piece of music on the piano is virtually identical to debugging a complex system. 

When a pianist struggles with a difficult run of notes, they do not just continually play the entire song from beginning to end hoping it gets better. They isolate the specific measure where the error occurs. They slow down the tempo (stepping through the code). They practice the left hand and the right hand separately (unit testing components in isolation). Only when the individual function runs flawlessly do they integrate it back into the main program.

## Performance and Execution Optimization

In both fields, writing something that "just works" is rarely the final step.
- In coding, we optimize for Time Complexity ($O(n)$) and Memory Usage, refactoring our algorithms to run more efficiently.
- In music, we optimize our fingering patterns and breathing techniques so we can perform physically demanding passages with the least amount of wasted energy.

## The Takeaway

Engaging deeply with music doesn't just make you a better artist; it fundamentally wires your brain to recognize patterns and optimize structures—skills that translate directly into writing cleaner, more efficient software. If you're a developer hitting a wall creatively, step away from the IDE and try picking up an instrument. You might just find the architectural breakthrough you were looking for.
`
  },
  {
    id: 'building-react-portfolio-vite',
    title: 'Building a Lightning Fast Portfolio with React & Vite',
    excerpt: 'A technical breakdown of deploying high-performance static sites, optimizing for Core Web Vitals, and preparing for Google AdSense.',
    date: 'December 20, 2023',
    readTime: '10 min read',
    content: `
When it comes to building a personal portfolio, developers have a paradox of choice. Do you use a heavy framework like Next.js? A static generator like Astro? Or stick to vanilla HTML/JS? For my portfolio, I chose the sweet spot: **React paired with Vite**, styled utilizing **Tailwind CSS**. 

In this article, I'll break down why this stack is ideal for performance, how to structure the project, and crucial steps to ensure your site is eligible for monetization platforms like Google AdSense.

## Why Vite Over Create React App?

For years, \`npx create-react-app\` (CRA) was the standard. But CRA relied on Webpack, a bundler that had to crawl and compile your *entire* application before it could serve it locally. As projects grew, startup times crawled from seconds to minutes.

Vite changes the game entirely by leveraging native ES modules in the browser. 

1. **Near-Instant Cold Starts:** Vite doesn't bundle your app in development. It lets the browser take over the job of module resolution, only compiling the exact files you are viewing at any given moment using *esbuild* (which is written in Go and is incredibly fast).
2. **Lightning Fast HMR:** Hot Module Replacement (HMR) in Vite remains consistently fast regardless of app size, because it only invalidates the exact module you edited.

## Structuring the Portfolio for Scalability

A clean subdirectory structure is essential for long-term maintainability. Here is the structure I enforce:

\`\`\`text
/src
  /components     # Reusable UI elements (Header, Footer, Cards)
  /pages          # Top-level route components (Home, Blog, Contact)
  /data           # Static data stores (like this blog JSON feed)
  App.tsx         # Main entry point and Router configuration
  main.tsx        # React DOM mounting
\`\`\`

By separating \`/pages\` from \`/components\`, the router logic in \`App.tsx\` stays incredibly clean:

\`\`\`tsx
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
\`\`\`

## Styling with Tailwind CSS

Tailwind shifts the paradigm from semantic class names (\`class="my-button"\`) to utility classes (\`class="px-4 py-2 bg-blue-500 rounded"\`). While it looks messy initially, it results in fewer CSS files, zero context-switching, and smaller production file sizes because Tailwind purges any unused classes during the build process.

## Optimizing for Google AdSense

Getting approved for Google AdSense is surprisingly rigorous. The dreaded "Low Value Content" or "Thin Content" error is the most common hurdle for developers building portfolios. Google's crawler evaluates your site not just on code, but on consumer value.

Here is the checklist to ensure your site gets approved:

1. **Volume of Content:** A simple "About Me" and "Projects" page is insufficient. You need an active Blog or Articles section. I aim for at least 15-20 original articles, with each exceeding 600 words of high-quality, non-plagiarized text.
2. **Clear Navigation:** AdSense requires an intuitive structure. Your Header must have clear links to your content.
3. **The \`ads.txt\` file:** You must include a valid \`ads.txt\` file at the root of your public directory. This file publicly states that Google is an authorized seller of your ad inventory. 
4. **Performance:** Google penalizes slow sites. By using Vite and purging our CSS, we ensure our Core Web Vitals (Largest Contentful Paint, First Input Delay, Cumulative Layout Shift) stay solidly in the green.

## Conclusion

Building a portfolio shouldn't just be an exercise in displaying your resume—it should be a demonstration of your technical abilities. By focusing on performance, modularity, and rich content, you create a platform that doesn't just show off your skills, but actively generates value (and potentially revenue) through platforms like AdSense.
`
  }
];
