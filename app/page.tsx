'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  let message = "";
  let key = "";

  const [chatbotResponse, setChatbotResponse] = useState("Enter a prompt and submit first!");

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
      const data = await response.json();
      setChatbotResponse(data.message);
      console.log('Message sent successfully!');
    } else {
      setChatbotResponse(response.statusText);
      console.error('Error sending message:', response.statusText);
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#f8f6ec] text-[#606c38]">
        <div className="flex flex-col items-center flex-grow">
          <div className="p-10 w-[80%]">
            <h1 className="text-3xl font-bold">Carbon Dioxide Removal (CDR) Chatbot</h1>
            <div className="flex flex-row items-center mt-5">
              <a href="/about" className="underline decoration-dotted mr-2">About</a>
              <p className="mr-2">|</p>
              <a href="/quickstart" className="underline decoration-dotted mr-2">Quickstart</a>
            </div>
            <p className="mt-5">Enter your ChatGPT API key below to start chatting with hundreds of recent, curated CDR papers. Don't worry, we won't steal your API key.</p>
            <p><b>Note:</b> this does use 150 tokens. You get 1 million tokens for $2.</p>
            <div className="flex flex-row my-5 items-center">
              <textarea className="h-min p-1 mr-5 border-black border-[1px] rounded-lg bg-gray-100" onChange={e => key = e.target.value} placeholder="API Key" />
              <button className="p-1 h-10 border-black border-dotted border-[2px] hover:bg-gray-200 rounded-lg bg-[#d1d6c7c6]" onClick={() => updateKey(key)}>Submit</button>
            </div>
            <p>Enter your prompt:</p>
            <textarea className="p-1 h-[150px] mr-5 my-5 border-black border-[1px] rounded-lg bg-gray-100 w-full" onChange={e => message = e.target.value} placeholder="Tell me about recent CDR trends." />
            <button className="h-10 p-1 border-black border-[2px] hover:bg-gray-200 rounded-lg bg-[#d1d6c7c6] border-dotted" onClick={() => sendMessage(message)}>Submit</button>
            <p className="mt-5">Response:</p>
            <p className="mt-5 p-1 border-black border-[1px] rounded-lg bg-gray-100">{chatbotResponse}</p>
          </div>
        </div>
        <div className="w-full h-20 flex items-end justify-center">
          <p className="p-5 text-gray-500">Made with love using Next.js and Flask by Charlie Nicholson for OpenAir.</p>
        </div>
      </div>
    </>
  )
}

