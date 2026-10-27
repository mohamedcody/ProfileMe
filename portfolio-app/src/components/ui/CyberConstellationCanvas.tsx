import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const CyberConstellationCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 12 : 28;
    const connectionDistance = isMobile ? 80 : 120;
    const mouseRadius = isMobile ? 0 : 130;

    const mouse = {
      x: -9999,
      y: -9999,
      isActive: false
    };

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.45),
        vy: (Math.random() - 0.5) * (isMobile ? 0.3 : 0.45),
        radius: Math.random() * 0.8 + 1.2
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.isActive = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Update positions & Draw particle dots in ONE batch
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        else if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        else if (p.y > height) p.y = 0;

        ctx.moveTo(p.x + p.radius, p.y);
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      }
      ctx.fillStyle = 'rgba(0, 180, 216, 0.45)';
      ctx.fill();

      // 2. Draw connecting lines in ONE batch
      ctx.beginPath();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Connect to mouse
        if (mouse.isActive) {
          const dxMouse = p.x - mouse.x;
          const dyMouse = p.y - mouse.y;
          const distMouse = Math.hypot(dxMouse, dyMouse);
          if (distMouse < mouseRadius) {
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
          }
        }

        // Connect to neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          if (Math.abs(dx) < connectionDistance && Math.abs(dy) < connectionDistance) {
            if (Math.hypot(dx, dy) < connectionDistance) {
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
            }
          }
        }
      }
      ctx.strokeStyle = 'rgba(0, 180, 216, 0.12)';
      ctx.lineWidth = 0.75;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75,
        transform: 'translateZ(0)'
      }}
      aria-hidden="true"
    />
  );
};
