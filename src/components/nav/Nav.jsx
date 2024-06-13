import logoLight from '/src/assets/img/logo-light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavLink from './NavLink';

export default function Nav() {
  return (
    <nav className='bg-slate-950/50 text-gray-100 flex justify-between items-center px-10 h-20 fixed w-screen z-20'>
        <img className="h-6" src={logoLight} alt="" />

        <button className='lg:hidden'>
            <FontAwesomeIcon icon={faBars} className="text-4xl"/>
        </button>

        <ul className='hidden lg:flex gap-8'>
            <NavLink href="#" text="HOME" />
            <NavLink href="#" text="TRADITION" />
            <NavLink href="#" text="SERVICES" />
            <NavLink href="#" text="MENU" />
            <NavLink href="#" text="CONTACT" />
        </ul>

        <ul className='hidden lg:flex gap-6'>
            <NavLink href="#" text={<FontAwesomeIcon icon={faFacebook} />} />
            <NavLink href="#" text={<FontAwesomeIcon icon={faTwitter} />} />
            <NavLink href="#" text={<FontAwesomeIcon icon={faInstagram} />} />
        </ul>
    </nav>
  )
}
