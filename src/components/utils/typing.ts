import { useCallback, useEffect, useState } from 'react';

export enum TypePhase {
  Typing,
  Pausing,
  Deleting,
}

const TYPING_INTERVAL_MIN: number = 80;
const TYPING_INTERVAL_MAX: number = 150;
const TYPING_PAUSE_MS: number = 2000;
const DELETING_INTERVAL: number = 50;
const DELETING_PAUSE_MS: number = 500;

const getRandomTypingInterval = (): number =>
  Math.floor(Math.random() * (TYPING_INTERVAL_MAX - TYPING_INTERVAL_MIN + 1)) + TYPING_INTERVAL_MIN;

export const Typing = (
  things: string[],
): {
  typedThing: string;
  selectedThing: string;
  phase: TypePhase;
  resume: () => void;
} => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(TypePhase.Typing);
  const [typedThing, setTypedThing] = useState('');
  const resume = useCallback(() => {
    if (phase !== TypePhase.Pausing) return;
    setPhase(TypePhase.Deleting);
  }, [phase]);

  useEffect(() => {
    switch (phase) {
      case TypePhase.Typing: {
        const nextTypedThing = things[selectedIndex].slice(0, typedThing.length + 1);

        if (nextTypedThing === typedThing) {
          setPhase(TypePhase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setTypedThing(nextTypedThing);
        }, getRandomTypingInterval());

        return () => clearTimeout(timeout);
      }
      case TypePhase.Deleting: {
        if (typedThing.length === 0) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(things[nextIndex] !== undefined ? nextIndex : 0);
            setPhase(TypePhase.Typing);
          }, DELETING_PAUSE_MS);
          return () => clearTimeout(timeout);
        }

        const nextRemaining = things[selectedIndex].slice(0, typedThing.length - 1);

        const timeout = setTimeout(() => {
          setTypedThing(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timeout);
      }
      case TypePhase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setPhase(TypePhase.Deleting);
        }, TYPING_PAUSE_MS);

        return () => clearTimeout(timeout);
      }
    }
  }, [things, typedThing, selectedIndex, phase]);

  return {
    typedThing,
    phase,
    resume,
    selectedThing: things[selectedIndex],
  };
};
