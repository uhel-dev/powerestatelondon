"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
	const prefersReduced = useReducedMotion();
	if (prefersReduced) return <>{children}</>;
	return (
		<motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay, duration: 0.5 }}>
			{children}
		</motion.div>
	);
} 