
function Footer() {

  return (
    <div className="jumbotron jumbotron-fluid py-2" id="copyright">
      <div className="container my-5">
        <div className="row justify-content-between">
          <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
            Copyright © 2024.
          </div>
        

        </div>
          <div className="align-self-center text-center text-md-left my-2">
            <a href="/privacy">
              Privacy Policy
            </a>
          </div>
          <div className="align-self-center text-center text-md-left my-2">
            <a href="/terms">
              Terms &amp; Services
            </a>
          </div>
      </div>
    </div>
  );
}

export default Footer;