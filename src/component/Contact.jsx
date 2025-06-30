import { FaArrowDown, FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { GoDash } from "react-icons/go";
import { AiOutlineContacts } from "react-icons/ai";
// import pic from '/projects/task-demo-portfolio/public/image/Screenshot_20250629_131443_Chrome.jpg'
import { motion } from 'framer-motion';
const Contact = () => {
    return (
        <div class="bg-[url('/image/Screenshot_20250629_131443_Chrome.jpg')] sm:bg-cover bg-center  h-full w-full">
            <div className="px-4 sm:px-10 py-14 sm:flex justify-between items-center">

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="flex items-center ">
                        <p className="text-lg font-semibold border p-2 rounded-full"><FaArrowDown /></p>
                        <p className="text-lg font-semibold border py-1 px-5 rounded-full">Contact</p>
                    </div>
                    <h2 className="text-3xl sm:text-7xl font-bold ">Interested in <br className="hidden sm:inline" /><span className="bannartext leading-12 sm:leading-36">work</span> together ?</h2>
                    <p className="sm:text-xl font-semibold ">We start every new client interaction with an in-depth discovery<br className="hidden sm:inline" />   call where we get to know each other</p>
                    <p className="flex items-center border py-1 sm:py-3 rounded-full w-64 mt-8 hover:bg-gray-500">
                        <p className="border p-3 rounded-full text-xl font-bold mr-5"><FaPhone /></p>
                        <p className="text-xl font-semibold">Schedule a Call</p>
                    </p>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0,
                        x: Math.random() * 200 - 100, // Random X (-100px to +100px)
                        y: Math.random() * 200 - 100, // Random Y
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            delay: 0.1,
                            duration: 0.7,
                            ease: "easeOut",
                        },
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-black text-white pt-5 px-6 mt-10  sm:m-14 rounded-3xl">
                    <input placeholder="Enter your name" className="border-b my-3 focus:outline-none focus:border-[rgb(173,255,47)] w-full sm:w-96" type="text" /><br />
                    <input placeholder="Your Email address" className="border-b my-3 focus:outline-none focus:border-[rgb(173,255,47)] w-full sm:w-96" type="text" /><br />
                    <input placeholder="Describe your projects" className="border-b my-3 focus:outline-none focus:border-[rgb(173,255,47)] w-full sm:w-96" type="text" /><br />
                    <div className="flex items-center gap-3 mb-10">
                        <p className="flex items-center border py-1 sm:py-1 rounded-full w-40 mt-8 hover:bg-white hover:text-black">
                            <p className="border p-2 rounded-full text-sm font-bold mr-5"><IoIosSend /></p>
                            <p className="text-sm font-semibold">Send</p>
                        </p>
                        <p className="mt-6">or</p>
                        <p className="flex items-center border py-1 sm:py-1 rounded-full w-52 mt-8 hover:bg-white hover:text-black">
                            <p className="border p-2 rounded-full text-sm font-bold mr-5"><AiOutlineContacts /></p>
                            <p className="text-sm font-semibold">Contact Me</p>
                        </p>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="font-bold my-1">@williamrey</div>
                        <div className="flex gap-5 sm:gap-0 sm:justify-between sm:my-10 items-center">
                            <p className="logo"><GoDash /></p>
                            <p className="logo"><FaFacebook /></p>
                            <p className="logo"><FaInstagram /></p>
                            <p className="logo"><FaTwitter /></p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;