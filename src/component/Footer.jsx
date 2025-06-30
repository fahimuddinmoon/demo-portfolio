import { motion } from 'framer-motion';
const Footer = () => {
    return (
        <div className="bg-black text-white py-14 px-4 sm:px-10 sm:flex sm:gap-96 items-center rounded-3xl">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="">
                <h3 className="text-3xl font-bold text-[rgb(173,255,47)] sm:mb-96">DEVLOP.ME</h3>
                <p className="text-sm font-bold text-gray-500 items-end">BESNIK</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >

                <h2 className="text-6xl font-bold">As you can</h2>

                <div className="sm:flex gap-32 items-center my-20">
                    <div>
                        <p className="text-sm font-semibold text-gray-600">Say hello</p>
                        <p className="text-lg font-semibold mt-4">HELLO@DEVLOP.ME.COM</p>
                        <p>MAHBUBUL@ME.COM</p>

                        <p className="text-sm font-semibold text-gray-600 mt-5">Call</p>
                        <p className="text-lg font-semibold mt-4">+784549  4981  00</p>
                        <p>+8845  0100  211</p>
                    </div>
                    <div className="mb-16">
                        <p className="text-sm font-semibold text-gray-600">Menu</p>
                        <p className="text-lg font-semibold mt-4">HOME</p>
                        <p>ABOUT</p>
                        <p>PORTFOLIO</p>
                        <p>BLOG</p>
                    </div>
                    <div className="mb-10"  >
                        <p className="text-sm font-semibold text-gray-600">Social</p>
                        <p className="text-lg font-semibold mt-4">TWITTER</p>
                        <p>INSTAGRAM</p>
                        <p>FACEBOOK</p>
                        <p>BEHANCE</p>
                        <p>DRIBBBLE</p>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold text-gray-600">deblop.me 2022</p>
                    <p>PRIVACY - TERMS</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Footer;