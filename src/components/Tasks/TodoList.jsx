import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  function removeTodo(text) {
    setTodos(todos.filter((item) => item != text));
    // filter((element) => predicate)
  }

  return (
    <div className="TodoList">
      <ListGroup className="mb-3 p-0">
        {todos.map((todo) => (
          <ListGroup.Item>
            <Todo text={todo} removeTodo={removeTodo} />
          </ListGroup.Item>
        ))
        }
      </ListGroup>
    </div>
  );
};

export default TodoList;
