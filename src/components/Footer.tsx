import { NavLink } from 'react-router-dom';
import UnnesLogo from '../images/unnes-logo.png';

export default function Footer() {
  const footerData = {
    pageData: [
      { to: '/', className: 'text-sm font-secondary', icon: "fa-regular fa-house", title: 'Home' },
      { to: '/classify', className: 'text-sm font-secondary', icon: "fa-regular fa-object-group", title: 'Classify' },
      { to: '/model', className: 'text-sm font-secondary', icon: "fa-regular fa-folder-open", title: 'Model' },
      { to: '/about', className: 'text-sm font-secondary', icon: "fa-regular fa-circle-question", title: 'About' },
    ],
    contactData: [
      { 
        className: 'text-sm font-secondary',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'mailto:suginiinzani@gmail.com',
        icon: <i className="fa-regular fa-envelope"></i>,
        title: 'Email'
      },
      { 
        className: 'text-sm font-secondary',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://linkedin.com/in/suginiinjani',
        icon: <i className="fa-brands fa-linkedin-in"></i>,
        title: 'Linkedin'
      },
      { 
        className: 'text-sm font-secondary',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://github.com/injanisgg',
        icon: <i className="fa-brands fa-github"></i>,
        title: 'Github'
      },
      { 
        className: 'text-sm font-secondary',
        target: '_blank',
        rel: 'noopener noreferrer',
        href: 'https://instagram.com/s.injzhani',
        icon: <i className="fa-brands fa-instagram"></i>,
        title: 'Instagram'
      },
    ]
  };

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
            <li className='text-base font-main mb-2 font-medium'>Pages</li>
            {footerData.pageData.map((page, index) => (
              <span key={index} className='flex gap-1 items-center'>
                <i className={page.icon}></i>
                <NavLink to={page.to} className={page.className}>{page.title}</NavLink>
              </span>
            ))}
        </ul>
        <ul className="flex flex-col gap-1">
            <li className='text-base font-main mb-2 font-medium'>Contact</li>
            {footerData.contactData.map((contact, index) => (
              <span key={index} className="flex gap-1 items-center">
                {contact.icon}
                <li className={contact.className}><a target={contact.target} href={contact.href}>{contact.title}</a></li>
              </span>
            ))}
        </ul>
      </div>
      <div className="border-t w-full"></div>
    <p className='text-sm font-secondary'>Copyright by Sugini Injani 2025</p>
    </div>
  )
}
