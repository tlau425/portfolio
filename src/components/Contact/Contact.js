import { useRef, useState } from "react";
import "./Contact.scss";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    const { name, value } = e.target;
    setForm({...form, [name]: value})
  };

  const handleSubmit = (e) => {};
  return (
    <section className="contact" id="contact">
      <div className="section-title__container">
        <h3 className="section-title__sub">Get in touch</h3>
        <h2 className="section-title">Contact.</h2>
      </div>
      <form className="contact-form" ref={formRef}>
        <label className="contact-form__label" name="name">
          Name
        </label>
        <input
          className="contact-form__input contact-form__text"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <label className="contact-form__label" name="email">
          Email
        </label>
        <input
          className="contact-form__input contact-form__text"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label className="contact-form__label" name="message">
          Message
        </label>
        <textarea
          className="contact-form__input contact-form__textarea"
          rows="12"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter your message"
        />

        <button className="contact-form__button">Send</button>
      </form>
    </section>
  );
}

export { Contact };
