import React from 'react';

const NewsletterSignup = () => {
return (
        <section className="py-20 bg-storm">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Luxury Hospitality Insights</h2>
            <p className="text-xl text-amber-100 mb-8">
              Subscribe to our newsletter for exclusive strategies and trends in luxury hospitality marketing.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-amber-100 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
  );
};

export default NewsletterSignup;