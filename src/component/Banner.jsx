import { GoDash } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { motion } from 'framer-motion';
const Banner = () => {
    return (
        <div class="bg-[url('/image/Screenshot_20250629_125709_Chrome.jpg')] sm:bg-cover bg-center  h-full w-full">
            <div className="px-4 sm:px-10 pb-3 sm:pb-1">
                <motion.h1
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.3 }}
                    className="text-3xl sm:text-7xl font-bold pt-28 sm:pt-40">Trusted <span className="bannartext leading-12 sm:leading-36">Partner</span> for <br /> Your Website <span className="bannartext leading-12 sm:leading-36">Develop.</span></motion.h1>
                <div className="sm:flex items-center sm:gap-96 my-5 sm:my-14">
                    <motion.div
                        initial={{ x: -500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.3 }}
                        className=" sm:-rotate-90">
                        <div className="font-bold my-1">@williamrey</div>
                        <div className="flex gap-5 sm:gap-0 sm:justify-between sm:my-10 items-center">
                            <p className="logo"><GoDash /></p>
                            <p className="logo"><FaFacebook /></p>
                            <p className="logo"><FaInstagram /></p>
                            <p className="logo"><FaTwitter /></p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 500, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.3 }}
                        className="sm:ml-32 my-5">
                        <p className="sm:text-xl font-semibold mb-5 sm:mb-10">Building the world best marketing websites for over a decade. <br className="hidden sm:inline" /> Your trusted partner for strategy, design & dev.</p>
                        <p className="flex items-center border py-1 sm:py-3 rounded-full w-64 hover:bg-gray-500">
                            <p className="border p-3 rounded-full text-xl font-bold mr-5"><FaPhone /></p>
                            <p className="text-xl font-semibold">Schedule a Call</p>
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;