import { FaArrowDown } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { motion } from 'framer-motion';
const MySkills = () => {
    return (
        <div className="bg-black text-white py-16 px-4 sm:px-10 rounded-4xl">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex items-center">
                <p className="text-lg font-semibold border p-2 rounded-full"><FaArrowDown /></p>
                <p className="text-lg font-semibold border py-1 px-5 rounded-full">Why Choose me</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="sm:flex items-center justify-between my-1">
                <p className="text-3xl sm:text-7xl font-bold py-7">My Extensive <br className="hidden sm:inline" />List  Of Skills</p>
                <div className="">
                    <p className="text-right">Building the world best marketing Your websites  <br className="hidden sm:inline" />  over a decade. trusted partner for strategy, design & dev. </p>
                    <hr className="my-8" />
                    <p className="flex gap-5 items-center mb-10 sm:mb-0 ml-72 sm:ml-96 mt-10">
                        <span className="p-2 hover:bg-white hover:text-black border rounded-full"><FaArrowLeftLong /></span>
                        <span className="p-2 hover:bg-white hover:text-black border rounded-full"><FaArrowRightLong /></span>
                    </p>
                </div>
            </motion.div>

            <div className="sm:grid sm:grid-cols-3 items-center gap-1">
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
                    className="bg-gray-900 p-10 rounded-3xl">
                    <p className="text-8xl text-blue-600"><FaReact /></p>
                    <h3 className="text-xl my-5 font-semibold">HTML & CSS</h3>
                    <p className="text-gray-400">Mastering HTML and CSS gives you the power to structure and style beautiful, responsive, and modern websites easily</p>
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
                    className="bg-gray-900 rotate-6 p-10 rounded-3xl">
                    <p className="text-8xl text-blue-600"><FaReact /></p>
                    <h3 className="text-xl my-5 font-semibold">JavaScript</h3>
                    <p className="text-gray-400">JavaScript makes your website come alive — from dynamic interactions to real-time features, it's the soul of the web.</p>
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
                    className="bg-gradient-to-r from-gray-900  to-transparent  p-10 rounded-3xl">
                    <p className="text-8xl text-blue-600"><FaReact /></p>
                    <h3 className="text-xl my-5 font-semibold">WebFlow</h3>
                    <p className="text-gray-400">WebFlow lets you design, build, and launch fully responsive websites visually — without writing a single line of code</p>
                </motion.div>
            </div>
        </div>
    );
};

export default MySkills;