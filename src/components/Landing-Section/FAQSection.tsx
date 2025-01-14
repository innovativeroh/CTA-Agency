"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

interface FAQItem {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

const faqs: FAQItem[] = [
    {
      question: "What is your cancellation policy?",
      answer: "We understand that things change. You can cancel your plan at any time, and we'll refund you the difference already paid.",
      icon: "📋"
    },
    {
      question: "What services do you offer?",
      answer: "We provide performance marketing, social media marketing, influencer marketing, web design and development, and more tailored strategies.",
      icon: "🛠️"
    },
    {
      question: "How do you measure success?",
      answer: "Success is measured through data-driven insights, achieving KPIs like increased ROAS, engagement, and conversions.",
      icon: "📈"
    },
    {
      question: "How soon can we see results?",
      answer: "Results vary by campaign type, but typically our strategies start showing improvements within the first few weeks.",
      icon: "⏳"
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Yes, we tailor our strategies to meet your unique goals and challenges for optimal results.",
      icon: "🎯"
    },
    {
      question: "How can we get started?",
      answer: "Simply reach out through our contact form or email us to schedule a consultation. We’ll discuss your goals and propose a plan.",
      icon: "📞"
    }
  ];
  

const FAQAccordion = ({ question, answer, icon }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0 px-5" id='faq'>
      <button
        className="w-full flex justify-between items-center text-left py-6 hover:bg-gray-50 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl bg-blue-50 p-2 rounded-full">{icon}</span>
          <span className="text-lg font-semibold text-gray-900">{question}</span>
        </div>
        <ChevronDownIcon 
          className={`w-6 h-6 text-blue-600 transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 pb-6 ml-16 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-[1440px] m-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQAccordion key={index} {...faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection