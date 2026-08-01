import { useEffect, useRef, useState } from "react";

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isTouch, setIsTouch] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const hovered = useRef(false);
  const clicked = useRef(false);
  const clickTimer = useRef<number | null>(null);
  const animId = useRef<number>(0);

  useEffect(() => {
    const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (touch) {
      setIsTouch(true);
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = () => {
      hovered.current = true;
    };
    const onLeave = () => {
      hovered.current = false;
    };
    const onClick = () => {
      clicked.current = true;
      if (clickTimer.current) clearTimeout(clickTimer.current);
      clickTimer.current = window.setTimeout(() => {
        clicked.current = false;
      }, 120);
    };

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      const el = cursorRef.current;
      if (el) {
        let scale = 1;
        if (!reducedMotion) {
          if (clicked.current) scale = 0.75;
          else if (hovered.current) scale = 1.5;
        }

        el.style.left = `${pos.current.x}px`;
        el.style.top = `${pos.current.y}px`;
        el.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }

      animId.current = requestAnimationFrame(loop);
    };

    animId.current = requestAnimationFrame(loop);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(animId.current);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("click", onClick);
      if (clickTimer.current) clearTimeout(clickTimer.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{
        width: "32px",
        height: "32px",
        left: "-100px",
        top: "-100px",
        backgroundImage: "url('/assets/cursor.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        filter: "drop-shadow(0 0 12px rgba(255, 30, 60, 0.6))",
        transition: "filter 0.15s ease-out",
        willChange: "transform, left, top",
      }}
    />
  );
}
