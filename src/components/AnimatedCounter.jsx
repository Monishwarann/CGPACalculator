import React, { useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

/**
 * AnimatedCounter Component
 * Animates a numeric value smoothly with customizable precision and suffix/prefix.
 */
export default function AnimatedCounter({ value, decimals = 2, prefix = "", suffix = "", className = "" }) {
  const numericValue = typeof value === "number" ? value : parseFloat(value) || 0;

  const spring = useSpring(0, {
    stiffness: 75,
    damping: 18,
    restDelta: 0.001
  });

  const displayValue = useTransform(spring, (latest) => {
    return `${prefix}${latest.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    spring.set(numericValue);
  }, [numericValue, spring]);

  return <motion.span className={className}>{displayValue}</motion.span>;
}
