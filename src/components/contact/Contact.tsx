import './Contact.css';

function Contact() {
  return (
    <main id="contactPanel" className="mainPanel">
      <h2>Contact</h2>
      <section id="contactContainer">
        <div id="contactDescription">
          <p>
            Feel free to contact us through the form on the right if you have questions, doubts or
            improvements.
          </p>
        </div>
        <div id="contactInput">
          <form method="GET" action="mailto:franciscomaria97@hotmail.com" encType="text/plain">
            <div className="inputContainer">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="inputContainer">
              <input type="email" name="email" placeholder="E-mail" required />
            </div>
            <div className="inputContainer">
              <textarea placeholder="Write your message here..." rows={10} cols={5} required />
            </div>
            <div className="inputContainer">
              <input type="submit" />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
