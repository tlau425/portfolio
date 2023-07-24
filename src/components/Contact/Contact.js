import { useRef, useState } from "react";
import "./Contact.scss";
import MailIcon from "../../assets/images/icons8-mail-100.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_8vp2r9e",
        "template_e9s5eli",
        {
          from_name: form.name,
          to_name: "Tommy",
          from_email: form.email,
          to_email: "tlau425@gmail.com",
          message: form.message,
        },
        "h0XdmABIHSCghJPQk"
      )
      .then(() => {
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("something went wrong");
      });
  };

  const handleClose = () => {
    setLoading(false)
  }

  return (
    <section className="contact" id="contact">
      <div className="section-title__container">
        <h3 className="section-title__sub">Get in touch</h3>
        <h2 className="section-title">Contact</h2>
      </div>
      <div className="contact-form__container">
        <img className="contact-form__icon" src={MailIcon} alt="mail" />

        {loading ? (
          <>
            <h3 className="project-card__description contact-form__header">
              Your message has been successfully sent, I will get back to you as
              soon as possible.
            </h3>
            <button className="contact-form__okay-btn" onClick={handleClose}>Okay</button>
          </>
        ) : (
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <h3 className="project-card__description contact-form__header">
              Feel free to reach out by filling in this form with your
              information and a message!
            </h3>
            <label className="contact-form__label" name="name">
              Name:
            </label>
            <input
              className="contact-form__input contact-form__text"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <label className="contact-form__label" name="email">
              Email:
            </label>
            <input
              className="contact-form__input contact-form__text"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <label className="contact-form__label" name="message">
              Message:
            </label>
            <textarea
              className="contact-form__input contact-form__textarea"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              spellCheck="true"
              required
            />
            <button className="contact-form__button">
              Send
              <FontAwesomeIcon icon={faShare} className="contact-form__send" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export { Contact };
