import { useState } from 'react';
import { motion } from 'framer-motion';
import { silentStories } from '../../data/silentStories';
import StoryModal from './StoryModal';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export default function SilentStoriesSection() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <>
      <section className="relative px-6 py-20 bg-gradient-to-b from-[#FAF8FD] via-[#F4EFFB] to-[#FAF8FD] dark:from-[#120F1D] dark:via-[#161324] dark:to-[#120F1D] transition-colors duration-200 overflow-hidden">
        {/* Subtle atmospheric glow behind cards */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-purple-200/50 dark:bg-purple-900/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-200/40 dark:bg-indigo-900/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary dark:bg-white/[0.07] dark:border-white/10 dark:text-purple-200 mb-4 tracking-wide">
              <span>🕊️</span>
              <span>Безпечний простір чесності</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-default mb-4">
              Про що ми мовчимо
            </h2>

            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Думки, які ми часто соромимося вимовити вголос, але які щодня проживають тисячі з нас.
              Ти не один у тому, що відчуваєш.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {silentStories.map((item, i) => (
              <motion.div
                key={item.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`
                  group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl
                  bg-white/90 dark:bg-white/[0.04] border border-purple-100/80 dark:border-white/[0.08]
                  hover:border-primary/40 dark:hover:border-purple-400/40
                  hover:bg-white dark:hover:bg-white/[0.07]
                  backdrop-blur-sm transition-all duration-300
                  shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:shadow-lg dark:hover:shadow-purple-950/40
                  ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                `}
              >
                <div>
                  {/* Tag & Quote mark */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-3xl font-serif text-primary/20 dark:text-white/20 select-none group-hover:text-primary/40 dark:group-hover:text-purple-300/40 transition-colors">
                      “
                    </span>
                  </div>

                  {/* Quote text */}
                  <blockquote className="text-lg sm:text-xl font-semibold text-default dark:text-slate-100 leading-snug tracking-tight mb-6">
                    {item.quote}
                  </blockquote>
                </div>

                {/* Button */}
                <div className="pt-2">
                  <button
                    onClick={() => setSelectedStory(item)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white dark:bg-white/[0.08] dark:group-hover:bg-purple-600/80 dark:text-white text-sm font-semibold transition-all duration-200 border border-primary/20 group-hover:border-transparent dark:border-white/10 dark:group-hover:border-purple-400/50 cursor-pointer"
                  >
                    <span>Читати історію</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="transform group-hover:translate-x-0.5 transition-transform"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.div
            className="mt-12 text-center text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Всі переживання анонімізовані та засновані на типовому досвіді українців під час війни.
          </motion.div>
        </div>
      </section>

      {/* Story Modal */}
      {selectedStory && (
        <StoryModal storyItem={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </>
  );
}
