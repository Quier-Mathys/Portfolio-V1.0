import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = "", 
  glareColor = "rgba(255, 255, 255, 0.1)" 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    // Calculate glare position (percentage)
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;

    // Max rotation degrees
    const maxRotate = 15;

    setRotateX(yPct * -maxRotate);
    setRotateY(xPct * maxRotate);
    setGlarePosition({ x: glareX, y: glareY });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setOpacity(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="w-full h-full relative"
      >
        {children}
        
        {/* 3D Glare Effect */}
        <div 
          className="absolute inset-0 z-50 pointer-events-none rounded-2xl overflow-hidden"
          style={{ transform: 'translateZ(1px)' }}
        >
          <div 
            className="absolute inset-0 w-full h-full transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent 80%)`,
              opacity: opacity,
              mixBlendMode: 'overlay',
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;