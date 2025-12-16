import React, { useRef, useEffect, useState } from 'react';
import { Move } from 'lucide-react';

interface CameraPreviewProps {
  stream: MediaStream | null;
}

export const CameraPreview: React.FC<CameraPreviewProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 16, y: 16 }); // bottom-right default
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const rect = containerRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - (window.innerWidth - rect.right),
      y: e.clientY - (window.innerHeight - rect.bottom),
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    setDragOffset({
      x: touch.clientX - (window.innerWidth - rect.right),
      y: touch.clientY - (window.innerHeight - rect.bottom),
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const newX = Math.max(16, Math.min(window.innerWidth - 160, window.innerWidth - e.clientX + dragOffset.x - 128));
      const newY = Math.max(16, Math.min(window.innerHeight - 120, window.innerHeight - e.clientY + dragOffset.y - 96));
      setPosition({ x: newX, y: newY });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const newX = Math.max(16, Math.min(window.innerWidth - 160, window.innerWidth - touch.clientX + dragOffset.x - 128));
      const newY = Math.max(16, Math.min(window.innerHeight - 120, window.innerHeight - touch.clientY + dragOffset.y - 96));
      setPosition({ x: newX, y: newY });
    };

    const handleEnd = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragOffset]);

  if (!stream) return null;

  return (
    <div
      ref={containerRef}
      className="fixed z-50 select-none"
      style={{
        right: `${position.x}px`,
        bottom: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="relative w-32 h-24 md:w-40 md:h-30 rounded-lg overflow-hidden border-2 border-primary shadow-lg bg-card">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover transform -scale-x-100 pointer-events-none"
        />
        <div className="absolute top-1 right-1">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
          </span>
        </div>
        <div className="absolute bottom-1 left-1 bg-background/70 rounded p-0.5">
          <Move className="w-3 h-3 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};
