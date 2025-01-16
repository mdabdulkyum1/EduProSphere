
const Footer = () => {
  return (
    <footer className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold text-primary mb-2">EduProSphere</h2>
            <p className="text-lg text-center md:text-left max-w-xs">
              Empowering education and building a community of lifelong learners and educators.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-lg">
                <li><a href="#home" className="hover:text-accent">Home</a></li>
                <li><a href="#courses" className="hover:text-accent">Courses</a></li>
                <li><a href="#about" className="hover:text-accent">About Us</a></li>
                <li><a href="#contact" className="hover:text-accent">Contact</a></li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-accent">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-accent">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-accent">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} EduProSphere. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
