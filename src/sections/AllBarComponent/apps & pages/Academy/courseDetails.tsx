import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, Share, Bookmark, ChevronDown, ChevronRight, User, Globe, MessageSquare, CheckCircle, Circle, Star } from 'lucide-react';

const courseContent = [
  {
    id: 1,
    title: "Welcome to this course",
    duration: "2.4 min",
    completed: true
  },
  {
    id: 2,
    title: "Watch before you start",
    duration: "4.8 min",
    completed: true
  },
  {
    id: 3,
    title: "Basic Design theory",
    duration: "5.9 min",
    completed: false
  },
  {
    id: 4,
    title: "Basic Fundamentals",
    duration: "3.6 min",
    completed: false
  },
  {
    id: 5,
    title: "What is ui/ux",
    duration: "10.6 min",
    completed: false
  }
];

const sections = [
  {
    title: "Web design for Developers",
    lessons: 4,
    duration: "19.81 min",
    completed: 0
  },
  {
    title: "Build Beautiful Websites!",
    lessons: 6,
    duration: "35.66 min",
    completed: 0
  },
  {
    title: "Final Project",
    lessons: 3,
    duration: "38 min",
    completed: 0
  }
];

const CourseDetails = () => {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'content': true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Main Content */}
      <div className="flex-1 flex bg-white">
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-medium">
                  UI/UX
                </span>
                <button className="p-1 hover:bg-accent rounded transition-colors">
                  <Share className="h-4 w-4" />
                </button>
                <button className="p-1 hover:bg-accent rounded transition-colors">
                  <Bookmark className="h-4 w-4" />
                </button>
              </div>
              <h1 className="text-2xl font-bold">UI/UX Basic Fundamentals</h1>
              <p className="text-muted-foreground">Prof. Devonne Wallbridge</p>
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-card border rounded-lg overflow-hidden mb-6 shadow-sm">
            <div className="relative bg-gray-100 aspect-video">
              <img
                src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=800&h=450&fit=crop"
                alt="Course video"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </button>
            </div>
          </div>

          {/* Course Info */}
          <div className="bg-card border rounded-lg p-6 mb-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4">About this course</h2>
            <p className="text-muted-foreground mb-6">
              Learn web design in 1 hour with 25+ simple-to-use rules and guidelines — tons of amazing web design resources included!
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-4">By the numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded"></div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Skill level: All Level</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">Students: 38,815</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">Languages: English</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">Captions: Yes</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-blue-100 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded"></div>
                    </div>
                    <div className="text-sm text-muted-foreground">Lectures: 19</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Play className="w-5 h-5 text-muted-foreground" />
                    <div className="text-sm text-muted-foreground">Video: 1.5 total hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Description</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  The material of this course is also covered in my other course about web design and development with HTML5 & CSS3. Scroll to the bottom of this page to check out that course, too! If you're already taking my other course, you already have all it takes to start designing beautiful websites today!
                </p>
                <p className="italic">
                  "Best web design course: If you're interested in web design, but want more than just a "how to use WordPress" course, I highly recommend this one." — Florian Giusti
                </p>
                <p className="italic">
                  "Very helpful to us left-brained people: I am familiar with HTML, CSS, jQuery, and Twitter Bootstrap, but I needed instruction in web design. This course gave me practical, impactful techniques for making websites more beautiful and engaging." — Susan Darlene Cain
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h3 className="font-semibold mb-4">Instructor</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">Devonne Wallbridge</div>
                  <div className="text-sm text-muted-foreground">Web Developer, Designer, and Teacher</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Course Content */}
        <div className="w-80 p-6 bg-sidebar-background border-l border-sidebar-border">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">Course Content</h3>
              <button
                onClick={() => toggleSection('content')}
                className="p-1 hover:bg-accent rounded transition-colors"
              >
                {expandedSections.content ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
            </div>
            <div className="text-sm text-muted-foreground">2 / 5 | 273 min</div>
          </div>

          {expandedSections.content && (
            <div className="space-y-1 mb-6">
              {courseContent.map((lesson) => (
                <div
                  key={lesson.id}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                >
                  {lesson.completed ? (
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{lesson.id}. {lesson.title}</div>
                    <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-3">
            {sections.map((section, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => toggleSection(`section-${index}`)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-accent transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-medium text-sm">{section.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {section.completed} / {section.lessons} | {section.duration}
                    </div>
                  </div>
                  {expandedSections[`section-${index}`] ? (
                    <ChevronDown className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-lg font-medium transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;