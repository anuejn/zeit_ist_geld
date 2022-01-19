import * as React from 'react';
import { useEffect, useMemo, useState } from 'react';

const startTime = Date.now();
export function useTime(): number {
  const [time, setTime] = useState(0);
  useEffect(() => {
    let running = true;
    const callback = () => {
      setTime((Date.now() - startTime) / 1000);
      if (running) setTimeout(callback, 100);
    };
    callback();

    return () => {
      running = false;
    };
  });
  return time;
}

let sn_count = 0;
export function SideNote({ children }: { children: React.ReactNode }) {
  const id = useMemo(() => {
    sn_count += 1;

    return `sn-${sn_count}`;
  }, []);

  return (
    <>
      {' '}
      <label htmlFor={id} className={'margin-toggle sidenote-number'} />
      <input type="checkbox" id={id} className={'margin-toggle'} />
      <span className="sidenote"> {children} </span>{' '}
    </>
  );
}

export function ExperimentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <figure
      style={{
        borderTop: '1px solid darkgray',
        borderBottom: '1px solid darkgray',
        padding: '10px 0',
      }}
    >
      {children}
    </figure>
  );
}
