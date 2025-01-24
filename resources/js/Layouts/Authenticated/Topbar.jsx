import React from 'react'
import { useState, useRef } from 'react'
import { Link } from '@inertiajs/react';

export default function Topbar() {
    const [dropdown, setDropdown] = useState(false)
    const dropDownTarget = useRef();

    const handleDropwdown = () => {
       if (dropdown) {
            dropDownTarget.current.classList.remove('hidden');
       } else {
           dropDownTarget.current.classList.add('hidden');
       }
       setDropdown(!dropdown);
    }
  return (
      <>
          <div className="flex justify-between items-center cursor-pointer">
                        <input
                            type="text"
                            className="top-search"
                            placeholder="Search movie, cast, genre"
                            // Corrected inline style
                        />
                        <div className="flex items-center gap-4">
                            <span className="text-black text-sm font-medium">Welcome, Granola Sky</span>
                            {/* User avatar */}
                            <div className="collapsible-dropdown flex flex-col gap-2 relative" onClick={handleDropwdown}>
                                <button type="button" className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button" data-target="#dropdown-button">
                                        <img src="/images/avatar.png" className="rounded-full object-cover w-full" alt="User  Avatar" />
                                </button>
                                {/* <a href="" className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button" data-target="#dropdown-button">
                                    <img src="/images/avatar.png" className="rounded-full object-cover w-full" alt="User  Avatar" />
                                </a> */}
                      <div className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden" id="dropdown-target" ref={dropDownTarget}>
                                    <Link className='transition-all hover:bg-sky-100 p-4' href={route('prototype.dashboard') }>Dashboard</Link>
                                    {/* <a href="#!" className="transition-all hover:bg-sky-100 p-4">Dashboard</a> */}
                                    <a href="#!" className="transition-all hover:bg-sky-100 p-4">Settings</a>
                                    <a href="sign_in.html" className="transition-all hover:bg-sky-100 p-4">Sign Out</a>
                                </div>
                            </div>

                         </div>
              <style jsx={true}>{`
                .top-search {
                background-image: url('/icons/ic_search.svg');
                background-color: white;
                }
                `}
              </style>
          </div>
      </>
  )
}
