"use client";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Gallery</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Image 1 */}
        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-500">
          <Image
            src="/7.jpg"
            alt="Digital Marketing 1"
            width={400}
            height={300}
            className="object-cover w-full h-64"
          />
        </div>

        {/* Image 2 */}
        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-500">
          <Image
            src="/8.jpg"
            alt="Digital Marketing 2"
            width={400}
            height={300}
            className="object-cover w-full h-64"
          />
        </div>

        {/* Image 3 */}
        <div className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transform transition duration-500">
          <Image
            src="/9.jpg"
            alt="Digital Marketing 3"
            width={400}
            height={300}
            className="object-cover w-full h-64"
          />
        </div>
      </div>
    </div>
  );
}
