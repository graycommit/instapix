"use client";

import { useEffect, useRef } from "react";

const REVEAL_THRESHOLD = 65;
const SAMPLE_STRIDE = 16;

export default function ScratchCard({
  prizeLabel,
  onProgress,
}: {
  prizeLabel: string;
  onProgress: (percent: number) => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const { width, height } = container.getBoundingClientRect();
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    let revealed = false;
    let drawing = false;
    let lastSample = 0;

    function paintFoil() {
      const gradient = ctx!.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#dbe1e6");
      gradient.addColorStop(0.5, "#eef1f3");
      gradient.addColorStop(1, "#c6ccd2");
      ctx!.globalCompositeOperation = "source-over";
      ctx!.fillStyle = gradient;
      ctx!.fillRect(0, 0, width, height);

      ctx!.fillStyle = "#263238";
      ctx!.font = "600 16px Inter, system-ui, sans-serif";
      ctx!.textAlign = "center";
      ctx!.textBaseline = "middle";
      ctx!.fillText("Raspe aqui", width / 2, height / 2);
    }

    paintFoil();

    function getPos(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function scratchAt(x: number, y: number) {
      ctx!.globalCompositeOperation = "destination-out";
      ctx!.beginPath();
      ctx!.arc(x, y, 28, 0, Math.PI * 2);
      ctx!.fill();
    }

    function computePercent() {
      if (revealed) return;
      const data = ctx!.getImageData(0, 0, canvas!.width, canvas!.height).data;
      let transparent = 0;
      let sampled = 0;
      for (let i = 3; i < data.length; i += 4 * SAMPLE_STRIDE) {
        sampled++;
        if (data[i] === 0) transparent++;
      }
      const pct = Math.min(100, Math.round((transparent / sampled) * 100));
      onProgress(pct);

      if (pct >= REVEAL_THRESHOLD) {
        revealed = true;
        ctx!.clearRect(0, 0, width, height);
        onProgress(100);
      }
    }

    function handlePointerDown(e: PointerEvent) {
      if (revealed) return;
      drawing = true;
      const { x, y } = getPos(e);
      scratchAt(x, y);
    }

    function handlePointerMove(e: PointerEvent) {
      if (!drawing || revealed) return;
      const { x, y } = getPos(e);
      scratchAt(x, y);

      const now = performance.now();
      if (now - lastSample > 120) {
        lastSample = now;
        computePercent();
      }
    }

    function handlePointerUp() {
      if (!drawing) return;
      drawing = false;
      computePercent();
    }

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [onProgress]);

  return (
    <div
      ref={containerRef}
      className="relative h-48 w-full select-none overflow-hidden rounded-xl border border-hairline bg-white shadow-sm"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold tabular-nums text-brand">{prizeLabel}</span>
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full touch-none" />
    </div>
  );
}
