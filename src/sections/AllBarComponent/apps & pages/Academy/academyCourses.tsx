// AcademyDashboard.tsx
import React from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  duration: string;
  rating?: number;
  reviews?: number;
}

const AcademyCourses: React.FC = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Basics of Angular",
      description: "Introductory course for Angular and framework basics with TypeScript",
      duration: "17h 34m"
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Learn how to design a beautiful & engaging mobile app with Figma",
      duration: "19h 17m"
    },
    {
      id: 3,
      title: "React Native",
      description: "Master React.js: Build dynamic web apps with front-end technology",
      duration: "16h 16m"
    },
    {
      id: 4,
      title: "Art & Drawing",
      description: "Easy-to-follow video & guides show you how to draw animals & people.",
      duration: "15h 49m"
    },
    {
      id: 5,
      title: "React for Beginners",
      description: "Learn React in just a couple of afternoons with this immersive course",
      duration: "1h 42m",
      rating: 4.5,
      reviews: 68
    },
    {
      id: 6,
      title: "The Science of Critical Thinking",
      description: "Learn how to improve your arguments & make better decisions",
      duration: "4h 59m"
    }
  ];

  const freeCourses = [
    {
      title: "Your First Singing Lesson",
      description: "In the same way as any other artistic domain, singing tends itself perfectly to self-teaching."
    },
    {
      title: "Guitar for Beginners",
      description: "The Fender Acoustic Guitar is the best choice for both beginners and professionals offering a great sound."
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">MATERIO</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="md:col-span-1">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Dashboards</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="pl-4">Front Pages</li>
              <li className="pl-6 text-sm">Apps & Pages</li>
              <li className="pl-4">eCommerce</li>
              <li className="pl-6 text-sm">Academy</li>
              <li className="pl-6 text-sm">Dashboard</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">My Courses</h2>
            <ul className="text-gray-600 space-y-1">
              <li className="pl-4">Course Details</li>
              <li className="pl-4">Logistics</li>
              <li className="pl-4">Email</li>
              <li className="pl-4">Chat</li>
              <li className="pl-4">Calendar</li>
              <li className="pl-4">Kanban</li>
              <li className="pl-4">Invoice</li>
            </ul>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">My Courses</h2>
            <p className="text-gray-600">Total 6 course you have purchased</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                <p className="text-gray-500 text-xs mb-4">{course.duration}</p>
                
                {course.rating && (
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-600 text-sm ml-1">
                      {course.rating} ({course.reviews})
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <button className="text-blue-600 text-sm font-medium">
                    Start Over
                  </button>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Continue →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Earn a Certificate</h3>
              <p className="text-gray-600 text-sm mb-3">
                Get the right professional certificate program for you.
              </p>
              <button className="text-blue-600 text-sm font-medium">
                View Programs
              </button>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Best Rated Courses</h3>
              <p className="text-gray-600 text-sm mb-3">
                Email now in the most popular and best rated courses.
              </p>
              <button className="text-green-600 text-sm font-medium">
                View Courses
              </button>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Today's Free Courses</h3>
              <p className="text-gray-600 text-sm">
                We offer 3,84 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {freeCourses.map((course, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500">
        <p>© 2025, Made with by ThemeSelection</p>
        <div className="flex justify-center space-x-4 mt-2 text-sm">
          <a href="#" className="text-gray-500 hover:text-gray-700">License</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">More Themes</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Documentation</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Support</a>
        </div>
      </footer>
    </div>
  );
};

export default AcademyCourses;