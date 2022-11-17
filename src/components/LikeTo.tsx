import { TypePhase, Typing } from './Typing';
import { useMemo } from 'react';
import cn from 'classnames';

const shuffle = (things: string[]): string[] => {
  let index = things.length;
  let randomIndex;

  while (index !== 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;
    [things[index], things[randomIndex]] = [things[randomIndex], things[index]];
  }

  return things;
};

const LikeTo = (): React.ReactElement => {
  const things: string[] = [
    'to code stuff',
    'to build systems',
    'electronics',
    'to develop software',
    'computers',
    'learning new things',
  ];
  const shuffled: string[] = useMemo(() => shuffle(things), []);
  const { typedThing, selectedThing, phase } = Typing(shuffled);

  return (
    <h2>
      <span className='text-white text-2xl className="mb-2 lg:mb-0'>I like </span>
      <span
        className={cn('text-blue-400 min-h-[10rem] text-4xl', {
          'end-cursor': phase !== TypePhase.Deleting,
          blinking: phase === TypePhase.Pausing,
        })}
        aria-label={selectedThing}
      >
        {typedThing}
      </span>
    </h2>
  );
};

export default LikeTo;
