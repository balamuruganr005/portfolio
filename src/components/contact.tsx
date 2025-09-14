import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  FaEnvelope,
  FaInstagram, FaGithub, FaLinkedin, FaXTwitter
} from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaUniversity } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    emailjs.sendForm(
      'service_ycay4ai',
      'template_njolbaf',
      formRef.current,
      'D8xAWeOV7ZhLhkq4n'
    ).then(() => {
      setIsSending(false);
      setSent(true);
      setShowPopup(true); // ✅ show popup
      formRef.current?.reset();
    }).catch(() => {
      setIsSending(false);
      alert("Something went wrong! Try again.");
    });
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-block">
            <FaEnvelope size={24} color="#00ffe5" />
            <div>
              <strong>Email</strong>
              <p>iambalamurugan05@gmail.com</p>
            </div>
          </div>
          <div className="info-block">
            <FaMapMarkerAlt size={24} color="#00ffe5" />
            <div>
              <strong>Location</strong>
              <p>Potheri, Kattankulathur, Chennai</p>
            </div>
          </div>
          <div className="info-block">
            <FaUniversity size={24} color="#00ffe5" />
            <div>
              <strong>Education</strong>
              <p>BE Cyber Security at SRM Valliammai Engineering College</p>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/__.bala.__05" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://github.com/balamuruganr005" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://x.com/balamuruganr005" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://www.linkedin.com/in/bala-murugan-r-6a43452b5" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="reply_to" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows={5} required />
          <button type="submit" className="btn primary" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
          {sent && <p style={{ color: '#00ffcc', marginTop: '1rem' }}>Message sent successfully!</p>}
        </form>
      </div>

      {/* ✅ Show popup */}
      {showPopup && <PopupModal onClose={() => setShowPopup(false)} />}
    </section>
  );
};

const PopupModal = ({ onClose }: { onClose: () => void }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="popup-overlay">
      <div className="popup-box animate-popup">
        <div className="checkmark-circle">
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle className="checkmark-circle-bg" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark-check" fill="none" d="M14 27l7 7 17-17" />
          </svg>
        </div>
        <h2>Message Sent</h2>
        <p>I'll reach you soon, wait buddy!</p>
      </div>
    </div>
  );
};

export default Contact;
