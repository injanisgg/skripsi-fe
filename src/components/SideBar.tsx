import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// props for open and close sidebar
type SidebarProps = {
    open: boolean; // is it the side bar open or close
    onClose: () => void; // function to close sidebar
};

export default function Sidebar({ open, onClose }: SidebarProps) {
    const closeBtnRef = useRef<HTMLButtonElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);
    const lastLinkRef = useRef<HTMLAnchorElement>(null);

    // when sidebar is open, lock scroll body and focus on close button
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"; // scroll body key
            closeBtnRef.current?.focus(); // focus on close button
        } else {
            document.body.style.overflow = ""; // reset scrolling body
        }

        return () => {
            document.body.style.overflow = ""; // cleanup function
        }
    }, [open]);

    // handle keyboard (escape to close, tab trap to focus)
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key !== "Tab") return;

        const isShift = e.shiftKey;
        const first = closeBtnRef.current;
        const last = lastLinkRef.current;
        const active = document.activeElement;

        if (!first || !last) return;

        if (!isShift && active === last) {
            e.preventDefault();
            first.focus();
        } else if (isShift && active === first) {
            e.preventDefault();
            last.focus();
        }
    };

    return (
        <>
        {/* overlay on mobile */}
        <div 
         className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden
         ${ open ? "opacity-100" : "pointer-events-none opacity-0" }`}
         onClick={onClose}>
        </div>

        {/* sidebar mobile slide in */}
        <aside
         onKeyDown={handleKeyDown}
         className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85%] bg-white shadow-2xl transition-transform md:hidden
         ${ open ? "translate-x-0" : "-translate-x-full" }`}
        >
            <div className="flex items-center justify-between px-4 py-3 border-b">
                <h2 className="text-lg font-semibold font-secondary">Menu</h2>
                <button
                 ref={closeBtnRef}
                 className="rounded-xl border px-3 py-1.5 text-sm hover:bg-gray-50 font-secondary"
                 onClick={onClose}
                 aria-label="Close Menu"
                >
                    Close
                </button>
            </div>

            {/* navigation */}
            <nav className="p-3">
                <ul className="space-y-1">
                    <li>
                        <NavLink 
                         ref={firstLinkRef}
                         to="/"
                         className={({ isActive }) => `block rounded-xl px-3 py-2 hover:bg-gray-50 ${isActive ? 'bg-yellow-100 p-3 rounded-lg font-semibold' : 'bg-white'}`}
                         onClick={onClose}
                         >
                            {({ isActive }) => (
                                <span className="flex gap-2 items-center font-main">
                                    <i className={isActive ? "fa-solid fa-house" : "fa-regular fa-house"}></i>
                                    <p>Home</p>
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to="/classify"
                         className={({ isActive }) => `block rounded-xl px-3 py-2 hover:bg-gray-50 ${isActive ? 'bg-yellow-100 p-3 rounded-lg font-semibold' : 'bg-white'}`}
                         onClick={onClose}
                        >
                            {({ isActive }) => (
                                <span className="flex gap-2 items-center font-main">
                                    <i className={isActive ? "fa-solid fa-object-group" : "fa-regular fa-object-group"}></i>
                                    <p>Classify</p>
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         to="/model"
                         className={({ isActive }) => `block rounded-xl px-3 py-2 hover:bg-gray-50 ${isActive ? 'bg-yellow-100 p-3 rounded-lg font-semibold' : 'bg-white'}`}
                         onClick={onClose}
                        >
                            {({ isActive }) => (
                                <span className="flex gap-2 items-center font-main">
                                    <i className={isActive ? "fa-solid fa-folder-open" : "fa-regular fa-folder-open"}></i>
                                    <p>Model Information</p>
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                         ref={lastLinkRef}
                         to="/about"
                         className={({ isActive }) => `block rounded-xl px-3 py-2 hover:bg-gray-50 ${isActive ? 'bg-yellow-100 p-3 rounded-lg font-semibold' : 'bg-white'}`}
                         onClick={onClose}>
                            {({ isActive }) => (
                                <span className="flex gap-2 items-center font-main">
                                    <i className={isActive ? "fa-solid fa-circle-question" : "fa-regular fa-circle-question"}></i>
                                    <p>About the System</p>
                                </span>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
        </>
    )

};