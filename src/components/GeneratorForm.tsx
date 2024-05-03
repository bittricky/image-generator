import React from "react";

interface Props {
  prompt: string;
  setPrompt: () => void;
  handleSubmit: (e: any) => void;
  isLoading: boolean;
}

export const GeneratorForm: React.FC<Props> = ({
  prompt,
  setPrompt,
  handleSubmit,
  isLoading,
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="input-form flex flex-col gap-4 mb-8"
    >
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a description..."
        className="input-prompt p-3 text-base border-2 border-gray-300 rounded-full focus:border-black focus:outline-none"
      />

      <button
        type="submit"
        className={`submit-button py-3 px-6 text-base bg-black text-white rounded-full cursor-pointer transition-colors duration-300 ${
          isLoading ? "bg-gray-400 cursor-not-allowed" : "hover:bg-gray-900"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
};

GeneratorForm.displayName = "GeneratorForm";
