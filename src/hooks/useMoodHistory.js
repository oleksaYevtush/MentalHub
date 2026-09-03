import useMoodStore from '../store/useMoodStore';

export function useMoodHistory(days = 7) {
  const { entries } = useMoodStore();
  return entries.slice(-days);
}
