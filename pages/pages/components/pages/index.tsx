import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>ResumeAI</h1>
      <p>AI-powered resume, career & interview preparation platform.</p>

      <AdSlot slot="home-top" />

      <ul>
        <li>
          <Link href="/career">Career Guides</Link>
        </li>
        <li>
          <Link href="/career/interview-preparation">Interview Preparation</Link>
        </li>
        <li>
          <Link href="/career/resume-writing">Resume Writing</Link>
        </li>
      </ul>

      <AdSlot slot="home-bottom" />
    </main>
  );
}
