import { useState } from "react";
import { motion } from "framer-motion";
import { symptoms } from "../../data/symptoms";
import SymptomModal from "./SymptomModal";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

export default function SymptomsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="px-6 py-16 bg-gradient-to-b from-white via-[#FAF8FD] to-white dark:from-[#0E0B16] dark:via-[#130F1F] dark:to-[#100C1B] transition-colors duration-200">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-default mb-3">
              Що з тобою відбувається?
            </h2>
            <p className="text-muted text-base max-w-lg mx-auto">
              Натисни на те, що найбільше схоже на твій стан — і дізнайся більше
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptoms.map((symptom, i) => (
              <motion.button
                key={symptom.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(symptom)}
                className={`
                  group text-left p-5 rounded-2xl border-2 bg-gradient-to-br
                  transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md
                  ${symptom.color}
                `}
              >
                {/* Icon */}
                <span
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl mb-4 transition-transform duration-200 group-hover:scale-110 ${symptom.iconBg}`}
                >
                  {symptom.icon}
                </span>

                {/* Title */}
                <h3 className={`font-bold text-lg mb-2 ${symptom.accentColor}`}>
                  {symptom.title}
                </h3>

                {/* Short desc */}
                <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed">
                  «{symptom.short}»
                </p>

                {/* Arrow hint */}
                <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${symptom.accentColor} opacity-75 group-hover:opacity-100 transition-opacity`}>
                  <span>Дізнатися більше</span>
                  <svg
                    width="14"
                    height="14"
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

      {/* Modal */}
      {selected && (
        <SymptomModal symptom={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
