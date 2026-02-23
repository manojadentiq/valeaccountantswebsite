const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Company Name and Logos */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Vale Accountants Oxford Ltd.</h2>
            <div className="space-y-4">
              {/* Sage Logo */}
              <div className="bg-white p-3 rounded inline-block">
                <img src="/assets/images/sage-logo.png" alt="Sage" className="h-12" />
              </div>
              {/* QuickBooks Logo */}
              <div className="bg-white p-3 rounded inline-block ml-3">
                <img src="/assets/images/taxe-logo.png " alt="QuickBooks" className="h-12" />
              </div>
              {/* AAT Logo */}
              <div className="mt-4">
                <img src="/assets/images/aat-logo.jpg" alt="AAT Licensed Accountant" className="h-16 bg-white p-2 rounded" />
              </div>
            </div>
          </div>
          
          {/* Middle Column - Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">CONTACT INFORMATION</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <p className="font-semibold">Accountants & Business Advisers Oxford House</p>
                  <p className="mt-1">Unit B, 144 Oxford Road</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@valeaccountantsoxford.co.uk" className="hover:underline">
                  info@valeaccountantsoxford.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-xl">Hot Line - 01865 511898</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Right Column - Location Map */}
          <div>
            <h3 className="text-2xl font-bold mb-6">LOCATION</h3>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.123456789!2d-1.2345678!3d51.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDQ1JzU1LjYiTiAxwrAxNCcwNC40Ilc!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vale Accountants Oxford Location"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; Copyright Mfortech Technology Solutions. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
