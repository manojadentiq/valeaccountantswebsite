import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: '/assets/images/slider-img-1.jpg',
      title: 'WELCOME TO VALE ACCOUNTANTS OXFORD',
      subtitle: 'Your Trusted Financial Partner',
      description: 'We are a highly pro-active, experience and dedicated team based in Kidlington, Oxfordshire who are fully committed to providing you with the high quality service that you deserve.'
    },
    {
      image: '/assets/images/slider-img-2.jpg',
      title: 'OUR SERVICES OUTREACH',
      subtitle: 'Local Expertise, National Reach',
      description: 'Based in Kidlington, we work with both local and nationwide clients offering a wide range of work with numbers we speak to our clients on a human level, making what can be complicated accounting processes as straightforward and easy to understand as possible.'
    },
    {
      image: '/assets/images/slider-img-3.jpg',
      title: 'PROFESSIONAL ACCOUNTING SERVICES',
      subtitle: 'Excellence in Every Detail',
      description: 'Expert financial guidance and comprehensive accounting solutions tailored to help your business thrive and succeed in today\'s competitive market.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden pt-20">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image with Ken Burns Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src={slide.image} 
                alt={slide.title}
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ${
                  index === currentSlide ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
              
              {/* Animated Overlay Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-transparent to-gray-900 animate-pulse"></div>
              </div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center z-10">
              <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-5xl">
                  {/* Animated Subtitle */}
                  <div className="mb-4 overflow-hidden">
                    <div className={`inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 px-4 py-1.5 rounded-full transform transition-all duration-1000 ${
                      index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                    }`}>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-blue-200 font-semibold text-xs tracking-wider">{slide.subtitle}</span>
                    </div>
                  </div>

                  {/* Animated Title with Split Effect */}
                  <div className="mb-6 overflow-hidden">
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight transform transition-all duration-1000 delay-200 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`} style={{ textShadow: '0 2px 2px rgba(0, 0, 0, 0.8), 0 2px 2px rgba(0, 0, 0, 0.6)' }}>
                      {slide.title}
                    </h1>
                  </div>
                  
                  {/* Decorative Line with Animation */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000 delay-400 ${
                      index === currentSlide ? 'w-24 opacity-100' : 'w-0 opacity-0'
                    }`}></div>
                    <div className={`flex gap-1.5 transition-all duration-1000 delay-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Animated Description */}
                  <div className="mb-8 overflow-hidden">
                    <p className={`text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed transform transition-all duration-1000 delay-600 ${
                      index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`} style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 5px rgba(0, 0, 0, 0.6)' }}>
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* Animated Buttons */}
                  <div className={`flex flex-wrap gap-3 transform transition-all duration-1000 delay-800 ${
                    index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}>
                    <a 
                      href="/services" 
                      className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
                    >
                      <span className="relative z-10">LEARN MORE</span>
                      <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    
                    <a 
                      href="/contact" 
                      className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-3 rounded-lg font-bold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                    >
                      <span>GET IN TOUCH</span>
                      <svg className="w-4 h-4 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        ))}

        {/* Modern Navigation Dots - Hidden on Mobile */}
        <div className="hidden md:block absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center gap-3 bg-black/30 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-3 shadow-lg shadow-blue-500/50' 
                    : 'bg-white/40 hover:bg-white/60 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stylish Navigation Arrows - Hidden on Mobile */}
        <button
          onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="hidden md:block absolute left-8 top-1/2 -translate-y-1/2 z-20 group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-20 group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-white/80 animate-bounce">
            <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* We Can Help You Section */}
      <section id="we-can-help" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">WE CAN HELP YOU</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We can visit you at home, in your business place of work or simply visit our office, to arrange a free initial meeting to discuss your requirements
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/about-us.jpg" 
                  alt="Accounting Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Benefits List */}
            <div className="order-1 md:order-2 space-y-8">
              {/* Save time */}
              <div className="group">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Save time
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With our support you can focus on your business and customers while we look after your accounts and taxes.
                </p>
              </div>

              {/* Solve problems */}
              <div className="group">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Solve problems
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  As your dedicated Accountants and our team are here to make sure things runs smoothly, no matter what the concerns.
                </p>
              </div>

              {/* Grow your business */}
              <div className="group">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Grow your business
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We know small and medium sized businesses. Share your ambitions with us and we will help you realise your dream and achieve business success.
                </p>
              </div>

              {/* Save money */}
              <div className="group">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  Save money
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  With Vale Accountants Oxford ltd taking care of your books, you can save money on in-house administration and bookkeeping to keep your costs down and save you taxes to pay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/images/call-to-action-bg.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">CONTACT VALE ACCOUNTANTS OXFORD LTD</h3>
              
              {/* Phone Numbers */}
              <div className="space-y-4">
                <a href="tel:01865511898" className="flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-blue-200 transition-colors group">
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  01865 511898
                </a>
                
                <a href="tel:07483351102" className="flex items-center gap-4 text-2xl md:text-3xl font-bold hover:text-blue-200 transition-colors group">
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  07483 351102
                </a>
              </div>
            </div>

            {/* Right Side - CTA Button */}
            <div>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 group"
              >
                CONTACT US
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </section>

      {/* Our Services for Businesses */}
      <section id="services-businesses" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services for Businesses</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We work with a variety of small, medium and large sized businesses both locally and nationally. We provide accountancy services that free up time and resources within the company and help businesses to maximise profits by being as tax efficient as possible.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Service 1 - New Business Start-up advisory */}
            <div className="relative">
              <div className="relative mb-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/img-1.jpg" 
                    alt="New Business Start-up" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-full">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900">Start-up Services</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      New Business Start-up Advisory
                    </h3>
                    <div className="w-24 h-1 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 -mt-16 relative z-10 ml-8 mr-8 border border-gray-100 min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                  Structure and Strategy, Raising finance & Cash Flow forecasts, HMRC Registration, Accounting Software, Contractors & IR35 Status, Payrolls, Digital VAT, bookkeeping & Management accounts.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-fit"
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Service 2 - Business & Corporate Tax Planning */}
            <div className="relative">
              <div className="relative mb-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/img-3.jpg" 
                    alt="Tax Planning" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-indigo-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-600 p-2 rounded-full">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900">Tax Planning</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Business & Corporate Tax Planning
                    </h3>
                    <div className="w-24 h-1 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 -mt-16 relative z-10 ml-8 mr-8 border border-gray-100 min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                  Remuneration Planning, Extracting Profits, VAT Compliance, Corporation Tax.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl w-fit"
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Service 3 - Digital VAT and Bookkeeping */}
            <div className="relative">
              <div className="relative mb-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/img-5.jpg" 
                    alt="Digital VAT and Bookkeeping" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-600 p-2 rounded-full">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900">VAT & Bookkeeping</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Digital VAT and Bookkeeping
                    </h3>
                    <div className="w-24 h-1 bg-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 -mt-16 relative z-10 ml-8 mr-8 border border-gray-100 min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                  VAT and bookkeeping, Construction Industry Scheme (CIS).
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg hover:shadow-xl w-fit"
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Service 4 - Payroll Bureau */}
            <div className="relative">
              <div className="relative mb-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/img-7.jpg" 
                    alt="Payroll Bureau" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-600 p-2 rounded-full">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900">Payroll Services</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Payroll Bureau
                    </h3>
                    <div className="w-24 h-1 bg-green-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 -mt-16 relative z-10 ml-8 mr-8 border border-gray-100 min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                  Fully managed payroll service, Pay slips, Auto enrolment, The Pension Regulators.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl w-fit"
                >
                  <span>Learn More</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services for Individuals */}
      <section id="services-individuals" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services for Individuals</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We will take the stress out of the organizing of your finances, making them easy for you to understand, and ensuring you are as tax efficient as possible and have the best financial plan in place for the future.
            </p>
          </div>

          {/* Services Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Personal Tax Returns and Planning */}
            <div className="relative">
              {/* Image Section with Overlay */}
              <div className="relative mb-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/img-2.jpg" 
                    alt="Personal Tax Returns" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-600 p-2 rounded-full">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900">Individual Services</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Personal Tax Returns and Planning
                    </h3>
                    <div className="w-24 h-1 bg-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 -mt-16 relative z-10 ml-8 mr-8 min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                  Self-Assessment Tax Returns, Working Tax Credit, Child Tax credit, Child Benefits, Marriage Allowances, Capital Gains Tax, Tax Planning and advisory for business owners.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-fit"
                >
                  <span>Get Started</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Landlords */}
            <div className="relative">
              {/* Image Section with Overlay */}
              <div className="relative mb-8">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/assets/images/img-4.jpg" 
                    alt="Landlord Services" 
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-indigo-900/20 to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-8 left-8">
                    <div className="bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-600 p-2 rounded-full">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <span className="font-bold text-gray-900">Property Services</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Landlords
                    </h3>
                    <div className="w-24 h-1 bg-indigo-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 -mt-16 relative z-10 ml-8 mr-8 min-h-[240px] flex flex-col">
                <p className="text-gray-700 leading-relaxed text-lg mb-6 flex-grow">
                  Tax Returns, Jointly owned properties, Non-resident landlords and indirectly held properties, Principle private Residence and Letting Relief.
                </p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl w-fit"
                >
                  <span>Get Started</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its financial goals
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl inline-block hover:-translate-y-1"
          >
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
