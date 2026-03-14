"use client";

import { useEffect, useRef, useState } from "react";

export function DotGrid() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const offsetRef = useRef({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const hasTouchPoints = navigator.maxTouchPoints > 0;
    const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(hasTouchPoints || hasCoarsePointer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    const spacing = 50;
    const dotRadius = 1;
    const influenceRadius = isTouchDevice ? 0 : 100;
    const parallaxStrength = isTouchDevice ? 0 : 35;
    const trailDecay = 0.97;

    const dots = [];

    const resize = () => {
      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      viewportWidth = nextWidth;
      viewportHeight = nextHeight;

      canvas.width = Math.floor(nextWidth * dpr);
      canvas.height = Math.floor(nextHeight * dpr);
      canvas.style.width = `${nextWidth}px`;
      canvas.style.height = `${nextHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initDots();
    };

    const initDots = () => {
      dots.length = 0;
      const padding = parallaxStrength * 2;
      const cols = Math.ceil((canvas.width + padding * 2) / spacing) + 1;
      const rows = Math.ceil((canvas.height + padding * 2) / spacing) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing - padding,
            y: j * spacing - padding,
            baseX: i * spacing - padding,
            baseY: j * spacing - padding,
            brightness: 0,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, viewportWidth, viewportHeight);

      const prefersDark = document.documentElement.classList.contains("dark");
      const bodyBg = getComputedStyle(document.body).backgroundColor;
      const isDarkBg = (() => {
        const match = bodyBg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!match) return false;
        const r = Number(match[1]);
        const g = Number(match[2]);
        const b = Number(match[3]);
        const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
        return luminance < 0.5;
      })();
      const isDark = prefersDark || isDarkBg;

      const centerX = viewportWidth / 2;
      const centerY = viewportHeight / 2;
      const targetOffsetX =
        ((mouseRef.current.x - centerX) / centerX) * parallaxStrength;
      const targetOffsetY =
        ((mouseRef.current.y - centerY) / centerY) * parallaxStrength;

      offsetRef.current.x += (targetOffsetX - offsetRef.current.x) * 0.05;
      offsetRef.current.y += (targetOffsetY - offsetRef.current.y) * 0.05;

      dots.forEach((dot) => {
        const parallaxX = dot.baseX + offsetRef.current.x;
        const parallaxY = dot.baseY + offsetRef.current.y;

        const dx = mouseRef.current.x - parallaxX;
        const dy = mouseRef.current.y - parallaxY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < influenceRadius) {
          const intensity = 1 - distance / influenceRadius;
          dot.brightness = Math.max(dot.brightness, intensity);
        }

        dot.brightness *= trailDecay;

        if (distance < influenceRadius && distance > 0) {
          const force = (1 - distance / influenceRadius) * 12;
          dot.x = parallaxX - (dx / distance) * force;
          dot.y = parallaxY - (dy / distance) * force;
        } else {
          dot.x += (parallaxX - dot.x) * 0.1;
          dot.y += (parallaxY - dot.y) * 0.1;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);

        const baseOpacity = isDark ? 0.3 : 0.2;
        const trailGlow = dot.brightness * 1.5;
        const opacity = baseOpacity + trailGlow;

        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${opacity})`
          : `rgba(0, 0, 0, ${opacity})`;

        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", resize);

    if (!isTouchDevice) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    mouseRef.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [isTouchDevice]);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
