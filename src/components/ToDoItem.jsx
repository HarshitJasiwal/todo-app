import { useState } from "react";

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 text-indigo-600"
        />
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 px-3 py-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        ) : (
          <span
            className={`flex-1 text-lg ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="text-sm text-indigo-600 hover:text-indigo-800 transition"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-sm text-red-500 hover:text-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
