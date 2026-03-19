"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bob M.",
    rating: 5,
    text: "Had an emergency lockout at 10pm and they were there within 20 minutes. Professional, fast, and reasonably priced. Been in business forever for a reason. Will definitely call again.",
    service: "Emergency Lockout",
  },
  {
    name: "Patricia H.",
    rating: 5,
    text: "Bought a Gardall safe from them for our home office. The staff was incredibly knowledgeable and helped us pick the right size and fire rating. Delivery and installation was flawless.",
    service: "Safe Purchase & Install",
  },
  {
    name: "Dave S.",
    rating: 5,
    text: "Locked my keys in my truck on a cold morning. Called Cataract Safe & Lock and they came right out. Didn't scratch a thing. These guys know what they're doing — locals have trusted them for decades.",
    service: "Automotive Locksmith",
  },
  {
    name: "Karen W.",
    rating: 5,
    text: "Re-keyed our entire house after buying it. Fair price, done in under an hour, and the technician was super friendly. I won't go anywhere else for locksmith work in Niagara Falls.",
    service: "Re-Key Service",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-csl-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Customer Reviews
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-csl-navy mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-csl-gold text-csl-gold" />
            ))}
            <span className="ml-2 text-csl-navy font-semibold">5.0</span>
            <span className="text-gray-400 ml-1 text-sm">· Google Reviews</span>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-csl-gold opacity-60 flex-shrink-0" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-csl-gold text-csl-gold" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Reviewer info */}
              <div className="border-t border-gray-200 pt-3 mt-auto">
                <p className="font-semibold text-csl-navy text-sm">{t.name}</p>
                <p className="text-xs text-gray-400">{t.service}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/search?q=Cataract+Safe+%26+Lock+Niagara+Falls+NY+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-csl-gold hover:text-csl-gold-dark font-semibold text-sm transition-colors underline underline-offset-4"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            See all our Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}
