import "../css/contact.css";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { BsPhoneVibrate } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5 } });
    
    tl.fromTo("#send-us", { x: "-300%" }, { x: "0%" }, 1);
    tl.fromTo("#infos", { x: "300%" }, { x: "0%" }, 1);
  }, []);

  return (
    <div id="contact" className="w-full h-screen mt-[50px]">
      <div id="send-us">
        <div id="send-us-inner" className="w-full h-full p-12">
          <h2 className="text-3xl font-extrabold mb-4 text-center cursor-default">
            CONTACT ME
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className="contact-texts block text-cv-black font-bold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="contact-inputs w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cv-black transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="contact-texts block text-cv-black font-bold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="contact-inputs w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cv-black transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="contact-texts block text-cv-black font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="contact-inputs w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cv-black transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="contact-texts block text-cv-black font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="contact-inputs w-full px-3 py-2 border rounded-md focus:outline-none focus:border-cv-black transition duration-300"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-cv-black text-white px-4 py-2 rounded-full hover:bg-black transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div id="infos">
        <div
          id="infos-inner"
          className="flex flex-col justify-center items-center"
        >
          <div
            id="contact-phone"
            className="info-div flex flex-col justify-center items-center gap-[2px] my-[24px]"
          >
            <BsPhoneVibrate className="contact-icons text-4xl text-center p-[4px] text-white inline-block" />
            <a
              href="/"
              className="contact-links text-center text-lg text-white hover:text-cv-red transition duration-300"
            >
              +90 (542) 270 09 39
            </a>
          </div>
          <div
            id="contact-mail"
            className="info-div flex flex-col justify-center items-center gap-[2px] my-[24px]"
          >
            <FiMail className="contact-icons text-4xl text-center p-[4px] text-white inline-block" />
            <a
              href="/"
              className="contact-links text-center text-lg text-white hover:text-cv-red transition duration-300"
            >
              sarikayamurat5505@gmail.com
            </a>
          </div>
          <div
            id="contact-location"
            className="info-div flex flex-col justify-center items-center gap-[2px] my-[24px]"
          >
            <FaLocationDot className="contact-icons text-4xl text-center p-[4px] text-white inline-block" />
            <a
              href="/"
              className="contact-links text-center text-lg text-white hover:text-cv-red transition duration-300"
            >
              Ankara, Turkey
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
