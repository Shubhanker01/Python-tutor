import React, { useState } from 'react'
import { Menu, Package, SquareRadical, Variable, Split,Repeat2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const [open, isOpen] = useState(false)
    return (
        <>
            <button onClick={() => isOpen(!open)} className="mb-6 fixed left-4 top-4 z-10">
                <Menu size={32} />
            </button>
            <div className={`fixed top-0 bg-gray-300 text-black h-screen p-4 transition-all duration-300 ${open ? "w-48" : "w-0 hidden"}`}>


                {/* Navigation Links */}
                <nav className="space-y-4">
                    <div className='mt-12'>
                        <NavLink to='/main-app' className={({ isActive }) =>
                            isActive ? "text-blue-800 bg-gray-200 mx-2 flex rounded-md p-2" : "text-black mx-2 flex"
                        }><Package size={24} />
                            <p className='ml-2'>
                                Introduction
                            </p>

                        </NavLink>
                    </div>
                    <div className='mt-4'>
                        <NavLink to='/main-app/module2' className={({ isActive }) =>
                            isActive ? "text-blue-800 bg-gray-200 mx-2 flex rounded-md p-2" : "text-black mx-2 flex"
                        }><SquareRadical size={24} />
                            <p className='ml-2'>
                                Operators
                            </p>

                        </NavLink>
                    </div>
                    <div className='mt-4'>
                        <NavLink to='/main-app/module3' className={({ isActive }) =>
                            isActive ? "text-blue-800 bg-gray-200 mx-2 flex rounded-md p-2" : "text-black mx-2 flex"
                        }><Variable size={24} />
                            <p className='ml-2'>
                                Variables
                            </p>

                        </NavLink>
                    </div>
                    <div className='mt-4'>
                        <NavLink to='/main-app/module4' className={({ isActive }) =>
                            isActive ? "text-blue-800 bg-gray-200 mx-2 flex rounded-md p-2" : "text-black mx-2 flex"
                        }><Split size={24} />
                            <p className='ml-2'>
                                Conditions
                            </p>

                        </NavLink>
                    </div>
                    <div className='mt-4'>
                        <NavLink to='/main-app/module5' className={({ isActive }) =>
                            isActive ? "text-blue-800 bg-gray-200 mx-2 flex rounded-md p-2" : "text-black mx-2 flex"
                        }><Repeat2 size={24} />
                            <p className='ml-2'>
                                Loops
                            </p>

                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar