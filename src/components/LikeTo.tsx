import { TypePhase, Typing } from './utils/typing';
import { useMemo } from 'react';
import cn from 'classnames';
import { shuffleThings } from './utils/utils';

const LikeTo = (): React.ReactElement => {
  const things: string[] = [
    'programming',
    'to build systems',
    'electronics',
    'to develop software',
    'tinkering with computers',
    'to learn more',
  ];
  const shuffled: string[] = useMemo(() => shuffleThings(things), []);
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
