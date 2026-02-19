import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Star, Clock, ChevronDown, Play } from 'lucide-react';

const courses = [
	{
		id: 1,
		title: 'Basics of Angular',
		description:
			'Learn day-to-day course for Angular and framework basics with TypeScript',
		category: 'Web',
		rating: 4.4,
		reviews: 8,
		duration: '17h 34m',
		progress: 45,
		image:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
		instructor: 'Prof. Angular Expert',
	},
	{
		id: 2,
		title: 'UI/UX Design',
		description: 'Learn how to design a beautiful & engaging mobile app with Figma',
		category: 'Design',
		rating: 4.9,
		reviews: 110,
		duration: '19h 17m',
		progress: 0,
		image:
			'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=400&h=250&fit=crop',
		instructor: 'Design Master',
	},
	{
		id: 3,
		title: 'React Native',
		description: 'Master React js: Build dynamic web apps with front-end technology',
		category: 'Web',
		rating: 4.5,
		reviews: 9,
		duration: '16h 16m',
		progress: 0,
		image:
			'https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?w=400&h=250&fit=crop',
		instructor: 'React Pro',
	},
	{
		id: 4,
		title: 'Art & Drawing',
		description: 'Expressive arts & guides show you how to draw animals & people.',
		category: 'Design',
		rating: 4.7,
		reviews: 18,
		duration: '15h 49m',
		progress: 0,
		image:
			'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=250&fit=crop',
		instructor: 'Art Teacher',
	},
	{
		id: 5,
		title: 'React for Beginners',
		description:
			'Learn React in just a couple of afternoons with this immersive course',
		category: 'Web',
		rating: 4.5,
		reviews: 68,
		duration: '1h 42m',
		progress: 0,
		image:
			'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
		instructor: 'Web Dev',
	},
	{
		id: 6,
		title: 'The Science of Critical Thinking',
		description: 'Learn how to improve your argument & make better decisions',
		category: 'Psychology',
		rating: 4.4,
		reviews: 64,
		duration: '4h 59m',
		progress: 0,
		image:
			'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=400&h=250&fit=crop',
		instructor: 'Psychology Prof',
	},
];

const MyCourses = () => {
	const location = useLocation();
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('All Courses');
	const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
	const [hideCompleted, setHideCompleted] = useState(false);

	const filteredCourses = courses.filter((course) => {
		const matchesSearch =
			course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			course.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory =
			selectedCategory === 'All Courses' || course.category === selectedCategory;
		const matchesCompleted = !hideCompleted || course.progress < 100;
		return matchesSearch && matchesCategory && matchesCompleted;
	});

	return (
		<div className="min-h-screen bg-background flex">
			{/* Main Content */}
			<div className="flex-1">
				{/* Hero Section */}
				<div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
					<div className="max-w-4xl mx-auto text-center">
						<div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
							<div className="w-8 h-8 bg-blue-500 rounded-full"></div>
						</div>
						<h1 className="text-3xl font-bold mb-4">
							Education, talents, and career opportunities.{' '}
							<span className="text-blue-300">All in one place.</span>
						</h1>
						<p className="text-blue-100 mb-6 max-w-2xl mx-auto">
							Grow your skill with the most reliable online courses and certifications in
							marketing, information technology, programming, and data science.
						</p>
						<div className="relative max-w-md mx-auto">
							<input
								type="text"
								placeholder="Find your course"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full px-4 py-3 rounded-lg text-gray-900 dark:text-white pl-4 pr-12"
							/>
							<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
								<Search className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>

				<div className="">
					{/* My Courses Section */}
					<div className="mb-8">
						<div className="flex items-center justify-between mb-6 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
							<div>
								<h2 className="text-2xl font-bold dark:text-white">My Courses</h2>
								<p className="text-muted-foreground dark:text-gray-300">
									Total 6 course you have purchased
								</p>
							</div>
							<div className="flex items-center gap-4">
								<div className="relative">
									<button
										onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
										className="flex items-center gap-2 px-4 py-2 border rounded-lg bg-background hover:bg-accent transition-colors"
									>
										<span>Courses</span>
										<span className="text-muted-foreground">
											{selectedCategory}
										</span>
										<ChevronDown className="h-4 w-4" />
									</button>
									{showCategoryDropdown && (
										<div className="absolute top-full right-0 mt-1 bg-popover border rounded-lg shadow-lg z-50 min-w-[150px]">
											<div className="py-1">
												{['All Courses', 'Web', 'Design', 'Psychology'].map(
													(category) => (
														<button
															key={category}
															onClick={() => {
																setSelectedCategory(category);
																setShowCategoryDropdown(false);
															}}
															className="w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors"
														>
															{category}
														</button>
													)
												)}
											</div>
										</div>
									)}
								</div>
								<div className="flex items-center gap-2">
									<button
										onClick={() => setHideCompleted(!hideCompleted)}
										className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
											hideCompleted ? 'bg-primary' : 'bg-input'
										}`}
									>
										<span
											className={`inline-block h-4 w-4 transform rounded-full bg-background transition ${
												hideCompleted ? 'translate-x-6' : 'translate-x-1'
											}`}
										/>
									</button>
									<span className="text-sm text-muted-foreground">
										Hide completed
									</span>
								</div>
							</div>
						</div>

						{/* Courses Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{filteredCourses.map((course) => (
								<div
									key={course.id}
									className="bg-white dark:bg-gray-800 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
								>
									<div className="relative">
										<img
											src={course.image}
											alt={course.title}
											className="w-full h-48 object-cover"
										/>
										<div className="absolute top-2 right-2">
											<button className="bg-white/90 text-blue-600 px-2 py-1 rounded text-xs font-medium">
												Buy Now
											</button>
										</div>
									</div>
									<div className="p-4">
										<div className="flex items-center gap-2 mb-2">
											<span
												className={`px-2 py-1 rounded text-xs font-medium ${
													course.category === 'Web'
														? 'bg-blue-100 text-blue-700'
														: course.category === 'Design'
														? 'bg-purple-100 text-purple-700'
														: 'bg-green-100 text-green-700'
												}`}
											>
												{course.category}
											</span>
											<div className="flex items-center gap-1 text-sm">
												<span className="font-medium">{course.rating}</span>
												<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
												<span className="text-muted-foreground">
													({course.reviews})
												</span>
											</div>
										</div>
										<h3 className="font-semibold text-lg mb-2 dark:text-white">
											{course.title}
										</h3>
										<p className="text-muted-foreground text-sm mb-4 dark:text-gray-300">
											{course.description}
										</p>
										<div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
											<div className="flex items-center gap-1">
												<Clock className="h-4 w-4" />
												<span>{course.duration}</span>
											</div>
										</div>
										{course.progress > 0 && (
											<div className="mb-4">
												<div className="flex justify-between text-sm mb-1">
													<span>Progress</span>
													<span>{course.progress}%</span>
												</div>
												<div className="w-full bg-muted rounded-full h-2">
													<div
														className="bg-blue-500 h-2 rounded-full"
														style={{ width: `${course.progress}%` }}
													></div>
												</div>
											</div>
										)}
										<div className="flex gap-2">
											<Link
												to={`/academy/course/${course.id}`}
												className="flex-1 bg-[#5d36e7] text-white border border-border hover:bg-[#7163a1] text-center text-sm py-2 px-3 rounded-lg font-medium transition-colors"
											>
												Start Over
											</Link>
											<Link
												to={`/academy/course/${course.id}`}
												className="flex-1 bg-[#0A6CD5] hover:bg-[#42b1fb] text-white text-sm py-2 px-3 rounded-lg font-medium text-center transition-colors"
											>
												Continue
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Bottom Sections */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
						{/* Earn a Certificate */}
						<div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-xl font-bold mb-2">Earn a Certificate</h3>
									<p className="text-blue-100 mb-4">
										Get the right professional certificate program for you.
									</p>
									<button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
										View Programs
									</button>
								</div>
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
									<div className="w-8 h-8 bg-yellow-400 rounded"></div>
								</div>
							</div>
						</div>

						{/* Best Rated Courses */}
						<div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-xl font-bold mb-2">Best Rated Courses</h3>
									<p className="text-purple-100 mb-4">
										Enroll now in the most popular and best rated courses.
									</p>
									<button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors">
										View Courses
									</button>
								</div>
								<div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
									<div className="w-8 h-8 bg-orange-400 rounded"></div>
								</div>
							</div>
						</div>
					</div>

					{/* Today's Free Courses */}
					<div className="mb-8">
						<div className="text-center mb-6 p-5 bg-white rounded-lg shadow-sm">
							<div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<div className="w-6 h-6 bg-blue-500 rounded"></div>
							</div>
							<h2 className="text-2xl font-bold mb-2">Today's Free Courses</h2>
							<p className="text-muted-foreground max-w-2xl mx-auto">
								We offers 284 Free Online courses from top tutors and companies to help
								you start or advance your career skills. Learn online for free and fast
								today!
							</p>
							<button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
								Get Premium Courses
							</button>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<div className="bg-card border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
								<div className="relative">
									<img
										src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop"
										alt="Singing lesson"
										className="w-full h-48 object-cover"
									/>
									<button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
										<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
											<Play className="h-6 w-6 text-white ml-1" />
										</div>
									</button>
								</div>
								<div className="p-4">
									<h3 className="font-semibold text-lg mb-2">
										Your First Singing Lesson
									</h3>
									<p className="text-muted-foreground text-sm">
										In the same way as any other artistic domain, singing lends itself
										perfectly to self-teaching.
									</p>
								</div>
							</div>

							<div className="bg-card border rounded-lg overflow-hidden bg-white shadow-sm">
								<div className="relative">
									<img
										src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=300&fit=crop"
										alt="Guitar lesson"
										className="w-full h-48 object-cover"
									/>
									<button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
										<div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
											<Play className="h-6 w-6 text-white ml-1" />
										</div>
									</button>
								</div>
								<div className="p-4">
									<h3 className="font-semibold text-lg mb-2">Guitar for Beginners</h3>
									<p className="text-muted-foreground text-sm">
										The Fender Acoustic Guitar is the best choice for both beginners and
										professionals offering a great sound.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyCourses;