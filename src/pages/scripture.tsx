import React from 'react';

const ScripturePage = () => {
  return (
    <div>
      <h1>Scripture Page</h1>
      <div className="min-h-screen bg-[#F5F5F5] flex justify-center items-center p-4">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Bhagavad Gita | Chapter 2, Verse 47
          </h1>

          <div className="text-center">
            <h2 className="text-2xl font-serif text-gray-900 mb-4">
              संस्कृत श्लोक (Sanskrit Verse)
            </h2>
            <p className="text-xl font-sanskrit text-gray-800 mb-6">
              कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
              मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि
            </p>

            <h2 className="text-2xl font-serif text-gray-900 mt-8 mb-4">
              English Translation
            </h2>
            <p className="text-lg text-gray-700 italic">
              You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, nor be attached to inaction.
            </p>

            <div className="mt-8 border-t pt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Commentary
              </h3>
              <p className="text-gray-600">
                This verse emphasizes the concept of Karma Yoga, teaching that one should perform their duties without attachment to the results. The focus is on the action itself, not the outcome, encouraging selfless service and detachment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScripturePage;