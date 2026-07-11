"use client";;
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const CreepyButton = ({
    children,
    className,
    coverClassName,
    onClick,
    href,
    size = "default",
    simple,
    ...props
}) => {
    const eyesRef = useRef(null);
    const [eyeCoords, setEyeCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const updateEyes = (e) => {
        const userEvent =
            "touches" in e ? (e).touches[0] : (e);

        if (!eyesRef.current) return;

        const eyesRect = eyesRef.current.getBoundingClientRect();
        const eyesCenter = {
            x: eyesRect.left + eyesRect.width / 2,
            y: eyesRect.top + eyesRect.height / 2,
        };

        const cursor = {
            x: userEvent.clientX,
            y: userEvent.clientY,
        };

        const dx = cursor.x - eyesCenter.x;
        const dy = cursor.y - eyesCenter.y;
        const angle = Math.atan2(-dy, dx) + Math.PI / 2;

        const visionRangeX = 180;
        const visionRangeY = 75;
        const distance = Math.hypot(dx, dy);

        const x = (Math.sin(angle) * Math.min(distance, visionRangeX)) / visionRangeX;
        const y = (Math.cos(angle) * Math.min(distance, visionRangeY)) / visionRangeY;

        setEyeCoords({ x, y });
    };

    const resetEyes = () => {
        setEyeCoords({ x: 0, y: 0 });
        setIsHovered(false);
    };

    const pupilStyle = {
        transform: `translate(calc(-50% + ${eyeCoords.x * 50}%), calc(-50% + ${eyeCoords.y * 50}%))`,
    };

    const isSmall = size === "sm";

    const eyeSize = isSmall ? "0.5em" : "0.75em";
    const pupilSize = isSmall ? "0.25em" : "0.375em";
    const coverPadding = isSmall ? "px-3 py-1.5" : "px-4 py-2";
    const placeholderPadding = isSmall ? "px-3 py-1.5" : "px-4 py-2";
    const textClass = isSmall ? "text-xs" : "text-sm";
    const minWidth = isSmall ? "min-w-[6em]" : "min-w-[9em]";

    if (simple) {
        const simpleBaseClass = cn(
            "rounded-xl text-black font-bold tracking-wider cursor-pointer outline-none select-none inline-flex items-center justify-center gap-2",
            "bg-white/80 backdrop-blur-[28px]",
            "hover:bg-white/90",
            coverPadding,
            textClass,
            minWidth,
            className
        );

        const handlers = {
            onMouseEnter: () => {},
            onMouseLeave: () => {},
        };

        if (href) {
            return (
                <Link href={href} className={simpleBaseClass}>
                    {children}
                </Link>
            );
        }

        return (
            <button className={simpleBaseClass} onClick={onClick} {...props}>
                {children}
            </button>
        );
    }

    const sharedContent = (
        <>
            <span
                ref={eyesRef}
                className="absolute flex items-center gap-[0.375em] right-[1em] bottom-[0.5em] h-[0.75em] z-0 pointer-events-none"
                style={{ height: isSmall ? "0.5em" : undefined }}
            >
                <motion.span
                    className="relative bg-white rounded-full overflow-hidden"
                    style={{ width: eyeSize, height: eyeSize }}
                    animate={{ height: [eyeSize, eyeSize, "0em", eyeSize] }}
                    transition={{
                        duration: 3,
                        times: [0, 0.92, 0.96, 1],
                        repeat: Infinity,
                        ease: "linear",
                    }}>
                    <span
                        className="absolute top-1/2 left-1/2 bg-background rounded-full transition-transform duration-75 ease-out"
                        style={{ ...pupilStyle, width: pupilSize, height: pupilSize }}
                    />
                </motion.span>
                <motion.span
                    className="relative bg-white rounded-full overflow-hidden"
                    style={{ width: eyeSize, height: eyeSize }}
                    animate={{ height: [eyeSize, eyeSize, "0em", eyeSize] }}
                    transition={{
                        duration: 3,
                        times: [0, 0.92, 0.96, 1],
                        repeat: Infinity,
                        ease: "linear",
                    }}>
                    <span
                        className="absolute top-1/2 left-1/2 bg-background rounded-full transition-transform duration-75 ease-out"
                        style={{ ...pupilStyle, width: pupilSize, height: pupilSize }}
                    />
                </motion.span>
            </span>
            <motion.span
                className={cn(
                    "absolute inset-0 block rounded-xl bg-blue-500 text-current font-bold tracking-wider",
                    "shadow-[inset_0_0_0_0.125em_rgba(0,0,0,1)]",
                    "flex items-center justify-center",
                    "origin-[1.25em_50%]",
                    coverPadding,
                    textClass,
                    coverClassName
                )}
                animate={{
                    rotate: isHovered ? -12 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.8,
                }}>
                {children}
            </motion.span>
            <span
                className={cn(
                    "block opacity-0 font-bold tracking-wider",
                    placeholderPadding,
                    textClass,
                    minWidth
                )}>
                {children}
            </span>
        </>
    );

    const baseClass = cn(
        "relative rounded-xl cursor-pointer outline-none select-none group tap-highlight-transparent",
        "bg-background/20 backdrop-blur-[28px]",
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-400",
        className
    );

    const handlers = {
        onMouseMove: (e) => { updateEyes(e); setIsHovered(true); },
        onTouchMove: updateEyes,
        onMouseLeave: resetEyes,
        onFocus: () => setIsHovered(true),
        onBlur: () => setIsHovered(false),
    };

    if (href) {
        return (
            <Link href={href} className={baseClass} {...handlers}>
                {sharedContent}
            </Link>
        );
    }

    return (
        <button className={baseClass} onClick={onClick} {...handlers} {...props}>
            {sharedContent}
        </button>
    );
};

export default CreepyButton;
