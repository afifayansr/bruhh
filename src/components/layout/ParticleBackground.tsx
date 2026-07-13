import { useEffect, useRef } from "react";

interface Particle { 
  x: number; 
  y: number; 
  vx: number; 
  vy: number; 
  alpha: number; 
  r: number;
  color: string;
  targetAlpha: number;
  pulsePhase: number;
  mass: number;
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId = 0;
    let particles: Particle[] = [];

    const colors = [
      "rgb(139,92,246)",      // Purple
      "rgb(0,230,255)",       // Cyan
      "rgb(88,28,220)",       // Deep Purple
      "rgb(100,200,255)",     // Light Blue
      "rgb(168,85,247)",      // Violet
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize particles with more variety
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        alpha: Math.random() * 0.4 + 0.1,
        targetAlpha: Math.random() * 0.6 + 0.2,
        r: Math.random() * 2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        mass: Math.random() * 1.5 + 0.5,
      });
    }

    const draw = () => {
      timeRef.current += 0.016;

      // Create gradient background for depth
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(6,8,16,0.3)");
      gradient.addColorStop(0.5, "rgba(10,5,20,0.2)");
      gradient.addColorStop(1, "rgba(6,8,16,0.3)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!;

        // Mouse attraction
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 150;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 0.02;
          p.vx += (dx / dist) * force * p.mass;
          p.vy += (dy / dist) * force * p.mass;
        }

        // Friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Movement with slight drift
        p.x += p.vx + Math.sin(timeRef.current * 0.0005 + i) * 0.1;
        p.y += p.vy + Math.cos(timeRef.current * 0.0003 + i) * 0.1;

        // Wrap around screen
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        // Pulse effect
        p.pulsePhase += 0.01;
        const pulse = Math.sin(p.pulsePhase) * 0.2 + 0.8;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
        const [r, g, b] = p.color.match(/\d+/g)!.map(Number);
        ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha * pulse})`;
        ctx.fill();

        // Glow effect for larger particles
        if (p.r > 1.5) {
          ctx.strokeStyle = `rgba(${r},${g},${b},${p.alpha * pulse * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // Draw connecting lines with better visibility
      const connectionDist = 150;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i]!;
          const p2 = particles[j]!;
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const opacity = 0.15 * (1 - dist / connectionDist);
            
            // Determine line color based on particle colors
            const isCompatible = p1.color === p2.color;
            const [r, g, b] = isCompatible 
              ? p1.color.match(/\d+/g)!.map(Number)
              : [120, 100, 200];

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw mouse interaction circle
      if (mouseRef.current.x && mouseRef.current.y) {
        const interactRadius = 150;
        ctx.strokeStyle = `rgba(0,230,255,${0.05})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, interactRadius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.7 }}
    />
  );
}
