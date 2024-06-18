'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, updateTime] = useState(1);

  useEffect(() => {

    // setCount((count) => count + 1);
    updateTime(time + 1)

  }, [time]);

  return (
    <>
      <h1>Time keeper</h1>
      <p>{time}</p>
    </>
  )
}