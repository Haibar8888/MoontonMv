import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar';
import Featured from './Featured';

 // Ensure you import the Sidebar component

export default function Authenticated({ children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                    {/* start sidebar */}
                    <Sidebar />
                    {/* end sidebar */}
            </div>

            {/* start content */}
            <div className="ml-[300px] px-[50px]">
                <div className="py-10 flex flex-col gap-[50px]">
                    {/* start topbar */}

                    {/* end topbar */}
                        <Topbar/>
                    {/* start main */}
                    <main>{children}</main>
                    {/* end main */}
                </div>
            </div>
            {/* end content */}

            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page is only supported on screens 1024px or above.
                </div>
            </div>
        </>
    );
}
