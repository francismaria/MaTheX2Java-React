import './Contact.css';

function Contact() {
  return (
    <main id="contactPanel" className="mainPanel">
      <h2>Contact</h2>
      <section id="contactWrapper">
        <section>
          <p>
            Feel free to contact us through the form on the right if you have questions, doubts or
            improvements.
          </p>
        </section>
        <form method="GET" action="mailto:franciscomaria97@hotmail.com" encType="text/plain">
          <input className="inputContainer" type="text" placeholder="Name" />
          <input className="inputContainer" type="email" placeholder="E-mail" />
          <textarea
            className="inputContainer"
            placeholder="Write your message here..."
            rows={10}
            cols={5}
          />
          <input className="inputContainer" type="submit" />
        </form>
      </section>
    </main>
  );
}

export default Contact;
