import { Clock, Award, BookOpen, ChevronDown, MoreVertical, Search, Calendar, Laptop } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const AcademyDashboard = () => {
  // First Row Data
  const statsData = [
    { title: 'Hours Spent', value: '34h', icon: <Clock className="text-primary" /> },
    { title: 'Test Results', value: '82%', icon: <Award className="text-success" /> },
    { title: 'Course Completed', value: '14', icon: <BookOpen className="text-warning" /> },
    { title: 'Time spendings', value: '23h 14m', description: 'Weekly report', icon: <Clock className="text-info" /> }
  ];

  // Pie Chart Data (First Row)
  const interestData = [
    { name: 'Page A', uv: 4000, pv: 4900, amt: 2400, },
    { name: 'Page B', uv: 3000, pv: 3098, amt: 2210, },
    { name: 'Page C', uv: 2000, pv: 2700, amt: 2290, },
    { name: 'Page D', uv: 2780, pv: 2308, amt: 2000, },
    { name: 'Page E', uv: 1890, pv: 1700, amt: 2181, },
    { name: 'Page F', uv: 2390, pv: 1000, amt: 2500, },
  ];

  const COLORS = ['#7367F0', '#00CFE8', '#A8AAAE', '#EA5455', '#FF9F43', '#28C76F'];

  // Second Row Data (Horizontal Chart)
  const topCoursesData = [
    { name: 'Videography ', value: 85 },
    { name: 'Ui Design', value: 70 },
    { name: 'Front-end', value: 60 },
    { name: 'Back-end', value: 45 },
    { name: 'Photography', value: 30 },
    { name: 'Ux Design', value: 25 }
  ];

  // Third Row Data
  const assignmentData = [
    { title: 'User Experience Design', tasks: '120 Tasks' },
    { title: 'Basic fundamentals', tasks: '32 Tasks' },
    { title: 'React Native components', tasks: '182 Tasks' }
  ];

  // Fourth Row Data
  const courseData = [
    { 
      name: '7h 30m', 
      instructor: 'Lauretta Cole', 
      time: '17h 34m', 
      progress: 76, 
      status: '19/25',
      stats: [18, 20, 83]
    },
    { 
      name: '4h 45m', 
      instructor: 'Maybelle Zmitrovich', 
      time: '19h 17m', 
      progress: 92, 
      status: '48/52',
      stats: [14, 48, 43]
    },
    { 
      name: '5h 20m', 
      instructor: 'Gertie Langwade', 
      time: '16h 16m', 
      progress: 87, 
      status: '87/100',
      stats: [19, 81, 88]
    },
    { 
      name: '2h 50m', 
      instructor: 'Estella Chace', 
      time: '15h 49m', 
      progress: 66, 
      status: '33/50',
      stats: [28, 21, 87]
    },
    { 
      name: '4h 10m', 
      instructor: 'Euell Bownass', 
      time: '12h 42m', 
      progress: 100, 
      status: '100/100',
      stats: [13, 19, 13]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
        <div className="col-span-2 bg-white p-4 rounded-lg shadow-xl">
          <div>
            <h1 className="text-2xl font-semibold">Welcome back, Felecia 👋🏻</h1>
            <p className="text-gray-500 w-[70%] mt-2">Your progress this week is Awesome. let's keep it up and get a lot of points reward!</p>
          </div>
          <div className='flex items-center mt-4 justify-between'>
            <div className="flex items-center space-x-4">
              <div className='w-12 h-12 bg-[#5d36e750] flex justify-center items-center'>
                <Laptop size={27} className="text-[#5d36e7]" />
              </div>
              <div className=''>
                <h2>Hours Spent</h2>
                <h2 className='text-[#5d36e7]'>34h</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className='w-12 h-12 bg-[#0A6CD550] flex justify-center items-center'>
                <Award size={27} className="text-[#0A6CD5]" />
              </div>
              <div className=''>
                <h2>Test Results</h2>
                <h2 className='text-[#0A6CD5]'>82%</h2>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className='w-12 h-12 bg-[#ffb40050] flex justify-center items-center'>
                <BookOpen size={27} className="text-[#ffb400]" />
              </div>
              <div className=''>
                <h2>Course Completed</h2>
                <h2 className='text-[#ffb400]'>14</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-xl col-span-1 flex items-center justify-between">
          <div>
            <div className='mb-6 space-y-2'>
              <h2 className='text-xl font-semibold'>Time Spending</h2>
              <p className='text-gray-500'>Weekly Report </p>
            </div>
            <div className='mt-4 space-y-2'>
              <h2 className='text-xl font-semibold'>23h 14m</h2>
              <div className='flex items-center justify-center py-2 px-4 bg-[#0A6CD550] rounded-lg'> 
                <p className='text-[#0A6CD5]'>+18.4%</p>
              </div>
            </div>
          </div>
          <div className='w-[50%] h-full flex items-center justify-center'>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={interestData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={2}
                  dataKey="uv"
                  width={50}
                  height={50}
                >
                  {interestData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl col-span-2 shadow-sm">
          <h3 className="font-semibold mb-6">Topic you are interested in</h3>
          <div className="flex">
            <div className="w-4/5 h-full">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={topCoursesData}
                  layout="vertical" // This makes it horizontal
                  margin={{
                    top: 20,
                    right: 30,
                    left: 40, // Increased left margin for longer labels
                    bottom: 5,
                  }}
                  barSize={20}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    width={80} // Adjust for label length
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip />
                  <Bar 
                    dataKey="value" 
                    fill="#8884d8" 
                    radius={[0, 4, 4, 0]} // Rounded right corners
                  >
                    {topCoursesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                    ))}
                  </Bar>
                  <XAxis type="number" hide />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/5 flex flex-col justify-center space-y-3">
              {topCoursesData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm p-2">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Courses */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Top courses</h3>
            <MoreVertical className="text-gray-400" />
          </div>
          <div className='flex items-center justify-between py-3'>
            <h3 className='text-md font-normal text-gray-500'>INSTRUCTORS</h3>
            <h3 className='text-md font-normal text-gray-500'>COURSES</h3>
          </div>
          <div className="space-y-4">
            {[
              {name: 'Videography Basic',job: "Ui", img: "../../../../public/images/avatars/1.png", value: 32},
              {name: 'Design Course',job: "Ui", img: "../../../../public/images/avatars/2.png", value: 62},
              {name: 'Basic Front-end',job: "Ui", img: "../../../../public/images/avatars/3.png", value: 33},
              {name: 'Development Course',job: "Ui", img: "../../../../public/images/avatars/4.png", value: 21},
            ].map((course, index) => (
              <div key={index} className="flex items-center justify-between p-1 hover:bg-gray-50 rounded">
                <div className='flex items-center gap-2'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full'>
                    <img src={course.img} alt="" className='rounded-full' />
                  </div>
                  <div>
                    <span className="text-sm">{course.name}</span>
                    <p>{course.job}</p>
                  </div>
                </div>
                <span>{course.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Row - 3 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Assignment Progress */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Assignment progress</h3>
            <MoreVertical className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {assignmentData.map((item, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-gray-500 text-sm mt-1">{item.tasks}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Webinar */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Upcoming Webinar</h3>
            <MoreVertical className="text-gray-400" />
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium">Next Generation Frontend Architecture Using Layout Engine And React Native Web.</h4>
            <div className="flex items-center mt-3 text-sm text-gray-500">
              <Calendar className="mr-2" size={16} />
              <span>17 Nov 23</span>
              <Clock className="ml-4 mr-2" size={16} />
              <span>32 Minutes</span>
            </div>
          </div>
        </div>

        {/* Course you are taking */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Course you are taking</h3>
            <MoreVertical className="text-gray-400" />
          </div>
          <div className="space-y-4">
            {courseData.slice(0, 2).map((course, index) => (
              <div key={index} className="p-3 border rounded-lg">
                <h4 className="font-medium">{course.name}</h4>
                <p className="text-gray-500 text-sm">{course.instructor}</p>
                <div className="flex justify-between mt-2 text-sm">
                  <span>{course.time}</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fourth Row - Course Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="pb-3 font-medium">COURSE NAME</th>
                <th className="pb-3 font-medium">TIME</th>
                <th className="pb-3 font-medium">PROGRESS</th>
                <th className="pb-3 font-medium">STATUS</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {courseData.map((course, index) => (
                <tr key={index} className="border-b last:border-0">
                  <td className="py-4">
                    <div className="font-medium">{course.name}</div>
                    <div className="text-gray-500 text-sm">{course.instructor}</div>
                  </td>
                  <td className="py-4">{course.time}</td>
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${course.progress}%`,
                            backgroundColor: course.progress === 100 ? '#28C76F' : '#7367F0'
                          }}
                        />
                      </div>
                      <span>{course.progress}%</span>
                    </div>
                  </td>
                  <td className="py-4">{course.status}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      {course.stats.map((stat, i) => (
                        <div key={i} className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                          {stat}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">Rows per page: 5</span>
          <span className="text-gray-500">1–5 of 25</span>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default AcademyDashboard;