import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineFilePdf } from "react-icons/ai";
import "../css/footer.css";
import resumeEnglish from "../englishCv.pdf"

function Footer() {
  return (
    <div className="bg-black flex flex-col justify-center items-center w-full">
      <div id="footer-inner" className="flex justify-center items-center gap-[24px]">
        <div
          id="contact-phone"
          className="info-div flex flex-row justify-center items-center gap-[2px] my-[12px]"
        >
          <BsPhoneVibrate className="footer-icons text-3xl text-center p-[4px] text-white inline-block" />
          <a
            href="tel:+905422700939"
            className="footer-links text-center text-sm text-white hover:text-cv-red transition duration-300"
          >
            +90 (542) 270 09 39
          </a>
        </div>
        <div
          id="contact-mail"
          className="info-div flex flex-row justify-center items-center gap-[2px] my-[12px]"
        >
          <FiMail className="footer-icons text-3xl text-center p-[4px] text-white inline-block" />
          <a
            href="mailto:sarikayamurat5505@gmail.com"
            className="footer-links text-center text-sm text-white hover:text-cv-red transition duration-300"
          >
            sarikayamurat5505@gmail.com
          </a>
        </div>
        <div
          id="contact-linkedin"
          className="info-div flex flex-row justify-center items-center gap-[2px] my-[12px]"
        >
          <AiOutlineLinkedin className="footer-icons text-3xl text-center p-[4px] text-white inline-block" />
          <a
            href="https://www.linkedin.com/in/muratSarikaya05" target="_blank" rel="noopener noreferrer"
            className="footer-links text-center text-sm text-white hover:text-cv-red transition duration-300"
          >
            muratSarikaya05
          </a>
        </div>
        <div
          id="contact-github"
          className="info-div flex flex-row justify-center items-center gap-[2px] my-[12px]"
        >
          <AiFillGithub className="footer-icons text-3xl text-center p-[4px] text-white inline-block" />
          <a
            href="https://github.com/MYellowrock" target="_blank" rel="noopener noreferrer"
            className="footer-links text-center text-sm text-white hover:text-cv-red transition duration-300"
          >
            MYellowrock
          </a>
        </div>
        <div
          id="contact-github"
          className="info-div flex flex-row justify-center items-center gap-[2px] my-[12px]"
        >
          <AiOutlineFilePdf className="footer-icons text-3xl text-center p-[4px] text-white inline-block" />
          <a
            href={resumeEnglish}
            download="murat_Sarikaya_Resume"
            className="footer-links text-center text-sm text-white hover:text-cv-red transition duration-300"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
