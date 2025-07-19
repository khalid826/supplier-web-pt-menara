import FadeInOnScroll from '../../components/common/FadeInOnScroll';
import { getContactInfo } from '../../lib/data';

export default function Contact() {
  const contactInfo = getContactInfo();

  return (
    <FadeInOnScroll variant="up">
      <div className="py-16 md:py-20 animate-fade-in min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0A0F17] mb-4 md:mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-600">Get in touch with us for your electrical and instrumentation needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-[#0A0F17] mb-6">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#FFC402] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0F17]">Address</h3>
                    <p className="text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#FFC402] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0F17]">Email</h3>
                    <p className="text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#FFC402] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0F17]">Phone</h3>
                    <p className="text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {/* <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-[#0A0F17] mb-6">Send Message</h2>
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <p className="text-gray-600 mb-6">
                  Ready to get started? Contact us for a consultation or quote.
                </p>
                <div className="space-y-4">
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
                    className="w-full bg-[#FFC402] hover:bg-[#E6B000] text-[#0A0F17] font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Contact Us
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    Click to open our contact form
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </FadeInOnScroll>
  );
} 