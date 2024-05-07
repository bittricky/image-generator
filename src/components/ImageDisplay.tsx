import React from "react";
interface Props {
  imageUrl: string;
  prompt: string;
}

export const ImageDisplay: React.FC<Props> = ({ imageUrl, prompt }) => {
  return (
    <div className="relative image-container mt-5 text-center flex justify-center">
      <img
        src={imageUrl}
        alt="Generated from OpenAI"
        className="generated-image max-w-full rounded-lg inline-block transition-transform duration-300 hover:scale-105"
      />

      <div className="image-overlay absolute inset-0 bg-black bg-opacity-40 text-white flex items-center justify-center text-center rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="prompt-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-white w-4/5">
          {prompt}
        </div>
        <a
          href={imageUrl}
          download={`generated-image-${Date.now()}.jpg`}
          className="download-icon absolute top-2.5 right-2.5 w-6 h-6 fill-current"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 20h14v-2H5v2zm7-18L5.33 8.67 6.75 10l4.25-4.25V16h2V5.75L17.25 10l1.42-1.41L12 2z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

ImageDisplay.displayName = "ImageDisplay";
