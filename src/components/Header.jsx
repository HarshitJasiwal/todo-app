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
    </form>
  );
}

export default Header;
