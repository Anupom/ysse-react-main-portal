import Button from "../components/Button";

function NotFound() {
  return (
    <section className="section not-found-section">
      <div className="container">
        <div className="not-found-box">
          <span className="error-code">404</span>
          <h1>Page Not Found</h1>
          <p>
            Oops! The route you entered does not exist on the YSSE Main Portal. Please check the URL or return to the homepage.
          </p>
          <div className="hero-actions justify-center">
            <Button to="/" variant="primary">Return to Home</Button>
            <Button to="/programs" variant="outline">Browse Programs</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;