"use client";

import React, { useState } from "react";

import { GeneratorForm } from "@/components/GeneratorForm";
import { LoadingIndicator } from "@/components/LoadingIndicator";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
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
        </div>
      </div>
    </div>
  );
};

Home.displayName = "Home";

export default Home;
