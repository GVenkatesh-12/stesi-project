import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

// make a variable for the year
const year = new Date().getFullYear();

const Footer = () => {
  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Call for Papers', path: '/call-for-papers' },
    { name: 'Registration', path: '/registration' },
    { name: 'Speakers', path: '/speakers' },
    { name: 'Venue', path: '/venue' },
    { name: 'Contact', path: '/contact' },
  ];

  const importantDates = [
    {
      event: 'Paper Submission',
      date: (
        <span className="inline-flex flex-col items-start gap-0.5">
          <s className="opacity-70">February 28, 2026</s>
          <span className="font-medium">Hard Deadline: March 15, 2026</span>
        </span>
      ),
    },
    { event: 'Notification of Acceptance', date: 'April 15, 2026' },
    { event: 'Camera Ready', date: 'April 30, 2026' },
    { event: 'Conference', date: 'July 22-23, 2026' },
    { event: 'Registration', date: 'May 5, 2026' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">iS</span>
              </div> */}
                              <span className="text-xl font-bold">STESI 2026</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
            International Conference on Smart Technologies for Energy, Sustainability & Industry
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Manipal University Jaipur, Rajasthan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>stesi@jaipur.manipal.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Dates */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Important Dates</h3>
            <ul className="space-y-2">
              {importantDates.map((item, index) => (
                <li key={index} className="text-sm">
                  <div className="text-primary-foreground font-medium">{item.event}</div>
                  <div className="text-primary-foreground/80">{item.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3 text-sm">
              {/* <div>
                <div className="font-medium mb-1">Conference Chair</div>
                <div className="text-primary-foreground/80">Dr. [Name]</div>
                <div className="text-primary-foreground/80">GIET University</div>
              </div> */}
              <div>
                <div className="font-medium mb-1">Technical Support</div>
                <div className="text-primary-foreground/80">stesi@jaipur.manipal.edu</div>
              </div>
              <div className="pt-4">
                <p className="text-primary-foreground/80 mb-2 font-medium">Visitor Counter</p>
                <div className="flex justify-center md:justify-start">
                  <a
                    href="https://info.flagcounter.com/B4AE"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View detailed visitor statistics"
                    className="inline-block"
                  >
                    <img
                      src="https://s01.flagcounter.com/count2/B4AE/bg_2A2060/txt_FFFFFF/border_CCCCCC/columns_2/maxflags_8/viewers_0/labels_0/pageviews_1/flags_0/percent_0/"
                      alt="Flag Counter showing visitor statistics"
                      style={{ border: 0 }}
                      className="w-32 sm:w-36 md:w-40 h-auto"
                    />
                  </a>
                </div>
              </div>
              {/* <div>
                <div className="font-medium mb-1">Registration</div>
                <div className="text-primary-foreground/80">register@isssc2025.org</div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
               {year} STESI | Powered by IEEE
            </div>
            {/* <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Accessibility
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;