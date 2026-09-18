import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

const CHECKIN_CONFIGS = [
  {
    id: "exhaustion",
    sectionId: "silent-stories",
    colorHex: "#CAA9F3",
    colorName: "Phlox",
    bgClass: "bg-phlox/15 border-phlox/50 text-default",
    dotClass: "bg-phlox ring-phlox/30",
  },
  {
    id: "anxiety",
    sectionId: "breathing-section",
    colorHex: "#206ABC",
    colorName: "Atlantis",
    bgClass: "bg-atlantis/15 border-atlantis/50 text-default",
    dotClass: "bg-atlantis ring-atlantis/30",
  },
  {
    id: "guilt",
    sectionId: "silent-stories",
    colorHex: "#B37AD4",
    colorName: "Verbena",
    bgClass: "bg-verbena/15 border-verbena/50 text-default",
    dotClass: "bg-verbena ring-verbena/30",
  },
  {
    id: "numbness",
    sectionId: "war-effects",
    colorHex: "#7997E6",
    colorName: "Periwinkle",
    bgClass: "bg-periwinkle/15 border-periwinkle/50 text-default",
    dotClass: "bg-periwinkle ring-periwinkle/30",
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const [activeCheckinId, setActiveCheckinId] = useState("exhaustion");
  const [groundedMessage, setGroundedMessage] = useState(null);

  const handleQuickGround = (msg) => {
    setGroundedMessage(msg);
    setTimeout(() => setGroundedMessage(null), 3500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const activeConfig = CHECKIN_CONFIGS.find((c) => c.id === activeCheckinId) || CHECKIN_CONFIGS[0];

  return (
    <section className="relative overflow-hidden pt-10 sm:pt-16 pb-14 sm:pb-20 px-4 sm:px-8 border-b border-periwinkle/30 ocean-ambient transition-colors duration-300">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Top Masthead Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-periwinkle/30 mb-8 sm:mb-12 text-xs font-mono text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-verbena ring-2 ring-phlox/50 animate-pulse" />
            <span className="uppercase tracking-wider">{t("hero.masthead")}</span>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface/80 border border-periwinkle/40 shadow-xs backdrop-blur-xs"
              title="Phlox (#CAA9F3), Verbena (#B37AD4), Periwinkle (#7997E6), Atlantis (#206ABC), Phthalo Blue (#0E155E)"
            >
              <span className="w-3 h-3 rounded-full bg-[#CAA9F3] ring-1 ring-black/10 shadow-xs" title="Phlox (#CAA9F3)" />
              <span className="w-3 h-3 rounded-full bg-[#B37AD4] ring-1 ring-black/10 shadow-xs" title="Verbena (#B37AD4)" />
              <span className="w-3 h-3 rounded-full bg-[#7997E6] ring-1 ring-black/10 shadow-xs" title="Periwinkle (#7997E6)" />
              <span className="w-3 h-3 rounded-full bg-[#206ABC] ring-1 ring-black/10 shadow-xs" title="Atlantis (#206ABC)" />
              <span className="w-3 h-3 rounded-full bg-[#0E155E] ring-1 ring-white/20 shadow-xs" title="Phthalo Blue (#0E155E)" />
              <span className="text-[10px] uppercase font-mono font-bold text-atlantis dark:text-phlox ml-1.5 hidden xs:inline">
                {t("common.paletteName")}
              </span>
            </div>
            <span className="hidden sm:inline">{t("common.anonymous")}</span>
            <span className="font-semibold text-default">2022—2026</span>
          </div>
        </div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Manifesto & Narrative */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-serif font-semibold text-default leading-[1.18] tracking-tight mb-5">
              {t("hero.titleStart")}
              <em className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-atlantis via-periwinkle to-verbena dark:from-periwinkle dark:via-phlox dark:to-verbena underline decoration-periwinkle/50 underline-offset-6">
                {t("hero.titleEm")}
              </em>
              {t("hero.titleEnd")}
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-6 font-sans max-w-xl">
              {t("hero.subtitle")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 mb-8">
              <Link to="/test">
                <Button size="lg" variant="primary">
                  {t("hero.buttons.test")}
                  <span className="text-xs opacity-75 font-mono ml-1">→</span>
                </Button>
              </Link>
              <Link to="/tracker">
                <Button size="lg" variant="outline">
                  {t("hero.buttons.tracker")}
                </Button>
              </Link>
              <button
                onClick={() => scrollTo("breathing-section")}
                className="text-xs font-mono text-atlantis dark:text-phlox hover:underline underline-offset-4 px-2 py-2 cursor-pointer transition-colors"
              >
                {t("hero.buttons.breathingCta")}
              </button>
            </div>

            {/* Micro-Grounding Bar */}
            <div className="p-4 rounded-xl bg-surface/90 border border-periwinkle/40 shadow-xs backdrop-blur-xs">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[11px] font-mono uppercase text-muted tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-verbena" />
                  {t("hero.grounding.title")}
                </span>
                {groundedMessage && (
                  <span className="text-xs font-semibold text-atlantis dark:text-phlox animate-pulse">
                    ✓ {groundedMessage}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleQuickGround(t("hero.grounding.feetMsg"))}
                  className="text-xs px-3 py-1.5 rounded-lg bg-atlantis/10 hover:bg-atlantis/20 text-atlantis-dark dark:text-atlantis border border-atlantis/30 transition-all cursor-pointer font-medium"
                >
                  {t("hero.grounding.feet")}
                </button>
                <button
                  onClick={() => handleQuickGround(t("hero.grounding.jawMsg"))}
                  className="text-xs px-3 py-1.5 rounded-lg bg-verbena/10 hover:bg-verbena/20 text-verbena-dark dark:text-phlox border border-verbena/30 transition-all cursor-pointer font-medium"
                >
                  {t("hero.grounding.jaw")}
                </button>
                <button
                  onClick={() => handleQuickGround(t("hero.grounding.exhaleMsg"))}
                  className="text-xs px-3 py-1.5 rounded-lg bg-periwinkle/15 hover:bg-periwinkle/25 text-periwinkle-dark dark:text-periwinkle border border-periwinkle/40 transition-all cursor-pointer font-medium"
                >
                  {t("hero.grounding.exhale")}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: "Дзеркало стану" Interactive Radar Widget */}
          <div className="lg:col-span-5">
            <div className="bg-surface/95 rounded-2xl border border-periwinkle/40 p-6 shadow-sm relative backdrop-blur-xs">
              <div className="flex items-center justify-between border-b border-periwinkle/30 pb-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-atlantis animate-ping" />
                  {t("hero.mirror.title")}
                </span>
                <span className="text-[11px] font-mono text-atlantis dark:text-phlox font-semibold">
                  {t("hero.mirror.prompt")}
                </span>
              </div>

              <div className="space-y-2.5 mb-5">
                {CHECKIN_CONFIGS.map((item) => {
                  const isSelected = activeCheckinId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveCheckinId(item.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? `${item.bgClass} shadow-xs font-semibold`
                          : "bg-surface border-periwinkle/20 text-muted hover:text-default hover:border-periwinkle/50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ring-2 ${item.dotClass}`}
                        />
                        <span className="text-sm font-medium">
                          {t(`hero.mirror.checkins.${item.id}.label`)}
                        </span>
                      </div>
                      <span className="text-xs font-mono opacity-80">
                        {t(`hero.mirror.checkins.${item.id}.phrase`)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Insight Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCheckinId}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-periwinkle/10 to-phlox/10 border border-periwinkle/40 space-y-3"
                >
                  <p className="text-xs sm:text-sm text-default font-serif italic leading-relaxed">
                    «{t(`hero.mirror.checkins.${activeCheckinId}.anchor`)}»
                  </p>
                  <div className="pt-1 flex items-center justify-between">
                    <button
                      onClick={() => scrollTo(activeConfig.sectionId)}
                      className="text-xs font-mono font-bold text-atlantis dark:text-phlox hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t(`hero.mirror.checkins.${activeCheckinId}.action`)}</span>
                      <span>↓</span>
                    </button>
                    <span className="text-[10px] font-mono text-muted">
                      {t("hero.mirror.verified")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
