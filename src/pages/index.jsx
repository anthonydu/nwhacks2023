import Head from 'next/head';
import { useState, useEffect } from 'react';
import TodoList from '../components/Tasks/TodoList';
import { ListGroup } from "react-bootstrap";


export default function Home({ todos }) {
  const [date, setDate] = useState(`${new Date().getHours()}:${("0" + new Date().getMinutes()).slice(-2)}`);

  useEffect(() => {
    setInterval(() => {
      setDate(`${new Date().getHours()}:${("0" + new Date().getMinutes()).slice(-2)}`);
    }, 60000);
  });

  return (
    <>
      <Head>
        <title>Home - UnDUE</title>
      </Head>
      <main style={{ position: "fixed", top: 0, left: 0, height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "fixed", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: 20, padding: 20 }}>
          <p style={{ fontSize: 100, color: "white", lineHeight: 1 }}>{date}</p>
          <p style={{ color: "white", marginBottom: 0 }}>"Action is the foundational key to all success"</p>
        </div>
        <div style={{ position: "fixed", left: 20, bottom: 20 }}>
          <ListGroup className="mb-3 p-0">
          {todos.map((todo) => (
            <ListGroup.Item>
              <p className="mb-0">{todo}</p>
            </ListGroup.Item>
          ))
          }
        </ListGroup>
        </div>
      </main>
    </>
  )
}
