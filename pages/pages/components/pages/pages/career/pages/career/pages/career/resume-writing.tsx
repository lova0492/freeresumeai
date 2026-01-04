import AdSlot from '@/components/AdSlot';

export default function ResumeWriting() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Resume Writing</h1>
      <p>Create ATS-friendly resumes.</p>

      <AdSlot slot="resume-top" />

      <ul>
        <li>Resume formats</li>
        <li>Keywords optimization</li>
        <li>Examples & templates</li>
      </ul>

      <AdSlot slot="resume-bottom" />
    </main>
  );
}
