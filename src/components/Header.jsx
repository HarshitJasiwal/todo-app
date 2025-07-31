import { useState } from "react";

function Header({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        placeholder="Enter your task..."
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition"
      >
        Add
      </button>
       <a
        href="https://github.com/HarshitJasiwal/todo-app"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition-all duration-200"
      >GitHub</a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-5 h-5"
        ></svg>
    </form>
  );
}

export default Header;
