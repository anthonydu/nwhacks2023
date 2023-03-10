import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import Link from 'next/link';

export default function SideBar() {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Sidebar
      defaultCollapsed
      onMouseEnter={() => collapseSidebar()}
      onMouseLeave={() => collapseSidebar()}
      width="200px"
      collapsedWidth="61px"
    >
      <Menu>
        <MenuItem>
          <Link href="/" style={{ color: "black", textDecoration: "none" }}>
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 16 16"><path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z"/></svg>
            <p style={{ display: collapsed ? "none" : "inline", paddingLeft: 10 }}>Home</p>
          </Link> 
        </MenuItem>
        <MenuItem>
          <Link href="/timer" style={{ color: "black", textDecoration: "none" }}>
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 296.228 296.228"><g><path d="m167.364,48.003v-23.003h10.5c6.903,0 12.5-5.597 12.5-12.5s-5.596-12.5-12.5-12.5h-59.5c-6.903,0-12.5,5.597-12.5,12.5s5.597,12.5 12.5,12.5h10.5v23.003c-59.738,9.285-105.604,61.071-105.604,123.37-3.55271e-15,68.845 56.01,124.854 124.854,124.854s124.854-56.01 124.854-124.854c0-62.299-45.866-114.085-105.604-123.37zm-19.25,223.225c-55.06,0-99.854-44.795-99.854-99.854s44.795-99.854 99.854-99.854 99.854,44.795 99.854,99.854-44.794,99.854-99.854,99.854z"/><path d="m160.614,166.18v-58.889c0-6.903-5.597-12.5-12.5-12.5s-12.5,5.597-12.5,12.5v66.1c0,2.033 0.81,3.982 2.25,5.416l34.969,34.822c4.893,4.872 12.806,4.854 17.678-0.037 4.871-4.892 4.854-12.807-0.037-17.678l-29.86-29.734z"/></g></svg>
            <p style={{ display: collapsed ? "none" : "inline", paddingLeft: 10 }}>Timer</p>
          </Link> 
        </MenuItem>
        <MenuItem>
          <Link href="/tasks" style={{ color: "black", textDecoration: "none" }}>
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 220 220"><path d="M211.5,15.022C211.5,6.726,204.774,0,196.478,0H23.522C15.226,0,8.5,6.726,8.5,15.022v189.955 C8.5,213.274,15.226,220,23.522,220h172.955c8.297,0,15.022-6.726,15.022-15.022V15.022z M88.5,199h-49v-45h49V199z M88.5,132h-49 V88h49V132z M88.5,66h-49V21h49V66z M144.803,199.63l-26.306-26.306l11.205-11.205l15.101,15.102l23.65-23.65l11.205,11.205 L144.803,199.63z M144.803,133.03l-26.306-26.306l11.205-11.205l15.101,15.101l23.65-23.65l11.205,11.205L144.803,133.03z M144.803,66.429l-26.306-26.306l11.205-11.205l15.101,15.101l23.65-23.65l11.205,11.205L144.803,66.429z"/></svg>
            <p style={{ display: collapsed ? "none" : "inline", paddingLeft: 10 }}>Tasks</p>
          </Link> 
        </MenuItem>
        <MenuItem>
          <Link href="/studybuddies" style={{ color: "black", textDecoration: "none" }}>
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 18.018 17.712"><path d="M12.894,15.31a6.422,6.422,0,0,1-8.132-1.659c.245.021.491.038.742.038.217,0,.431-.017.644-.033a5.388,5.388,0,0,0,6.613.549l2.066.66-.671-1.984a5.277,5.277,0,0,0,1.024-3.128,4.949,4.949,0,0,0-.027-.518A5.289,5.289,0,0,0,13.9,6.312a8.567,8.567,0,0,0,.08-1.1c0-.089-.011-.176-.014-.265a6.317,6.317,0,0,1,2.223,4.53c0,.092.006.184.006.278a6.3,6.3,0,0,1-.916,3.279l1.153,3.4ZM1.153,9.628a6.309,6.309,0,0,1-.916-3.28c0-.093,0-.185.006-.279a6.4,6.4,0,0,1,12.783.117c0,.054,0,.108,0,.162a6.4,6.4,0,0,1-9.486,5.558L0,13.033Zm5.48,2.056a5.364,5.364,0,0,0,5.378-5.336c0-.14-.006-.279-.018-.417a5.38,5.38,0,0,0-10.712-.1,4.932,4.932,0,0,0-.027.518A5.284,5.284,0,0,0,2.279,9.478l-.67,1.982L3.674,10.8A5.363,5.363,0,0,0,6.633,11.685Z" transform="translate(0.791 0.5)" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/></svg>
            <p style={{ display: collapsed ? "none" : "inline", paddingLeft: 10 }}>Study Buddies</p>
          </Link> 
        </MenuItem>
        <MenuItem>
          <Link href="/livepeerportal" style={{ color: "black", textDecoration: "none" }}>
            <svg style={{ width: 20, height: 20 }} viewBox="0 0 640 680"><rect x="520" y="400" width="120" height="120" transform="rotate(-90 520 400)" fill="black"/><rect x="260" y="260" width="120" height="120" transform="rotate(-90 260 260)" fill="black"/><rect x="260" y="540" width="120" height="120" transform="rotate(-90 260 540)" fill="black"/><rect y="680" width="120" height="120" transform="rotate(-90 0 680)" fill="black"/><rect y="400" width="120" height="120" transform="rotate(-90 0 400)" fill="black"/><rect y="120" width="120" height="120" transform="rotate(-90 0 120)" fill="black"/></svg>
            <p style={{ display: collapsed ? "none" : "inline", paddingLeft: 10 }}>Livepeer Portal</p>
          </Link> 
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}