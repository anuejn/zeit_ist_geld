import React, { useState } from "react";
import { ExperimentWrapper, useTime } from "./Components";
import { Line } from "rc-progress";
import Clock from 'react-clock';

export const wages: Record<string, number> = {
  "Näher:innen in Bangladesch": 0.29,
  "Mindestlohn in Deutschland": 9.82,
  "durchschnittliche Einkommen von Arbeitnehmer:innen in Deutschland": 18.15,
  "Durchschnittsgehalt für Professor:innen in Deutschland": 38.69,
  "Elon Musk": 1600000,
};

export function formatNumber(x: number, count = 0) {
  const required = Math.ceil(-Math.log10(x));
  if (!isFinite(required)) {
    return (0).toFixed(count)
  }
  return x.toFixed(Math.max(count, required))
}


export function WageEntry({ wage, setWage }: { wage: number, setWage: (wage: number) => void }): JSX.Element {
  const [timeBase, setTimeBase] = useState<number>(1)
  const [perWeek, setPerWeek] = useState<number>(40)

  return (
    <ExperimentWrapper>
      <p>
        <label htmlFor="wage">Dein Lohn: </label><br/>
        <input style={{width: 100}} id="wage" type="number" value={(wage * timeBase).toFixed(2)} onChange={(e) => setWage((parseFloat(e.target.value) || 0) / timeBase)}/>€

        <input type="radio" id="hour" name="timeBase" onClick={() => setTimeBase(1)} checked={timeBase == 1}/>
        <label htmlFor="hour">Pro Stunde</label>

        <input type="radio" id="month" name="timeBase" onClick={() => setTimeBase((perWeek / 5) * 21)} checked={timeBase == (perWeek / 5) * 21}/>
        <label htmlFor="month">Pro Monat</label>

        <input type="radio" id="year" name="timeBase" onClick={() => setTimeBase((perWeek / 5) * 21 * 12)} checked={timeBase == (perWeek / 5) * 21 * 12}/>
        <label htmlFor="year">Pro Jahr</label><br /><br />
      </p>

      {timeBase != 1 && <>
        <p>
          <label htmlFor="perWeek">Stunden Pro Woche: </label><br/>
          <input id="perWeek" type="number" value={perWeek.toFixed(2)} onChange={(e) => {
            setPerWeek(parseFloat(e.target.value) || 0)
          }}/>
        </p>
        <p>
          Entspricht <b>{wage.toFixed(2)} €/h</b>
        </p>
      </>}
    </ExperimentWrapper>
  );
}


export function EarnProgress({ wage, target = 1 }: {
  wage: number;
  target?: number;
}): JSX.Element {
  const [startTime, setStartTime] = useState<null | number>(null);
  const time = useTime();
  const allWages = { ...wages, "Du": wage };

  return (
    <ExperimentWrapper>
      {Object.entries(allWages).map(([name, wagePerHour]) => {
        const elapsed = startTime ? time - startTime : 0;
        const wagePerSecond = wagePerHour / 60 / 60;
        let money = Math.min(wagePerSecond * elapsed, target);
        let elapsedPerson = money == target ? target / wagePerSecond : elapsed
        return (
          <div key={name}>
            {name} ({formatNumber(money, 2)} € in {formatNumber(elapsedPerson)}s)
            <Line percent={(money / target) * 100} />
          </div>
        );
      })}

      <button onClick={() => setStartTime(time)}>Start</button>
    </ExperimentWrapper>
  );
}

export function SpeedyClocks({wage}: {wage: number}) {
  const allWages = { ...wages, "Du": wage };
  const [startTime, setStartTime] = useState<null | number>(null);
  const [multiplier, setMultiplier] = useState(1);
  const time = useTime();

  return (
    <ExperimentWrapper>
      {Object.entries(allWages).map(([name, wagePerHour]) => {
        const elapsed = startTime ? time - startTime : 0;
        
        return (
          <div key={name}>
            <Clock value={new Date(elapsed)} />
          </div>
        );
      })}

      <button onClick={() => setStartTime(time)}>Start</button>
    </ExperimentWrapper>
  );  
}
