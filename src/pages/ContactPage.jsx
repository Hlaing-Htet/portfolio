import React, { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Title } from "../components/share/Title";
import AppLayout from "../layouts/AppLayout";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { GetSocials } from "../service/Socials/GetSocials";
const ContactPage = () => {
  const { socials, loading } = GetSocials();
  const themeColor = "#c9a227";
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ukvwg29",
        "template_z23vf2i",
        form.current,
        "ef4KyujVfvG2NIcNR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <AnimatePresence>
      <AppLayout>
        <div className=" dark:bg-dark_background h-screen flex-grow flex flex-col overflow-x-hidden">
          <header className=" bg-light_background dark:bg-dark_background z-10  sticky top-0 py-5">
            <Title name={"Contact"} />
          </header>
          <main className=" flex-grow flex justify-center items-center p-5">
            <div className=" container mx-auto pb-5  grid grid-cols-3 gap-5 dark:text-dark_textcolor">
              <div className=" col-span-1 gap-5  flex flex-col ">
                <motion.article
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  transition={{
                    delay: 0.2,
                    type: "spring",
                    damping: 25,
                    stiffness: 250,
                  }}
                  className=" p-5 flex flex-col items-center gap-2 font-medium bg-dark_background_soft  duration-100 "
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
                    delay: 0.3,

                    type: "spring",
                    damping: 25,
                    stiffness: 250,
                  }}
                  className=" bg-dark_background_soft p-5 flex flex-col items-center gap-2  duration-100  font-medium"
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
                    delay: 0.4,
                    type: "spring",
                    damping: 25,
                    stiffness: 250,
                  }}
                  className=" bg-dark_background_soft p-5 flex flex-col items-center  duration-100 gap-2 font-medium"
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
              <div className=" col-span-2 flex flex-col">
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
                    className=" p-3 focus:outline-none focus:bg-dark_textcolor focus:text-dark_background  bg-dark_background_soft"
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
                    className=" p-3 focus:outline-none focus:bg-dark_textcolor focus:text-dark_background bg-dark_background_soft"
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
                    className=" p-3 focus:outline-none focus:bg-dark_textcolor focus:text-dark_background  bg-dark_background_soft"
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
                    className=" w-fit mx-auto p-3 text-dark_background font-medium"
                    style={{ backgroundColor: themeColor }}
                  >
                    Sent Message
                  </motion.button>
                </form>
                <div className=" mt-auto flex gap-5 items-center justify-end">
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
