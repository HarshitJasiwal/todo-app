import ToDoItem from "./ToDoItem";

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500 italic">✨ Add your first task!</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
}

export default ToDoList;
