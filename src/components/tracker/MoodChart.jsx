import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import useMoodStore from "../../store/useMoodStore";
import { formatDate } from "../../utils/formatDate";
import { useLanguage } from "../../context/LanguageContext";

export default function MoodChart() {
  const { locale, t } = useLanguage();
  const { entries } = useMoodStore();
  const data = entries.slice(-7).map((e) => ({
    date: formatDate(e.date, locale),
    mood: e.mood,
  }));

  if (data.length === 0) return null;

  return (
    <div className="bg-surface border border-default rounded-2xl p-6 sm:p-8 shadow-xs">
      <div className="flex items-center justify-between border-b border-default/70 pb-3 mb-6">
        <span className="text-xs font-mono text-muted uppercase">
          {t("tracker.dynamicsTag")}
        </span>
        <span className="text-xs font-mono text-muted">
          {t("tracker.lastEntries", { count: data.length })}
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-serif font-semibold text-default mb-2">
        {t("tracker.chartTitle")}
      </h2>
      <p className="text-xs text-muted mb-6 font-sans">
        {t("tracker.chartSubtitle")}
      </p>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" opacity={0.5} />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", fill: "var(--color-text-muted)" }}
              stroke="var(--color-border)"
            />
            <YAxis
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              tick={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace", fill: "var(--color-text-muted)" }}
              stroke="var(--color-border)"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                borderRadius: "0.75rem",
                fontSize: "12px",
                fontFamily: "JetBrains Mono, monospace",
                color: "var(--color-text)",
              }}
            />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="var(--color-primary)"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "var(--color-primary)", stroke: "var(--color-surface)", strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
