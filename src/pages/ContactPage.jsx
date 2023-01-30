import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/share/Title";
import AppLayout from "../layouts/AppLayout";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import { GrSend } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { GetSocials } from "../service/Socials/GetSocials";
import { UseColor } from "../hooks/UseColor";
const ContactPage = () => {
  const { socials, loading } = GetSocials();
  const themeColor = UseColor();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const myPromise = emailjs.sendForm(
      "service_ukvwg29",
      "template_z23vf2i",
      form.current,
      "ef4KyujVfvG2NIcNR"
    );
    toast.promise(myPromise, {
      loading: "sending message ...",
      success: "successfull sended",
      error: "Error sending",
    });

    e.target.reset();
  };
  return (
    <AnimatePresence>
      <AppLayout>
        <div className=" bg-light_background dark:bg-dark_background h-screen flex-grow flex flex-col overflow-x-hidden">
          <Toaster position="top-right" reverseOrder={false} />
          <header className=" bg-light_background dark:bg-dark_background z-10  sticky top-0 py-5">
            <Title name={"Contact"} />
          </header>
          <main className=" flex-grow flex justify-center items-center p-3 sm:p-5">
            <div className=" container mx-auto   grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-5 text-light_textcolor dark:text-dark_textcolor">
              <div className=" col-span-1 gap-5  flex flex-col sm:flex-row lg:flex-col ">
                <motion.article
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    damping: 25,
                    stiffness: 250,
                  }}
                  className=" w-full bg-light_background_soft dark:bg-dark_background_soft p-5 flex flex-col items-center gap-2  duration-100  font-medium"
                >
                  <RiMessengerLine
                    className=" text-5xl"
                    style={{ color: themeColor }}
                  />

                  <h4 className="  text-xl font-semibold">Messengar</h4>
                  <h5 className=" opacity-60">Hlaing Htet</h5>
                  <a
                    className=" "
                    target="_blank"
                    href="https://m.me/hlaing.htet.3954546/"
                    style={{ color: themeColor }}
                  >
                    Send a message
                  </a>
                </motion.article>
                <motion.article
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    damping: 25,
                    stiffness: 250,
                  }}
                  className=" p-5 w-full flex flex-col items-center gap-2 font-medium bg-light_background_soft dark:bg-dark_background_soft  duration-100 "
                >
                  <MdOutlineEmail
                    className=" text-5xl"
                    style={{ color: themeColor }}
                  />
                  <h4 className="  text-xl font-semibold">Email</h4>
                  <h5 className="  opacity-60">hlainehtet.hh.hh@gmail.com</h5>
                  <a
                    style={{ color: themeColor }}
                    target="_blank"
                    href="mailto:hlainehtet.hh.hh@gmail.com"
                  >
                    Send a message
                  </a>
                </motion.article>
                <motion.article
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    delay: 0.4,
                    type: "spring",
                    damping: 25,
                    stiffness: 250,
                  }}
                  className=" w-full bg-light_background_soft dark:bg-dark_background_soft p-5 flex flex-col items-center  duration-100 gap-2 font-medium"
                >
                  <AiOutlinePhone
                    className=" text-5xl"
                    style={{ color: themeColor }}
                  />
                  <h4 className="  text-xl font-semibold">Phone</h4>
                  <h5 className=" opacity-60">+959424144442</h5>
                  <a
                    target="_blank"
                    href="tel:+959424144442"
                    style={{ color: themeColor }}
                  >
                    Call phone
                  </a>
                </motion.article>
              </div>
              <div className=" col-span-2 gap-5 flex flex-col">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col gap-5"
                >
                  <motion.input
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      damping: 25,
                      stiffness: 250,
                    }}
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    className=" p-3 focus:outline-none focus:bg-light_textcolor focus:text-light_background dark:focus:bg-dark_textcolor dark:focus:text-dark_background  bg-light_background_soft dark:bg-dark_background_soft"
                  />
                  <motion.input
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 0.3,
                      type: "spring",
                      damping: 25,
                      stiffness: 250,
                    }}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className=" p-3 focus:outline-none focus:bg-light_textcolor focus:text-light_background dark:focus:bg-dark_textcolor dark:focus:text-dark_background bg-light_background_soft dark:bg-dark_background_soft"
                    required
                  />
                  <motion.textarea
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 0.4,
                      type: "spring",
                      damping: 25,
                      stiffness: 250,
                    }}
                    name="message"
                    rows="10"
                    placeholder="Your Message"
                    className=" p-3 focus:outline-none focus:bg-light_textcolor focus:text-light_background dark:focus:bg-dark_textcolor dark:focus:text-dark_background  bg-light_background_soft dark:bg-dark_background_soft"
                    required
                  ></motion.textarea>
                  <motion.button
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      damping: 25,
                      stiffness: 250,
                    }}
                    type="submit"
                    className=" w-fit mx-auto  text-dark_background font-semibold"
                  >
                    <div
                      className="hover:scale-110 w-full duration-100  flex gap-3 items-center p-3"
                      style={{ backgroundColor: themeColor }}
                    >
                      Sent <GrSend className=" text-xl " />
                    </div>
                  </motion.button>
                </form>
                <div className=" mt-auto flex gap-5 items-center justify-between md:justify-end">
                  {loading ? (
                    <div></div>
                  ) : (
                    socials?.map((social, index) => (
                      <motion.div
                        initial={{ y: "100vh" }}
                        animate={{
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.05,
                          type: "spring",
                          damping: 25,
                          stiffness: 250,
                        }}
                        whileHover={{ scale: 1.5 }}
                        className=" p-1 cursor-pointer "
                        style={{ backgroundColor: themeColor }}
                        key={social._id}
                      >
                        <a
                          href={social.url_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`${import.meta.env.VITE_IMG_URL}/${
                              social.image
                            }`}
                            alt=""
                            className=" w-4  h-4 object-contain"
                          />
                        </a>
                      </motion.div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </AppLayout>
    </AnimatePresence>
  );
};

export default ContactPage;
