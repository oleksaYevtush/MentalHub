import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';
import useMoodStore from '../../store/useMoodStore';
import { formatDate } from '../../utils/formatDate';
import { useLanguage } from '../../context/LanguageContext';

export default function MoodChart() {
  const { locale, t } = useLanguage();
  const { entries } = useMoodStore();
  const data = entries.slice(-7).map((e) => ({
    date: formatDate(e.date, locale),
    mood: e.mood,
  }));

  if (data.length === 0) return null;

  return (
    <Card>
      <h2 className="text-lg font-semibold text-default mb-4">{t('tracker.chartTitle')}</h2>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="var(--color-primary)"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
