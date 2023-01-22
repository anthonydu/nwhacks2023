import '@/styles/globals.css'
import { useState } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '@/components/SideBar';
import LivepeerPlayer from "@/components/LivepeerPlayer";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App({ Component, pageProps }) {
  const [id, setId] = useState("bafybeigtqixg4ywcem3p6sitz55wy6xvnr565s6kuwhznpwjices3mmxoe");
  const [todos, setTodos] = useState(["Drag and drop to reorder", "Task priorities", "Due date for tasks"]);

  return (
    <ProSidebarProvider>
      <SideBar style={{ display: "fixed", top: 0, left: 0 }} />
      <LivepeerPlayer playbackId={id} />
      <Component {...pageProps} id={id} setId={setId} todos={todos} setTodos={setTodos} />
    </ProSidebarProvider>
  );
}
