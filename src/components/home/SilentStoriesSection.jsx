import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSilentStories } from "../../data/silentStories";
import { useLanguage } from "../../context/LanguageContext";
import StoryModal from "./StoryModal";

export default function SilentStoriesSection() {
  const { locale, t } = useLanguage();
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(t("silentStoriesSection.all"));
  const [solidarityCounts, setSolidarityCounts] = useState({
    "war-fatigue": 342,
    "safe-but-scared": 289,
    "cant-be-happy": 412,
    "irritated-by-loved-ones": 195,
  });

  const stories = getSilentStories(locale);
  const allLabel = t("silentStoriesSection.all");

  const tags = [allLabel, ...new Set(stories.map((s) => s.tag))];

  // If selected tag is not in current language tags, reset to all
  const activeTag = tags.includes(selectedTag) ? selectedTag : allLabel;

  const filteredStories =
    activeTag === allLabel
      ? stories
      : stories.filter((s) => s.tag === activeTag);

  const toggleSolidarity = (id, e) => {
    e.stopPropagation();
    setSolidarityCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  return (
    <>
      <section id="silent-stories" className="relative px-4 sm:px-8 py-16 sm:py-24 border-b border-default paper-texture">
        <div className="max-w-6xl mx-auto">
          {/* Section Masthead Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-10 border-b border-default gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-mono text-muted uppercase tracking-widest">
                <span className="text-secondary font-bold">{t("silentStoriesSection.tag")}</span>
                <span>•</span>
                <span>{t("silentStoriesSection.category")}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-default tracking-tight">
                {t("silentStoriesSection.title")}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted max-w-xl">
                {t("silentStoriesSection.subtitle")}
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                    activeTag === tag
                      ? "bg-primary text-white font-semibold"
                      : "bg-surface border border-default text-muted hover:text-default hover:border-default"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Editorial Stories Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredStories.map((item, i) => (
                <motion.article
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  onClick={() => setSelectedStory(item)}
                  className="group relative flex flex-col justify-between p-7 rounded-2xl bg-surface border border-default hover:border-primary/60 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm"
                >
                  <div>
                    {/* Top Metadata Line */}
                    <div className="flex items-center justify-between border-b border-default/70 pb-3 mb-5 text-xs font-mono text-muted">
                      <span className="uppercase tracking-wider">
                        № 0{i + 1} • {item.tag}
                      </span>
                      <span className="text-muted/60 group-hover:text-primary transition-colors">
                        {t("silentStoriesSection.clickToRead")} ↗
                      </span>
                    </div>

                    {/* Big Editorial Quote */}
                    <blockquote className="text-xl sm:text-2xl font-serif italic text-default leading-snug tracking-tight mb-6">
                      «{item.quote}»
                    </blockquote>
                  </div>

                  {/* Bottom Footer Actions */}
                  <div className="pt-4 border-t border-default/60 flex items-center justify-between">
                    <span className="text-xs font-medium text-primary group-hover:underline underline-offset-4 flex items-center gap-1">
                      <span>{item.story.title}</span>
                      <span>→</span>
                    </span>

                    <button
                      onClick={(e) => toggleSolidarity(item.id, e)}
                      title={t("silentStoriesSection.resonated")}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-surfaceSubtle border border-default hover:border-secondary/40 text-muted hover:text-secondary transition-colors"
                    >
                      <span>🤝</span>
                      <span>{solidarityCounts[item.id] || 250}</span>
                      <span className="hidden sm:inline text-[10px]">{t("silentStoriesSection.resonated")}</span>
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Footnote */}
          <div className="mt-12 text-center text-xs font-mono text-muted border-t border-default/60 pt-6">
            {t("silentStoriesSection.footnote")}
          </div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <StoryModal
          storyItem={selectedStory}
          onClose={() => setSelectedStory(null)}
        />
      )}
    </>
  );
}
