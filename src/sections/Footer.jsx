const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a target="_blank" href="https://github.com/aditya-narayan-sahoo">
            <img
              src="/assets/github.svg"
              alt="github"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            target="_blank"
            href="https://linkedin.com/in/aditya-narayan-sahoo"
          >
            <img
              src="/assets/linkedin.svg"
              alt="linkedin"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
        <div className="social-icon">
          <a target="_blank" href="https://x.com/aditya_n_sahoo">
            <img
              src="/assets/twitter.svg"
              alt="twitter"
              className="w-1/2 h-1/2 ml-3"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        © 2024 Aditya Sahoo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
