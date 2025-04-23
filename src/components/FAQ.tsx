import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is this project about?",
      answer: "Our project is a unique NFT collection that combines art and technology to create an immersive digital experience."
    },
    {
      question: "When is the mint date?",
      answer: "The mint date will be announced soon. Join our Discord community to stay updated."
    },
    {
      question: "What is the mint price?",
      answer: "Mint price details will be revealed closer to the launch date."
    },
    {
      question: "How many NFTs will be available?",
      answer: "The collection will feature a limited number of unique pieces. Exact numbers will be announced soon."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-copper">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-2 text-copper">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;