'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, updateTime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://cdr.cnicholson.hackclub.app/api/time');
      const jsonData = await response.json();
      updateTime(jsonData.time);
    }
    fetchData();
  }, [time]);

  return (
    <>
      <h1>Time keeper</h1>
      <p>{time}</p>
    </>
  )
}