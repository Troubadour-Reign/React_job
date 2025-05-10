import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const linkClass = ({isActive}) => `text-whit hover:bg-indigo-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-indigo-600 text-white' : ''}`
    return (
        <nav className="bg-indogo-700 border-b border-indigo-500">
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='flex h-16 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <NavLink
                className='flex flex-shrink-0 items-center mr-4'
                to='/'
              >
                <img
                  className='h-8 w-auto'
                  src={logo}
                  alt='React Jobs'
                />
                <span className='hidden md:block text-whit text-2xl font-bold ml-2'>
                  React Jobs
                </span>
              </NavLink>
              <div className='md:ml-auto'>
                <div className='flex space-x-2'>
                  <NavLink
                    to='/'
                    className={linkClass}

                  >
                    Home
                  </NavLink>
                  <NavLink
                    to='/jobs'
                    className={linkClass}
                  >
                  Jobs
                  </NavLink>
                  <NavLink
                    to='/add-job'
                    className={linkClass}
                  >
                    Add Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav>
    )
}
export default Navbar