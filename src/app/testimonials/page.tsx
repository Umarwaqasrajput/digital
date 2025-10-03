import React from "react";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Testimonials
      </h1>

      <div className="max-w-3xl space-y-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">
            Digital Marketing Energy helped us grow our business faster than we ever imagined. 
            Their strategies are smart effective and perfectly tailored to our needs.
          </p>
          <p className="mt-2 font-semibold text-blue-600"> Ayesha Siddiqui</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">
            We were amazed by the professionalism and creativity of the Digital Marketing Energy team. 
            They truly understand whats possible in online marketing.
          </p>
          <p className="mt-2 font-semibold text-blue-600"> Hassan Mirza</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">
            Working with Digital Marketing Energy has been a game-changer. 
            Our campaigns now perform at a level we didnt think was possible before.
          </p>
          <p className="mt-2 font-semibold text-blue-600"> Zara Qureshi</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
