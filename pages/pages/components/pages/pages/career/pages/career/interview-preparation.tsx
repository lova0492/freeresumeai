import AdSlot from '@/components/AdSlot';

export default function InterviewPreparation() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Interview Preparation</h1>
      <p>Step-by-step interview preparation guide.</p>

      <AdSlot slot="interview-top" />

      <ul>
        <li>HR interview tips</li>
        <li>Technical rounds</li>
        <li>Behavioral questions</li>
      </ul>

      <AdSlot slot="interview-bottom" />
    </main>
  );
}
