import { FaArrowDown } from "react-icons/fa6";
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div
            class="bg-[url('../../public/image/Screenshot_20250629_131216_Chrome.jpg')] sm:bg-cover bg-center  h-full w-full">

            <div className="pt-14 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-end sm:mr-32">
                    <p className="text-lg font-semibold border p-2 rounded-full"><FaArrowDown /></p>
                    <p className="text-lg font-semibold border py-1 px-5 rounded-full">About</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center my-10">
                    <h2 className="text-3xl sm:text-6xl font-bold"> I've been <span className="bannartext leading-12 sm:leading-24">Developing</span> <br className="hidden sm:inline" /> Websites since <span className="bannartext leading-12 sm:leading-24">2013</span> </h2>
                    <p className="sm:text-xl font-semibold mb-5 sm:mb-10">We start every new client interaction with an in-depth discovery call where we get<br className="hidden sm:inline" /> to know each other and recommend the best course of action.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="sm:flex gap-60 sm:ml-52 items-center">
                    <p className="text-2xl text-center font-bold">Previously<br className="hidden sm:inline" /> Worked On</p>
                    <div className="sm:grid grid-cols-3 grid-rows-2 px-2">
                        <p className="border  px-auto px-12 mt-4 sm:ml-12 py-3 text-sm font-semibold rounded-full sm:rotate-12 bg-black text-white">AWWWARDS</p>
                        <p className="border  px-auto px-16 mt-4  py-3 text-sm font-bold rounded-full ">facebook</p>
                        <p className="border  px-auto px-16 mt-4  py-3 sm:rotate-z-12 text-sm font-bold rounded-full ">CSS <span>Design</span>Awards</p>
                        <p className="border  px-auto px-16 mt-4  py-3 text-sm font-bold rounded-full ">CSSWINNER</p>
                        <p className="border  px-auto px-16 mt-4 sm:-rotate-12 py-3 text-sm font-bold rounded-full ">ThoughtWorks</p>
                        <p className="border  px-auto px-16 mt-4  py-3 text-sm font-bold rounded-full ">AUTODESK</p>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default About;