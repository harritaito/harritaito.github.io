import Social from './Social';

const Footer = () => (
  <footer className="row footer">
    <p className={"col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6"}>
      Made with ⌚ by Harri
    </p>
    <Social/>
    <style jsx>{`
      .footer {
        margin-top: 5em;
      }

      @media only screen and (max-width: 575px)  {
        .footer {
          text-align: center;
        }
      }
    `}</style>
  </footer>
)

export default Footer;
