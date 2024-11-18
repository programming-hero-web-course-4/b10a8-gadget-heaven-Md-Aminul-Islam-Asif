
import React from 'react';

const ErrorPage = () => {
    return ( 
 
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-5">
            <div className="bg-white shadow-lg rounded-lg p-8 text-center">
               
                <h1 className="text-9xl font-extrabold text-red-900 drop-shadow-md mb-5 animate-bounce">
                    404
                </h1>
                <h2 className="text-4xl md:text-4xl text-red-900 font-semibold  mb-4">
                    Page Not Found
                </h2>
                <p className=" mt-4 text-center text-red-900 max-w-lg leading-relaxed">
                    Sorry, the page you are looking for doesn’t exist. It might have been moved or deleted.
                </p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                    Return to Homepage
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;

