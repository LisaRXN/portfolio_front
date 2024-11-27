import { useState } from "react";

export function ContactForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [mailsucces, setMailsucces] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("TEST");
    
    try {
      const response = await fetch("https://portfolio-back-bz67.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          text: text,
        }),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        setMailsucces(true);
        setFirstname("");
        setLastname("");
        setEmail("");
        setText("");

      } else {
        console.log("Failed to send the message.");
      }
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  return (
    <>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="contact-form-container">
            <p className="contact-form-title">
              Prefer to reach out directly? Drop me a message here!
            </p>
            <input
              onChange={(e) => setFirstname(e.target.value)}
              className="contact-form-input"
              type="text"
              placeholder="Firstname"
              value={firstname}
              required
            />
            <input
              onChange={(e) => setLastname(e.target.value)}
              className="contact-form-input"
              type="text"
              placeholder="Lastname"
              value={lastname}
              required
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="contact-form-input"
              type="email"
              placeholder="Email"
              value={email}
              required
            />
            <textarea
              className="contact-form-input"
              rows="5"
              cols="4"
              placeholder="Your message"
              onChange={(e) => setText(e.target.value)}
              value={text}
              required
            ></textarea>
            <button type="submit" className="contact-btn">
              Send {">>"}
            </button>
            <p className="contact-form-confirmation">{mailsucces ? "Message sent successfully!" : null}</p> 
          </div>
        </form>
      </div>
    </>
  );
}
