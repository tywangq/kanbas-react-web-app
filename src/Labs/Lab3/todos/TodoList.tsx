import TodoItem from "./TodoItem";
import todos from "./todos.json";

const TodoList = () => {
  return (
    <>
      <h4>Todo List</h4>
      <ul className="list-group">
        {todos.map(todo => <TodoItem todo={todo} />)}
      </ul> <hr />
    </>
  );
}

export default TodoList;
