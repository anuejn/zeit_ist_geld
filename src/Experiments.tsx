import React, { HTMLProps, useEffect, useRef, useState } from "react";
import { ExperimentWrapper, SideNote, useTime } from "./Components";
import { Line } from "rc-progress";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

export const wages: Record<string, number> = {
  "Näher:in in Bangladesch": 0.29,
  "Mensch mit Mindestlohn in Deutschland": 9.8200001,
  "durchschnittliche Arbeitnehmer:in in Deutschland": 18.15,
  "Professor:in in Deutschland": 38.69,
  "Elon Musk": 1600000
};

export const plurals: Record<string, string> = {
  "Näher:in in Bangladesch": "Näher:innen in Bangladesch",
  "Mensch mit Mindestlohn in Deutschland": "Menschen mit deutschem Mindestlohn",
  "durchschnittliche Arbeitnehmer:in in Deutschland": "durchschnittliche deutsche Arbeitnehmer:innen",
  "Professor:in in Deutschland": "deutsche Profesor:innen",
  "Elon Musk": "Elon Musk",
  "Du": "x Du"
};

export function formatNumber(x: number, count = 0) {
  const required = Math.ceil(-Math.log10(x));
  if (!isFinite(required)) {
    return (0).toFixed(count).replace(".", ",");
  }
  return x.toFixed(Math.max(count, required)).replace(".", ",");
}

export function NumberInput({value, onChange, ...props}: HTMLProps<HTMLInputElement> & {value: number, onChange: (x: number) => void}) {
  const [text, setText] = useState<null | string>(null);
  const timeout = useRef<null | NodeJS.Timeout>(null);
  useEffect(() => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setText(null)
    }, 5000)
  }, [value, text])
  
  return <input
    {...props}
    type="text"
    value={text !== null ? text : value.toFixed(2).replace(".", ",")}
    onChange={(e) => {
      const parsed = parseFloat(e.target.value.replace(",", "."));
      console.log(e.target.value)
      if (parsed) onChange(parsed)
      setText(e.target.value)
    }}
    onBlur={(e) => {
      setText(null);
    }}
    onKeyDown={(e) => {
      if (e.key == "Enter") {
        setText(null);
      }
    }}
  />

}

export function WageEntry({ wage, setWage }: { wage: number, setWage: (wage: number) => void }): JSX.Element {
  const [perDay, setPerDay] = useState<number>(8);
  const [timeBase, setTimeBase] = useState<number>(1 / perDay);

  const radioProps = {
    type: "radio",
    style: { display: "none" }
  };
  const labelStyle = {
    padding: "2px 8px",
    borderRadius: 5,
    lineHeight: 2,
  };

  return (
    <ExperimentWrapper>
      <p>
        <NumberInput 
          style={{ width: 80 }} 
          id="wage" 
          value={(wage * timeBase * perDay)} 
          onChange={(x) => setWage(x / (timeBase * perDay))} 
        /> € {' '}

        <input {...radioProps} id="hour" name="timeBase" onClick={() => setTimeBase(1 / perDay)}
               checked={timeBase == (1 / perDay)} />
        <label htmlFor="hour" style={{ ...labelStyle }}>Pro Stunde</label>

        <input {...radioProps} id="month" name="timeBase" onClick={() => setTimeBase(21)} checked={timeBase == 21} />
        <label htmlFor="month" style={labelStyle}>Pro Monat</label>

        <input {...radioProps} id="year" name="timeBase" onClick={() => setTimeBase(21 * 12)}
               checked={timeBase == 21 * 12} />
        <label htmlFor="year" style={labelStyle}>Pro Jahr</label><br /><br />

      {timeBase != (1 / perDay) && <>
        <>
          <NumberInput
            id="perWeek"
            value={(perDay * 5)}
            style={{ width: 80 }}
            onChange={(x) => setPerDay(x as number / 5)}
          />
          <label htmlFor="perWeek"> Stunden Pro Woche</label>
        </>
        <p>
          Entspricht <b>{wage.toFixed(2)} €/h</b>
        </p>
      </>}
      </p>
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
    <ExperimentWrapper style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <button onClick={() => setStartTime(time)} style={{
        padding: "3px 8px",
        margin: "0 0 20px",
        flexGrow: 0,
        background: "transparent",
        border: "1px solid",
        borderRadius: 10,
        width: 100,
      }}>{startTime ? "neu starten" : "starten"}</button>

      {Object.entries(allWages).map(([name, wagePerHour]) => {
        const elapsed = startTime ? time - startTime : 0;
        const wagePerSecond = wagePerHour / 60 / 60;
        let money = Math.min(wagePerSecond * elapsed, target);
        let elapsedPerson = money == target ? target / wagePerSecond : elapsed;
        return (
          <div key={name} style={{width: '100%'}}>
            {name} ({formatNumber(money, 2)} € in {formatNumber(elapsedPerson)}s)
            <Line percent={(money / target) * 100} />
          </div>
        );
      })}
    </ExperimentWrapper>
  );
}

export function SpeedyClocks({ wage }: { wage: number }) {
  const allWages = { "Du": wage, ...wages };
  const [startTime, setStartTime] = useState<null | number>(null);
  const [multiplier, setMultiplier] = useState(1);
  const time = useTime();

  return (
    <ExperimentWrapper style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-around' }}>
      {Object.entries(allWages).map(([name, wagePerHour]) => {
        const elapsed = startTime ? time - startTime : 0;

        return (
          <div key={name} onClick={() => {
            setStartTime(time);
            setMultiplier(wagePerHour);
          }}
               style={{
                 padding: 10,
                 margin: 20,
                 textAlign: "center",
                 background: multiplier == wagePerHour ? "#0002" : "transparent",
                 borderRadius: 10,
                 flexBasis: 0
               }}>
            <Clock
              value={new Date((elapsed * multiplier / wagePerHour * 1000) + new Date("2020-01-01T11:00:00Z").valueOf())} />
            <span style={{ paddingTop: 3, display: "inline-block" }}>{name}</span>
          </div>
        );
      })}
    </ExperimentWrapper>
  );
}

export function Comparison({ value }: { value: number }): JSX.Element {
  const comparisons = {
    0.000000125: (x: number) => <b>entspricht dem Gewichtsanteil von {formatNumber(x, 1)} Haaren)</b>, // http://www.personenwaage-online.de/wie-viel-wiegt/wie-viel-wiegen-haare-und-wie-viel-nasse/
    0.0006: (x: number) => <>(entspricht dem Gewichtsanteil von {formatNumber(x, 1)} Fingern)</>, // http://www.arsmartialis.com/index.html?name=http://www.arsmartialis.com/faq/m_anteil.html
    0.0084: (x: number) => <>(entspricht dem Gewichtsanteil von {formatNumber(x, 1)} Händen)</>, // http://www.arsmartialis.com/index.html?name=http://www.arsmartialis.com/faq/m_anteil.html
    0.0197: (x: number) => <>(entspricht dem Gewichtsanteil von {formatNumber(x, 1)} Füßen)</>, // http://www.arsmartialis.com/index.html?name=http://www.arsmartialis.com/faq/m_anteil.html
    0.187: (x: number) => <>(entspricht dem Gewichtsanteil von {formatNumber(x, 1)} Beinen)</>, // https://de.wikipedia.org/wiki/Untere_Extremit%C3%A4t
    0.5: () => <></>,
    24: (x: number) => <>(ca. {formatNumber(x, 1)} Schulklassen)</>,
    10000: (x: number) => <>(ca. {formatNumber(x, 1)} Fußballstadien)</>,
    45773: (x: number) => <>(ca. {formatNumber(x, 1)}x die Einwohnerzahl Marburgs)</>,
    83628: (x: number) => <>(ca. {formatNumber(x, 1)}x die Einwohnerzahl Gießens)</>,
    990000: (x: number) => <>({formatNumber(x, 1)}x die Einwohnerzahl des Saarlandes)</>,
    5513130: (x: number) => <b>(ca. die Einwohnerzahl Finnlands)</b>
  };

  const compKeys = Object.keys(comparisons).sort((x, y) => parseFloat(y) - parseFloat(x));
  for (const k of compKeys) {
    if (parseFloat(k) <= value) {
      return (comparisons[k] as (x: number) => JSX.Element)(value / parseFloat(k));
    }
  }
  return <></>;
}

export function ManyHumans({ wage }: { wage: number }) {
  const allWages = { "Du": wage, ...wages };
  const [multiplier, setMultiplier] = useState(wage);

  return <ExperimentWrapper style={{ display: "flex", flexWrap: "wrap" }}>
    {Object.entries(allWages).map(([name, wagePerHour], i) => {
      const x = multiplier / wagePerHour;
      return (
        <>
          <div key={name} onClick={() => {
            setMultiplier(wagePerHour);
          }}
               style={{
                 padding: 5,
                 margin: 20,
                 textAlign: "center",
                 background: multiplier == wagePerHour ? "#0002" : "transparent",
                 borderRadius: 10,
                 flexBasis: "300px",
                 height: 100,
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 flexGrow: 1,
               }}>
            <span style={{ paddingTop: 3, display: "inline-block" }}>
              {formatNumber(x, 0)} {x == 1 ? name : plurals[name]} <br />
              <Comparison value={x} />
            </span>
          </div>
          {(i != Object.keys(allWages).length - 1) && <div key={i} style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>≙</div>}
        </>

      );
    })}

  </ExperimentWrapper>;
}
