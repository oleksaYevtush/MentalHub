import Card from '../ui/Card';

export default function TipCard({ title, description, icon }) {
  return (
    <Card className="flex flex-col justify-between h-full">
      <div>
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
