import Link from 'next/link';

export default function CareerHome() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Career Resources</h1>

      <ul>
        <li>
          <Link href="/career/interview-preparation">Interview Preparation</Link>
        </li>
        <li>
          <Link href="/career/resume-writing">Resume Writing</Link>
        </li>
      </ul>
    </main>
  );
}
