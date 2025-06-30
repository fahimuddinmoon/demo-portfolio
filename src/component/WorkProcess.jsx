import { FaArrowDown, FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';

const WorkProcess = () => {
    return (
        <div className="bg-gray-900 text-white py-12 px-4 sm:px-10 rounded-4xl">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }} className="sm:flex items-center">
                <div className="flex items-center  sm:mr-32">
                    <p className="text-lg font-semibold border p-2 rounded-full"><FaArrowDown /></p>
                    <p className="text-lg font-semibold border py-1 px-5 rounded-full">About</p>
                </div>
                <h3 className="text-5xl font-bold sm:ml-52">My Work Process</h3>
            </motion.div>

            <div className="sm:grid grid-cols-2 grid-rows-2 my-9 sm:mt-20 gap-8">
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
                    className="p-6 my-5 sm:my-0 bg-black rounded-3xl">
                    <div className="flex justify-between items-center ">
                        <p className="rounded-full bg-cyan-100 text-black text-lg text-center px-3 py-1">Discovery</p>
                        <p className="flex items-center gap-3"><FaArrowRightLong /><span className=" underline text-sm font-semibold hover:text-[rgb(173,255,47)] hover:font-bold">Read More</span></p>
                    </div>
                    <p className="sm:text-xl font-semibold text-gray-600 mt-10">We start every new client interaction with an in-depth discovery call where we get to know each other, clearly define your business objectives, and recommend the best course of action.</p>
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
                    className="p-6 my-5 sm:my-0 bg-[rgb(173,255,47)] rounded-3xl rotate-6">
                    <div className="flex justify-between items-center ">
                        <p className="rounded-full bg-black text-white text-lg text-center px-3 py-1">Strategy</p>
                        <p className="flex text-black items-center gap-3"><FaArrowRightLong /><span className=" underline text-sm font-semibold hover:text-gray-700 hover:font-bold">Read More</span></p>
                    </div>
                    <p className="sm:text-xl font-semibold text-gray-600 mt-10">very end-to-end project of ours begins with a bespoke pre-build strategy. From brand guidelines to content requirements, we're here to set the stage for success.</p>
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
                    className="p-6 my-5 sm:my-0 bg-black rounded-3xl">
                    <div className="flex justify-between items-center ">
                        <p className="rounded-full bg-cyan-100 text-black text-lg text-center px-3 py-1">Design</p>
                        <p className="flex items-center gap-3"><FaArrowRightLong /><span className=" underline text-sm font-semibold hover:text-[rgb(173,255,47)] hover:font-bold">Read More</span></p>
                    </div>
                    <p className="sm:text-xl font-semibold text-gray-600 mt-10">After we have a comprehensive understanding of your project, it's time to bring it to life visually. Each page or will be designed, reviewed, and given your stamp of approval.</p>
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
                    className="p-6 my-5 sm:my-0 bg-black rounded-3xl">
                    <div className="flex justify-between items-center ">
                        <p className="rounded-full bg-cyan-100 text-black text-lg text-center px-3 py-1"> Build</p>
                        <p className="flex items-center gap-3"><FaArrowRightLong /><span className=" underline text-sm font-semibold hover:text-[rgb(173,255,47)] hover:font-bold">Read More</span></p>
                    </div>
                    <p className="sm:text-xl font-semibold text-gray-600 mt-10">Whether we've just finished designing your new site or you already have designs you'd like to be to develop in Webflow, we're here to apply our trusted development process to your project.</p>
                </motion.div>

            </div>
        </div>
    )
};

export default WorkProcess;