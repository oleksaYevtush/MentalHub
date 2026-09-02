import Card from "../ui/Card";

export default function StatCard({ number, label }) {
  return (
    <Card className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">{number}</div>
      <div className="text-muted text-sm">{label}</div>
    </Card>
  );
}
