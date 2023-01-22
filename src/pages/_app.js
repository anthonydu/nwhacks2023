import '@/styles/globals.css';
import { useEffect } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '@/components/SideBar';
import LivepeerPlayer from "../components/LivepeerPlayer";


export default function App({ Component, pageProps }) {
  let windowHeight, windowWidth;

  useEffect(() => {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  }, []);

  return (
    <ProSidebarProvider>
      <SideBar style={{ display: "fixed", top: 0, left: 0 }} />
      <LivepeerPlayer aspectRatio={`${windowWidth}to${windowHeight}`}/>
      <Component {...pageProps} />
    </ProSidebarProvider>
  );
}
