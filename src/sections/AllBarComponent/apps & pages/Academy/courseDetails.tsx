// CourseDetails.tsx
import React from 'react';

interface CourseDetailItem {
  label: string;
  value: string;
  checked?: boolean;
}

const CourseDetails: React.FC = () => {
  const courseDetails: CourseDetailItem[] = [
    { label: "Skill level", value: "All Level", checked: true },
    { label: "Lectures", value: "19", checked: false },
    { label: "Students", value: "38,815", checked: true },
    { label: "Video", value: "1.5 total hours", checked: false },
    { label: "Languages", value: "English", checked: true },
    { label: "Captions", value: "Yes", checked: false }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">UI/UX Basic Fundamentals</h1>
        <p className="text-gray-600">Prof. Devonne Wallbridge</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">About this course</h2>
        <p className="text-gray-600 mb-6">
          Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!
        </p>

        <h3 className="text-lg font-semibold text-gray-700 mb-4">By the numbers</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseDetails.map((detail, index) => (
            <div key={index} className="flex items-center">
              {detail.checked !== undefined && (
                <span className={`inline-block w-5 h-5 rounded border mr-3 ${detail.checked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                  {detail.checked && (
                    <svg className="w-4 h-4 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  )}
                </span>
              )}
              <span className="text-gray-700">
                <span className="font-medium">{detail.label}:</span> {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-600 mb-4">
          The material of this course is also covered in my other course about web design and development with HTML5 & CSS3. Scroll to the bottom of this page to check out that course, too! If you're already taking my other course, you already have all it takes to start designing beautiful websites today!
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <p className="text-gray-700 italic mb-2">
            "Best web design course: If you're interested in web design, but want more than just a 'how to use WordPress' course, I highly recommend this one." — Florian Giusti
          </p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 italic">
            "Very helpful to us left-brained people: I am familiar with HTML, CSS, jQuery, and Twitter Bootstrap, but I needed instruction in web design. This course gave me practical, impactful techniques for making websites more beautiful and engaging." — Susan Darlene Cain
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructor</h2>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <span className="text-gray-600 font-semibold">DW</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Devonne Wallbridge</h3>
            <p className="text-gray-600">Web Developer, Designer, and Teacher</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CourseDetails;