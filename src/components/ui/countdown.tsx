'use client';

import { useEffect, useState } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);
  if (!mounted) return null;
  const units = [
    { label: 'Dias', value: timeLeft.days },
    { label: 'Horas', value: timeLeft.hours },
    { label: 'Min', value: timeLeft.minutes },
    { label: 'Seg', value: timeLeft.seconds },
  ];
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
      {units.map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="flex size-12 items-center justify-center rounded-lg border border-leadership-orange/30 bg-slate-900/80 text-xl font-bold text-white backdrop-blur-sm sm:size-14 sm:text-2xl lg:size-16 lg:text-3xl">
            {String(unit.value).padStart(2, '0')}
          </div>
          <span className="mt-1 text-xs font-medium text-slate-400 sm:mt-2 sm:text-sm">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}