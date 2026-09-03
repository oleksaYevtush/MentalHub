import { useState } from 'react';
import Card from '../ui/Card';
import EmojiScale from './EmojiScale';
import Button from '../ui/Button';
import useMoodStore from '../../store/useMoodStore';
import { useLanguage } from '../../context/LanguageContext';

export default function MoodCheckIn() {
  const { t } = useLanguage();
  const [mood, setMood] = useState(null);
  const [note, setNote] = useState('');
  const { addEntry } = useMoodStore();

  const handleSave = () => {
    if (!mood) return;
    addEntry({ mood, note, date: new Date().toISOString() });
    setMood(null);
    setNote('');
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold text-default mb-4">{t('tracker.title')}</h2>
      <EmojiScale selected={mood} onSelect={setMood} />
      <textarea
        className="mt-4 w-full border border-default rounded-xl p-3 text-sm text-default bg-surface resize-none placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors duration-200"
        rows={2}
        placeholder={t('tracker.placeholder')}
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <Button onClick={handleSave} className="mt-3 w-full" disabled={!mood}>
        {t('tracker.save')}
      </Button>
    </Card>
  );
}
