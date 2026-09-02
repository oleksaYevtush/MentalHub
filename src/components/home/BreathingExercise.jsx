import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const PHASE_DURATIONS = {
  inhale: 4,
  hold: 7,
  exhale: 8,
};

export default function BreathingExercise() {
  const { t } = useLanguage();
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState("idle"); // 'idle' | 'inhale' | 'hold' | 'exhale'
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [cycle, setCycle] = useState(1);

  useEffect(() => {
    if (!isActive) {
      setPhase("idle");
      setSecondsLeft(0);
      setCycle(1);
      return;
    }

    if (phase === "idle") {
      setPhase("inhale");
      setSecondsLeft(PHASE_DURATIONS.inhale);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        if (phase === "inhale") {
          setPhase("hold");
          return PHASE_DURATIONS.hold;
        } else if (phase === "hold") {
          setPhase("exhale");
          return PHASE_DURATIONS.exhale;
        } else if (phase === "exhale") {
          setPhase("inhale");
          setCycle((c) => c + 1);
          return PHASE_DURATIONS.inhale;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const toggleStart = () => {
    setIsActive((prev) => !prev);
  };

  const getScale = () => {
    if (phase === "inhale" || phase === "hold") return 1.45;
    return 1;
  };

  const getTransitionDuration = () => {
    if (phase === "inhale") return PHASE_DURATIONS.inhale;
    if (phase === "hold") return 0.3;
    if (phase === "exhale") return PHASE_DURATIONS.exhale;
    return 0.5;
  };

  const getPhaseLabel = () => {
    switch (phase) {
      case "inhale":
        return t("breathing.inhale");
      case "hold":
        return t("breathing.hold");
      case "exhale":
        return t("breathing.exhale");
      default:
        return t("breathing.idle");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-2 pb-1">
      {/* Circle Visualizer Container */}
      <div className="relative w-44 h-44 flex items-center justify-center my-4">
        {/* Soft Background Glow Aura */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/25 blur-xl pointer-events-none"
          animate={{
            scale: getScale(),
            opacity: phase === "hold" ? [0.35, 0.65, 0.35] : phase === "idle" ? 0.15 : 0.5,
          }}
          transition={{
            duration: phase === "hold" ? 2.33 : getTransitionDuration(),
            ease: phase === "hold" ? "easeInOut" : "linear",
            repeat: phase === "hold" ? Infinity : 0,
          }}
        />

        {/* Outer Guide Ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full border border-primary/30 dark:border-primary/40 pointer-events-none"
          animate={{ scale: getScale() }}
          transition={{
            duration: getTransitionDuration(),
            ease: "easeInOut",
          }}
        />

        {/* Main Expanding / Contracting Circle */}
        <motion.div
          className="w-28 h-28 rounded-full bg-gradient-to-br from-primary via-secondary to-primary/80 shadow-md shadow-primary/30 flex flex-col items-center justify-center text-white text-center p-2 z-10 select-none"
          animate={{ scale: getScale() }}
          transition={{
            duration: getTransitionDuration(),
            ease: "easeInOut",
          }}
        >
          <span className="text-xs font-bold uppercase tracking-wider opacity-90 drop-shadow-sm">
            {getPhaseLabel()}
          </span>
          {isActive && (
            <span className="text-2xl font-extrabold font-mono mt-0.5">
              {secondsLeft}s
            </span>
          )}
        </motion.div>
      </div>

      {/* Cycle counter badge */}
      <div className="h-6 flex items-center justify-center mb-3">
        {isActive ? (
          <span className="text-xs font-semibold px-3 py-0.5 rounded-full bg-primary/15 text-primary dark:bg-primary/25 border border-primary/20">
            {t("breathing.cycle", { current: cycle })}
          </span>
        ) : (
          <span className="text-xs text-muted">
            4с {t("breathing.inhale").toLowerCase()} • 7с {t("breathing.hold").toLowerCase()} • 8с {t("breathing.exhale").toLowerCase()}
          </span>
        )}
      </div>

      {/* Start / Pause Button */}
      <button
        onClick={toggleStart}
        className={`w-full py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer shadow-sm flex items-center justify-center gap-2 ${
          isActive
            ? "bg-red-500/10 text-red-600 dark:text-red-400 hover:bg-red-500/20 border border-red-500/30"
            : "bg-primary text-white hover:bg-primary-hover shadow-primary/20"
        }`}
      >
        <span>{isActive ? "⏹️" : "🌬️"}</span>
        <span>{isActive ? t("breathing.pause") : t("breathing.start")}</span>
      </button>
    </div>
  );
}
