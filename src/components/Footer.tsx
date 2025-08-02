import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

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
    { event: 'Paper Submission', date: 'August 15, 2025' },
    { event: 'Notification', date: 'August 31, 2025' },
    { event: 'Camera Ready', date: 'September 15, 2025' },
    { event: 'Conference', date: 'July 22-23, 2026' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">iS</span>
              </div>
                              <span className="text-xl font-bold">STESI 2026</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              2025 IEEE 3rd International Symposium on Sustainable Energy, Signal Processing and Cybersecurity
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>GIET University, Gunupur, Odisha</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@isssc2025.org</span>
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
              <div>
                <div className="font-medium mb-1">Conference Chair</div>
                <div className="text-primary-foreground/80">Dr. [Name]</div>
                <div className="text-primary-foreground/80">GIET University</div>
              </div>
              <div>
                <div className="font-medium mb-1">Technical Support</div>
                <div className="text-primary-foreground/80">tech@isssc2025.org</div>
              </div>
              <div>
                <div className="font-medium mb-1">Registration</div>
                <div className="text-primary-foreground/80">register@isssc2025.org</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © 2025 iSSSC. All rights reserved. | Powered by IEEE
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;