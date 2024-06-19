'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const updateKey = async (message: string) => {
    const response = await fetch('http://localhost:7359/api/send-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      console.log('API key sent successfully!');
    } else {
      console.error('Error sending API key:', response.statusText);
    }
  }

  const sendMessage = async (message: string) => {
    const response = await fetch('http://localhost:7359/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (response.ok) {
      console.log('Message sent successfully!');
    } else {
      console.error('Error sending message:', response.statusText);
    }
  }

  let message = "";
  let key = "";
  let response = "Enter a prompt!";

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#f1faee] text-[#606c38">
        <div className="flex flex-col items-center flex-grow">
          <div className="p-10 w-[80%]">
            <h1 className="text-3xl font-bold">Carbon Dioxide Removal (CDR) Chatbot</h1>
            <p className="mt-5">Enter your ChatGPT API key below to start chatting with hundreds of recent, curated CDR papers.</p>
            <div className="flex flex-row my-5 items-center">
              <textarea className="h-min p-1 mr-5 border-black border-[1px] rounded-lg bg-gray-100" onChange={e => key = e.target.value} placeholder="API Key" />
              <button className="p-1 h-10 border-black border-[1px] hover:bg-gray-200 rounded-lg bg-gray-300" onClick={() => updateKey(key)}>Submit</button>
            </div>
            <p>Enter your prompt:</p>
            <textarea className="p-1 h-[150px] mr-5 my-5 border-black border-[1px] rounded-lg bg-gray-100 w-full" onChange={e => message = e.target.value} placeholder="Tell me about recent CDR trends." />
            <button className="p-1 border-black border-[1px] hover:bg-gray-200 rounded-lg bg-gray-300" onClick={() => sendMessage(message)}>Submit</button>
            <p className="mt-5">Response:</p>
            <p className="mt-5 p-1 border-black border-[1px] rounded-lg bg-gray-100">{response}</p>
          </div>
        </div>
        <div className="w-full h-20 flex items-end justify-center">
          <p className="p-5 text-gray-600">Made with love using Next.js and Flask by Charlie Nicholson for OpenAir.</p>
        </div>
      </div>
    </>
  )
}

