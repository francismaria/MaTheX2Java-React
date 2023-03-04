function About() {
  return (
    <main id="aboutPanel" className="mainPanel">
      <h2>About</h2>
      <section>
        <p>
          LaTeX is an application to write well-prepared documents, which has been widely used for
          communication and publication of scientific documents in many fields, for instance,
          mathematics, computer science, political science, philosophy or physics. With the growing
          use of this application in the specific fields of mathematics and computer science, it
          arouse the necessity of converting mathematic formulas into programming code to calculate
          or to simply have a real implementation of the formulas in programming code.
        </p>
        <p>
          MatheX2Java is a project which started to be developed in late March 2019. It is a web
          application which converts LaTeX code - from the amsmath package - to Java code, in
          real-time. It converts mathematic formulas into java methods which can then be invoked and
          executed.
        </p>
        <p>
          It&#39;s first design was very simple, which only considered raw amsmath code. In a
          second, deeper approach to the project specification, the application design was upgraded,
          considering the peculiar properties of the Java programming language. Hence, it was
          implemented an auxiliary grammar which allows annotations, in the form of LaTex comments
          to specify important details of how the Java code must be generated.
        </p>
      </section>
    </main>
  );
}

export default About;
