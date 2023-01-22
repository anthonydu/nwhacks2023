import Head from 'next/head';
import { useState, useEffect } from 'react';
import CreateTodo from '@/components/Tasks/CreateTodo';
import TodoList from '@/components/Tasks/TodoList';

export default function Tasks() {
  const [todos, setTodos] = useState(["Drag and drop to reorder", "Task priorities", "Due date for tasks"]);
  const [date, setDate] = useState(`${new Date().getHours()}:${("0" + new Date().getMinutes()).slice(-2)}`);

  useEffect(() => {
    setInterval(() => {
      setDate(`${new Date().getHours()}:${("0" + new Date().getMinutes()).slice(-2)}`);
    }, 60000);
  });

  return (
    <>
      <Head>
        <title>Tasks - UnDUE</title>
      </Head>
      <main style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <p style={{ color: "white", fontSize: 30, position: "fixed", top: "10%", left: "50%", transform: "translate(-50%, 0)" }}>{date}</p>
        <div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 20, borderRadius: 20 }}>
          <CreateTodo todos={todos} setTodos={setTodos}></CreateTodo>
          <TodoList todos={todos} setTodos={setTodos}></TodoList>
        </div>
      </main>
    </>
  )
}
