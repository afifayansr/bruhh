import { useEffect, useRef } from "react";

export function AnimatedCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX - 6 + "px";
        dot.current.style.top = e.clientY - 6 + "px";
      }
    };

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.left = pos.current.x - 18 + "px";
        ring.current.style.top = pos.current.y - 18 + "px";
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    const onEnter = () => {
      if (dot.current) dot.current.style.transform = "scale(2)";
      if (ring.current) ring.current.style.transform = "scale(1.5)";
    };
    const onLeave = () => {
      if (dot.current) dot.current.style.transform = "scale(1)";
      if (ring.current) ring.current.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a,button,[role=button]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(raf.current);
      document.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="custom-cursor" style={{ left: "-100px", top: "-100px" }} />
      <div ref={ring} className="cursor-follower" style={{ left: "-100px", top: "-100px" }} />
    </>
  );
}
