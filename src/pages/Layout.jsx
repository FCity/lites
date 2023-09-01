import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='bg-black text-white h-[100vh]'>
      <Outlet />
    </div>
  )
}