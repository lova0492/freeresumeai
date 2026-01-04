export default function AdSlot({ slot }: { slot: string }) {
  return (
    <div style={{ margin: '30px 0', textAlign: 'center' }}>
      <small>Ad Slot: {slot}</small>
    </div>
  );
}
