import React, { useState } from 'react';

interface FundCreativeProps {
  // No props needed for this component
}

const FundCreative: React.FC<FundCreativeProps> = () => {
  const [activeTab, setActiveTab] = useState('crowdfunding');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <img
            src="https://github.com/startar-bronze/khacngit/blob/main/uploads_image_7Y8Q4S5at6jxBLN0bUImZPudnTWzED_FUNDCREATIVE-LOGO-BY-GBT.jpeg?raw=true"
            alt="FundCreative Logo"
            className="h-12"
          />
          <div className="space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-500 font-bold py-2 px-4 rounded border border-blue-500">
              Login
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <nav className="flex space-x-4">
            <button
              className={`py-2 px-4 rounded-md ${
                activeTab === 'crowdfunding'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('crowdfunding')}
            >
              Crowdfunding
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeTab === 'marketplace'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('marketplace')}
            >
              Marketplace
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeTab === 'investment'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('investment')}
            >
              Investment
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeTab === 'medical'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('medical')}
            >
              Medical AI
            </button>
            <button
              className={`py-2 px-4 rounded-md ${
                activeTab === 'codeGenerator'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => handleTabClick('codeGenerator')}
            >
              Code Generator
            </button>
          </nav>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === 'crowdfunding' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Crowdfunding Campaigns</h2>
              <p className="text-gray-600 mb-4">
                Support creative projects and bring your ideas to life through crowdfunding.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Crowdfunding Card */}
                <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">Project Title</h3>
                  <p className="text-gray-500">Short description of the project.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">Another Project</h3>
                  <p className="text-gray-500">Another short description.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">Yet Another Project</h3>
                  <p className="text-gray-500">A third short description.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'marketplace' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Creative Marketplace</h2>
              <p className="text-gray-600 mb-4">
                Discover and purchase unique digital and physical products from talented creators.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Marketplace Item */}
                <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">Product Name</h3>
                  <p className="text-gray-500">Product description.</p>
                </div>
                 <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">Another Product Name</h3>
                  <p className="text-gray-500">Another product description.</p>
                </div>
                 <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">A Third Product</h3>
                  <p className="text-gray-500">Third Product description.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'investment' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Investment Opportunities</h2>
              <p className="text-gray-600 mb-4">
                Invest in promising projects and grow your portfolio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Example Investment Opportunity */}
                <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">Startup Name</h3>
                  <p className="text-gray-500">Brief description of the startup.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">Another Startup Name</h3>
                  <p className="text-gray-500">Another brief description.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                  <h3 className="font-semibold text-lg text-gray-800">A third startup name</h3>
                  <p className="text-gray-500">A third brief description.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'medical' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Medical AI Radiography Analysis</h2>
              <p className="text-gray-600 mb-4">
                Upload a radiograph image or video for preliminary AI analysis. This service is free and intended for informational purposes in remote or crisis areas.
              </p>
              <div className="border rounded-lg p-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                <p className="text-gray-500">Upload your radiograph here.</p>
              </div>
            </div>
          )}
           {activeTab === 'codeGenerator' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Application Code Generator</h2>
              <p className="text-gray-600 mb-4">
                Generate and deploy your own custom applications.
              </p>
              <div className="border rounded-lg p-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl h-40 mb-4" />
                <p className="text-gray-500">Generate Code here.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-8">
          <p>&copy; 2024 FundCreative. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default FundCreative;