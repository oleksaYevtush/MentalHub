import { useState } from 'react';
import { motion } from 'framer-motion';
import { warEffects } from '../../data/warEffects';
import ArticleModal from './ArticleModal';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: 'easeOut' },
  }),
};

export default function WarEffectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="px-6 py-16 bg-gradient-to-b from-white via-gray-50/50 to-gray-50 dark:from-[#100C1B] dark:via-[#140F23] dark:to-[#120F1D] transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-purple-300/75 mb-3">
              Психологічний вплив
            </span>
            <h2 className="text-3xl font-bold text-default mb-3">Війна впливає не лише на думки</h2>
            <p className="text-muted text-base max-w-lg mx-auto">
              Натисни на область, яка тебе турбує — щоб зрозуміти, що відбувається, і що з цим можна
              зробити
            </p>
          </motion.div>

          {/* Grid: 2 cols on mobile → 3 cols on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {warEffects.map((item, i) => (
              <motion.button
                key={item.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.04, y: -5 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelected(item)}
                className={`
                  group text-left p-5 rounded-2xl border-2 bg-gradient-to-br
                  transition-all duration-200 cursor-pointer shadow-sm hover:shadow-lg
                  ${item.color} ${item.border}
                `}
              >
                {/* Icon */}
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4 ${item.iconBg} transition-transform duration-200 group-hover:scale-110`}
                >
                  {item.icon}
                </span>

                {/* Title */}
                <h3 className={`font-bold text-lg mb-1 ${item.accentColor}`}>{item.title}</h3>

                {/* Subtitle */}
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                  {item.subtitle}
                </p>

                {/* Arrow */}
                <div
                  className={`mt-4 flex items-center gap-1 text-xs font-semibold ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                >
                  <span>Читати</span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="transform group-hover:translate-x-0.5 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      {selected && <ArticleModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
