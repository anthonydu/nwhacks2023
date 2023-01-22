import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, style }) => {
  function removeTodo(text) {
    setTodos(todos.filter((item) => item != text));
  }

  return (
    <div className="TodoList" style={{...style}}>
      <ListGroup className="mb-3 p-0">
        {todos.map((todo) => (
          <ListGroup.Item>
            <Todo text={todo} todos={todos} removeTodo={removeTodo} setTodos={setTodos} />
          </ListGroup.Item>
        ))
        }
      </ListGroup>
    </div>
  );
};

export default TodoList;
