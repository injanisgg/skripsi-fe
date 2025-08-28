import { NavLink } from 'react-router-dom';
import UnnesLogo from '../images/unnes-logo.png';

export default function Footer() {
  return (
    <div className="mt-8 bg-black px-3 py-8 flex flex-col gap-2 justify-center items-center text-white">
      <div className="flex items-center py-3 gap-5">
        <div>
          <span className='flex items-center gap-2'>
              <img src={UnnesLogo} alt="Unnes logo" className='w-10' />
              <div className="font-semibold font-main text-lg">Skripsi</div>
          </span>
          <p className='font-secondary text-sm text-left'>Submitted as one of the requirements to obtain a Bachelor of Computer Science (S.Kom) degree</p>
        </div>
        <ul className="flex flex-col gap-1">
            <li className='text-base font-main'>Pages</li>
            <NavLink to={'/'} className={'text-sm font-secondary'}>Home</NavLink>
            <NavLink to={'/classification'} className={'text-sm font-secondary'}>Classification</NavLink>
            <NavLink to={'/model'} className={'text-sm font-secondary'}>Model</NavLink>
            <NavLink to={'/about'} className={'text-sm font-secondary'}>About</NavLink>
        </ul>
        <ul className="flex flex-col gap-1">
            <li className='text-base font-main'>Contact</li>
            <li className='text-sm font-secondary'><a target='blank' href="mailto:suginiinzani@gmail.com">Email</a></li>
            <li className='text-sm font-secondary'><a target='blank' href="linkedin.com/in/suginiinjani">Linkedin</a></li>
            <li className='text-sm font-secondary'><a target='blank' href="github.com/injanisgg">Github</a></li>
            <li className='text-sm font-secondary'><a target='blank' href="instagram.com/s.injzhani">Instagram</a></li>
        </ul>
      </div>
      <div className="border-t w-full"></div>
    <p className='text-sm font-secondary'>Copyright by Sugini Injani 2025</p>
    </div>
  )
}
