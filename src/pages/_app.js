import '@/styles/globals.css'
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideBar from '@/components/SideBar';

export default function App({ Component, pageProps }) {
  return (
    <ProSidebarProvider>
      <SideBar style={{ display: "fixed", top: 0, left: 0 }} />
      <Component {...pageProps} />
    </ProSidebarProvider>
  );
}
