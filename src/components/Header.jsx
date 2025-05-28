import React from 'react'

function Header() {
  return (
    <header className='bg-gray-300'>
        <nav className='flex justify-between items-center w-[95%] mx-auto'>
            <div>
                <img className='w-14' src="./img/logo.png" alt="" />
            </div>
            <div>
                <ul className='flex items-center font-semibold gap-10'>
                    <li>
                        <a className='hover:text-gray-500' href="#">About</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#">Experience</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#">Project</a>
                    </li>
                    <li>
                        <a className='hover:text-gray-500' href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                 <div >
                    <button className='bg-blue-200 text-black px-3 py-1 border border-gray-500 rounded-md hover:bg-blue-300'>Resume</button>
                 </div>
                <div >
                    <button className='bg-blue-200 text-black px-3 py-1 border border-gray-500 rounded-md hover:bg-blue-300'>Hire Me</button>
                </div>
            </div>
        </nav>
    </header>
   
  )
}

export default Header