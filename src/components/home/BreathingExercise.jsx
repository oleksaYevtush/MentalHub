import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const PROTOCOL_CONFIGS = {
  "478": {
    phases: [
      { key: "inhale", duration: 4, scale: 1.35 },
      { key: "hold", duration: 7, scale: 1.35 },
      { key: "exhale", duration: 8, scale: 1.0 },
    ],
  },
  box: {
    phases: [
      { key: "inhale", duration: 4, scale: 1.35 },
      { key: "hold", duration: 4, scale: 1.35 },
      { key: "exhale", duration: 4, scale: 1.0 },
      { key: "pause", duration: 4, scale: 1.0 },
    ],
  },
  sigh: {
    phases: [
      { key: "inhale", duration: 3, scale: 1.25 },
      { key: "hold", duration: 1, scale: 1.38 },
      { key: "exhale", duration: 6, scale: 1.0 },
    ],
  },
};

export default function BreathingExercise() {
  const { t } = useLanguage();
  const [selectedProtocolKey, setSelectedProtocolKey] = useState("478");
  const [isActive, setIsActive] = useState(false);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [cycleCount, setCycleCount] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const audioCtxRef = useRef(null);

  const protocolConfig = PROTOCOL_CONFIGS[selectedProtocolKey];
  const currentPhaseConfig = protocolConfig.phases[phaseIndex] || protocolConfig.phases[0];

  // Sound generator using Web Audio API
  const playPhaseSound = (phaseKey) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        audioCtxRef.current = new AudioContextClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      const freqs = {
        inhale: 261.63, // C4
        hold: 329.63,   // E4
        exhale: 220.0,  // A3
        pause: 196.0,   // G3
      };

      osc.type = "sine";
      osc.frequency.setValueAtTime(freqs[phaseKey] || 220, ctx.currentTime);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.85);
    } catch {
      // AudioContext fallback
    }
  };

  useEffect(() => {
    if (!isActive) {
      setPhaseIndex(0);
      setSecondsLeft(0);
      setCycleCount(1);
      return;
    }

    setSecondsLeft(currentPhaseConfig.duration);
    playPhaseSound(currentPhaseConfig.key);

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // Advance phase
        setPhaseIndex((currIdx) => {
          const nextIdx = (currIdx + 1) % protocolConfig.phases.length;
          if (nextIdx === 0) {
            setCycleCount((c) => c + 1);
          }
          const nextPhase = protocolConfig.phases[nextIdx];
          playPhaseSound(nextPhase.key);
          return nextIdx;
        });

        const nextPhaseIdx = (phaseIndex + 1) % protocolConfig.phases.length;
        return protocolConfig.phases[nextPhaseIdx].duration;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phaseIndex, selectedProtocolKey]);

  const toggleStart = () => {
    setIsActive((prev) => !prev);
  };

  const handleProtocolChange = (key) => {
    setIsActive(false);
    setSelectedProtocolKey(key);
    setPhaseIndex(0);
  };

  const currentPhaseLabel = t(`breathing.protocols.${selectedProtocolKey}.phases.${currentPhaseConfig.key}`);

  return (
    <div className="flex flex-col items-center">
      {/* Protocol Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 w-full max-w-lg">
        {Object.keys(PROTOCOL_CONFIGS).map((key) => {
          const isSelected = selectedProtocolKey === key;
          return (
            <button
              key={key}
              onClick={() => handleProtocolChange(key)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-r from-atlantis to-verbena text-white font-bold shadow-sm shadow-atlantis/30"
                  : "bg-surface hover:bg-periwinkle/15 text-muted hover:text-default border border-periwinkle/40"
              }`}
            >
              {t(`breathing.protocols.${key}.name`)}
            </button>
          );
        })}
      </div>

      {/* Protocol Subtitle */}
      <p className="text-xs sm:text-sm text-muted font-sans mb-8 text-center max-w-md">
        {t(`breathing.protocols.${selectedProtocolKey}.subtitle`)}
      </p>

      {/* Central Visualizer Breathing Ring */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center my-4 select-none">
        {/* Ambient concentric decorative guide */}
        <div className="absolute w-60 h-60 sm:w-68 sm:h-68 rounded-full border border-dashed border-periwinkle/40 pointer-events-none" />
        <div className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dotted border-verbena/30 pointer-events-none" />

        {/* Animated breathing aura (Outer jellyfish wave) */}
        <motion.div
          className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-phlox/20 via-verbena/25 to-atlantis/20 border border-phlox/40 pointer-events-none blur-[1px]"
          animate={{
            scale: isActive ? currentPhaseConfig.scale * 1.08 : 1,
            opacity: isActive ? 0.9 : 0.4,
          }}
          transition={{
            duration: isActive ? currentPhaseConfig.duration : 0.6,
            ease: "easeInOut",
          }}
        />

        {/* Middle breathing wave */}
        <motion.div
          className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-bl from-atlantis/20 via-periwinkle/25 to-verbena/20 border border-periwinkle/40 pointer-events-none"
          animate={{
            scale: isActive ? currentPhaseConfig.scale : 1,
          }}
          transition={{
            duration: isActive ? currentPhaseConfig.duration : 0.6,
            ease: "easeInOut",
          }}
        />

        {/* Core tactile disc */}
        <motion.div
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-surface border-2 border-periwinkle/60 shadow-lg shadow-periwinkle/25 flex flex-col items-center justify-center text-center p-4 z-10"
          animate={{
            scale: isActive ? currentPhaseConfig.scale : 1,
          }}
          transition={{
            duration: isActive ? currentPhaseConfig.duration : 0.6,
            ease: "easeInOut",
          }}
        >
          <span className="text-xs sm:text-sm font-serif italic text-default font-semibold">
            {isActive ? currentPhaseLabel : t("breathing.ready")}
          </span>
          {isActive ? (
            <span className="text-3xl sm:text-4xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-atlantis via-periwinkle to-verbena dark:from-phlox dark:to-periwinkle mt-1">
              {secondsLeft}s
            </span>
          ) : (
            <span className="text-[11px] font-mono text-atlantis dark:text-phlox font-semibold mt-1">
              {t("breathing.pressStart")}
            </span>
          )}
        </motion.div>
      </div>

      {/* Cycle Indicator & Sound Toggle */}
      <div className="flex items-center justify-between w-full max-w-md my-6 pt-4 border-t border-periwinkle/30 text-xs font-mono text-muted">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-verbena ring-2 ring-phlox/40 animate-pulse" />
          <span className="font-medium text-default">
            {isActive ? t("breathing.cycle", { num: cycleCount }) : t("breathing.freeTempo")}
          </span>
        </div>

        <button
          onClick={() => setSoundEnabled((prev) => !prev)}
          className={`px-3 py-1 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${
            soundEnabled
              ? "bg-periwinkle/20 border-periwinkle text-atlantis dark:text-phlox font-semibold"
              : "border-periwinkle/30 hover:border-periwinkle text-muted"
          }`}
          title={t("breathing.soundTooltip")}
        >
          <span>{soundEnabled ? t("breathing.soundOn") : t("breathing.soundOff")}</span>
        </button>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center gap-3 w-full max-w-xs">
        <button
          onClick={toggleStart}
          className={`flex-1 py-3 px-6 rounded-xl font-mono font-bold text-sm transition-all duration-200 cursor-pointer shadow-md text-center ${
            isActive
              ? "bg-gradient-to-r from-verbena to-phlox text-phthalo hover:brightness-105 shadow-verbena/20"
              : "bg-gradient-to-r from-atlantis via-atlantis to-verbena text-white hover:from-phthalo hover:to-atlantis shadow-atlantis/30"
          }`}
        >
          {isActive ? t("breathing.stop") : t("breathing.start")}
        </button>

        {isActive && (
          <button
            onClick={() => {
              setIsActive(false);
              setPhaseIndex(0);
              setCycleCount(1);
            }}
            className="px-3.5 py-3 rounded-xl border border-default bg-surface hover:bg-surfaceSubtle text-muted text-xs font-mono cursor-pointer"
            title={t("breathing.reset")}
          >
            {t("breathing.reset")}
          </button>
        )}
      </div>
    </div>
  );
}
