import React from 'react';

export default function PageNotFound() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:gap-12">
          <div className="md:w-6/12">
            <h1 className="text-4xl font-bold text-gray-900">Uh oh!</h1>
            <p className="mt-6 text-gray-600">
              The page you're looking for doesn't seem to exist. We're not sure how you got here, but we're happy to help you find your way back.
            </p>
          </div>
          <div className="md:w-5/12">
            <img
              src="https://emojipedia.org/pensive-face"
              alt="Sad emoji"
              className="h-48 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
