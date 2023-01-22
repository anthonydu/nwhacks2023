import '@/styles/globals.css'
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '@/components/SideBar';
import LivepeerPlayer from "@/components/LivepeerPlayer";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App({ Component, pageProps }) {
  return (
    <ProSidebarProvider>
      <SideBar style={{ display: "fixed", top: 0, left: 0 }} />
      <LivepeerPlayer />
      <Component {...pageProps} />
    </ProSidebarProvider>
  );
}
