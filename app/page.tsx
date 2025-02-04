"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{ [key: string]: number | string }>({});

  const parseNumbers = (input: string): number[] =>
    input.split(/,\s*/g).map(Number).filter(n => !isNaN(n));

  const calculateStats = () => {
    const numbers = parseNumbers(input);
    if (numbers.length === 0) return;

    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const sorted = [...numbers].sort((a, b) => a - b);
    const median = sorted.length % 2 === 0 
      ? (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2
      : sorted[Math.floor(sorted.length / 2)];

    const modeMap: { [key: number]: number } = {};
    numbers.forEach(num => modeMap[num] = (modeMap[num] || 0) + 1);
    const maxCount = Math.max(...Object.values(modeMap));
    const mode = maxCount === 1 ? "None" : Object.keys(modeMap).filter(k => modeMap[+k] === maxCount).join(", ");

    const range = Math.max(...numbers) - Math.min(...numbers);
    const variance = numbers.reduce((acc, n) => acc + (n - mean) ** 2, 0) / numbers.length;
    const stdDev = Math.sqrt(variance);

    setResults({ Mean: mean.toFixed(2), Median: median, Mode: mode, Range: range, Variance: variance.toFixed(2), "Standard Deviation": stdDev.toFixed(2) });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="p-6 max-w-lg w-full rounded-xl backdrop-blur-lg bg-white/10 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-3">📊 Statistics Calculator</h1>
        <p className="text-gray-300 text-sm text-center mb-4">Enter numbers separated by commas:</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 5, 10, 15, 20"
            className="flex-1 p-2 bg-white/20 text-white placeholder-gray-300 rounded-md outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            onClick={calculateStats}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md transition">
            Calculate
          </button>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {Object.entries(results).map(([key, value]) => (
            <div key={key} className="bg-white/10 p-3 rounded-md text-center font-semibold">
              {key}: <span className="font-normal text-gray-300">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
