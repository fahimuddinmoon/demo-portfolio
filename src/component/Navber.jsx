import 'animate.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Navber = () => {
    return (
        <div className="navbar fixed backdrop-brightness-100 backdrop-blur-xl z-50 px-1 sm:px-10 py-4">
            <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-blue-500  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#nav">Home</a></li>
                        <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#aboutMe">About </a></li>
                        <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#contact">Portfolio</a></li>
                        <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#contact">Blog</a></li>
                        <li className="animate__heartBeat text-sm font-bold ">
                            <p className='border rounded-3xl pl-0'><span className='border rounded-full p-1'><FaArrowRightLong /></span>Start Project</p>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-1'>
                    <a className=" text-3xl font-extrabold m-0 p-0"> DEVLOP.ME</a>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}
                className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#nav">Home</a></li>
                    <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#aboutMe">About </a></li>
                    <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#contact">Portfolio</a></li>
                    <li><a className='animate__heartBeat mr-9 text-sm font-bold ' href="#contact">Blog</a></li>
                    <li className="animate__heartBeat text-sm font-bold ">
                        <p className='border rounded-3xl pl-0'><span className='border rounded-full p-1'><FaArrowRightLong /></span>Start Project</p>
                    </li>

                </ul>
            </motion.div>

        </div>
    );
};

export default Navber;