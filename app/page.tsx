'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [time, updateTime] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('http://localhost:7359/api/time');
  //     const jsonData = await response.json();
  //     updateTime(jsonData.time);
  //   }
  //   fetchData();
  //   const intervalId = setInterval(fetchData, 1000); // Fetch time every second

  //   return () => clearInterval(intervalId); // Cleanup interval on component unmount

  // }, []);

  const sendData = async (message: string) => {
    const response = await fetch('http://localhost:7359/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      console.log('Message sent successfully');
    } else {
      console.error('Error sending message:', response.statusText);
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex flex-col items-center flex-grow">
          <div className="p-10 w-[80%]">
            <h1 className="text-3xl font-bold">Carbon Dioxide Removal (CDR) Chatbot</h1>
            <p className="mt-5">Enter your ChatGPT API key below to start chatting with hundreds of recent, curated CDR papers.</p>
            <input className="p-1 mr-5 my-5 border-black border-[1px] rounded-lg bg-gray-100" type="text" placeholder="API Key" />
            <button className="p-1 mt-5 border-black border-[1px] hover:bg-gray-200 rounded-lg bg-gray-300" onClick={() => sendData("API key here")}>Submit</button>
            <p>Enter your prompt:</p>
            <textarea className="p-1 h-[150px] mr-5 my-5 border-black border-[1px] rounded-lg bg-gray-100 w-full" placeholder="Tell me about recent CDR trends."></textarea>
            <button className="p-1 border-black border-[1px] hover:bg-gray-200 rounded-lg bg-gray-300" onClick={() => sendData("Message here")}>Submit</button>
          </div>
        </div>
        <div className="w-full h-20 flex items-end justify-center">
          <p className="p-5 text-gray-600">Made with love using Next.js and Flask by Charlie Nicholson for OpenAir.</p>
        </div>
      </div>
    </>
  )
}

