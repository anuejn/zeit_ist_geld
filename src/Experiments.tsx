import React, { useState } from 'react';
import { ExperimentWrapper, useTime } from './Components';
import { Line } from 'rc-progress';

export function EarnProgress({
  wages,
  target = 10,
}: {
  wages: Record<string, number>;
  target?: number;
}): JSX.Element {
  const [startTime, setStartTime] = useState<null | number>(null);
  const time = useTime();

  return (
    <ExperimentWrapper>
      {Object.entries(wages).map(([name, wagePerHour]) => {
        const elapsed = startTime ? time - startTime : 0;
        const wagePerSecond = wagePerHour / 60 / 60;
        const money = Math.min(wagePerSecond * elapsed, target);
        return (
          <div key={name}>
            {name} ({money.toFixed(2)} €)
            <Line percent={(money / target) * 100} />
          </div>
        );
      })}

      <button onClick={() => setStartTime(time)}>Start</button>
    </ExperimentWrapper>
  );
}
