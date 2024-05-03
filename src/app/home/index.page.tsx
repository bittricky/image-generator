"use client";

import React, { useState } from "react";

import { GeneratorForm, LoadingIndicator, ImageDisplay } from "@/components";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    setIsLoading(true);

    try {
      const res = await fetch("/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (res.ok) {
        const data = await res.json();
        setImageUrl(data[0].url);
      }
    } catch (error) {
      console.error("Error generating the image:", error);
      alert("Failed to generate the image.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="text-center font-custom bg-gray-50 text-gray-800 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-2xl p-8 bg-gray-50 rounded-lg shadow transition-shadow duration-300">
          <h1 className="text-3xl font-bold">Image Generator</h1>
          <p className="mt-4 text-gray-600">
            <a
              href="https://openai.com/blog/dall-e/"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              DALL·E 3
            </a>{" "}
            from{" "}
            <a
              href="https://openai.com/"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              OpenAI
            </a>
            . It generates an image based on the description you provide.
          </p>

          <GeneratorForm
            prompt={prompt}
            setPrompt={setPrompt}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />

          {isLoading && <LoadingIndicator />}

          <ImageDisplay imageUrl={imageUrl} prompt={prompt} />
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Home";

export default Home;
