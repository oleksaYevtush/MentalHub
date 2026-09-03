import { useEffect, useRef } from 'react';
import './GooeyBurger.css';

export default function GooeyBurger() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const menu = root.querySelector('.gb-menu');
    const burger = root.querySelector('.gb-burger');
    const blobs = [...root.querySelectorAll('.gb-blob')];
    const items = [...root.querySelectorAll('.gb-item')];

    blobs.forEach((b, idx) => b.style.setProperty('--i', idx));

    function open(val) {
      if (val) {
        menu.classList.add('open');
        burger.setAttribute('aria-expanded', 'true');
        document.addEventListener('keydown', onKey);
        setTimeout(() => items[0]?.focus?.(), 220);
      } else {
        menu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.removeEventListener('keydown', onKey);
        burger.focus();
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') open(false);
    }

    function onDocumentClick(e) {
      if (!root.contains(e.target) && menu.classList.contains('open')) open(false);
    }

    burger.addEventListener('click', () => open(!menu.classList.contains('open')));
    document.addEventListener('click', onDocumentClick);
    items.forEach((it) => it.addEventListener('click', () => open(false)));

    return () => {
      burger.removeEventListener('click', () => open(!menu.classList.contains('open')));
      document.removeEventListener('click', onDocumentClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="gooey-burger sm:hidden" ref={rootRef}>
      {/* Inline SVG filter - scoped by id */}
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <filter id="gb-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="gb-menu" aria-hidden="false">
        <button className="gb-burger" aria-label="Open menu" aria-expanded="false" type="button">
          <span className="gb-burger-inner" aria-hidden="true">
            <span className="gb-dot a" />
            <span className="gb-dot b" />
            <span className="gb-dot c" />
          </span>
        </button>

        <div className="gb-goo-layer" style={{ filter: 'url(#gb-goo)' }} aria-hidden>
          <span className="gb-blob" style={{ '--i': 0 }} />
          <span className="gb-blob" style={{ '--i': 1 }} />
          <span className="gb-blob" style={{ '--i': 2 }} />
          <span className="gb-blob" style={{ '--i': 3 }} />
        </div>

        <div className="gb-items">
          <a className="gb-item" href="/" title="Home">
            🏠
          </a>
          <a className="gb-item" href="/test" title="Stress Test">
            🧭
          </a>
          <a className="gb-item" href="/tracker" title="Mood Tracker">
            📈
          </a>
          <a className="gb-item" href="/help" title="Help">
            📞
          </a>
        </div>
      </div>
    </div>
  );
}
