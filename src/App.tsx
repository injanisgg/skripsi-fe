import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './components/SideBar';
import UnnesLogo from './images/unnes-logo.png';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-50'>
      {/* top bar mobile */}
      <header className='sticky top-0 z-20 flex items-center gap-3 bg-white px-4 py-3 md:justify-center md:gap-16'>
        <button
          aria-label='Open menu'
          onClick={() => setOpen(true)}
          className='rounded-xl hover:border pr-3 py-1.5 md:hidden'
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <span className='flex items-center gap-2'>
          <img src={UnnesLogo} alt="Unnes logo" className='w-6' />
          <div className="font-semibold font-main">Skripsi</div>
        </span>

        {/* navbar */}
        <Navbar />
      </header>

      {/* sidebar */}
      <Sidebar open={open} onClose={() => setOpen(false)}/>

      {/* main content */}
      <main>
        <AppRoutes />
      </main>
    </div>
    </BrowserRouter>
  )
}

export default App
