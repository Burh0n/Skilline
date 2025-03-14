import React from 'react'
import img from '/img.svg'
import img1 from '/img1.svg'
import img2 from '/img2.svg'
import img3 from '/img3.svg'
import img4 from '/img4.svg'
import img5 from '/img5.svg'
import img6 from '/img6.svg'
import logo from '/logo (2).svg'

const FeaturesSection = () => {
    return (
        <div className="w-full bg-white mt-[100px]">
            <section className="max-w-6xl mx-auto py-16 px-8">
                <h2 className="text-3xl font-bold text-center mb-8">
                    What is <span className="text-orange-500">Skilline</span>?
                </h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
                    Skilline is a platform that allows educators to create online classes whereby they can store the course materials online, manage assignments, quizzes and exams, monitor due dates, grade results and provide students with feedback all in one place.
                </p>

                <div className="flex flex-col md:flex-row gap-8 justify-center">
                    <div className="relative h-64 w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                        <img src={img} alt="Instructor teaching" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                            <h3 className=" text-center font-bold text-xl mt-[100px]">FOR INSTRUCTORS</h3>
                            <button className=" m-auto  text-white px-4 py-3 rounded-full w-max text-sm font-medium border-1">Start a class today</button>
                        </div>
                    </div>
                    <div className="relative h-64 w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                        <img src={img1} alt="Students learning" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                            <h3 className=" text-center font-bold text-xl mt-[100px]  ">FOR STUDENTS</h3>
                            <button className=" m-auto bg-[#23BDEEE5] text-white px-4 py-3 rounded-full w-max text-sm font-medium">Enter access code</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto py-16 px-8 flex flex-col md:flex-row items-center mt-[100px]">
                <div className="md:w-1/2 mb-8 md:mb-0 pr-8">
                    <div className="inline-flex items-center bg-orange-100 px-3 py-1 rounded-full mb-4">
                        <span className="text-orange-500 font-medium"><span className="font-bold">E</span>verything you can do in a physical</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">classroom, you can do with <span className="text-orange-500">Skilline</span></h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Skilline's school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
                    </p>
                    <button className="text-blue-500 font-medium text-sm">LEARN MORE</button>
                </div>
                <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden  shadow-md">
                        <img src={img2} alt="Students in classroom" className="w-full object-cover h-[470px]" />
                    </div>
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-16 px-8">
                <h2 className="text-3xl font-bold mb-2 text-center mt-[100px]">Our <span className="text-orange-500">Features</span></h2>
                <p className="text-gray-600 text-center ">This very extraordinary feature, can make learning activities more efficient</p>

                <div className="space-y-24 mt-[100px]">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">
                                <span className="text-orange-500">Tools</span> For Teachers
                            </h3>
                            <h3 className="text-2xl font-bold mb-4">And Learners</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Class has a multitude of teaching tools built-in,
                                so teachers can use what suits their needs during class.
                                Teachers can individual assignments in real-time for students to
                                complete and submit.
                            </p>
                        </div>
                        <div className="md:w-1/2 relative">
                            <img src={img3}  className="w-full h-full object-cover rounded-lg " />
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-full"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-200 rounded-full"></div>
                            <div className="absolute top-1/4 -right-6 w-4 h-4 bg-red-200 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2 order-2 md:order-1 relative">
                            <div className="bg-blue-100 p-4 rounded-lg mb-4 w-max">
                                <div className="flex items-center gap-2 ">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                                        ?
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden  shadow-md">
                                <img src={img4} alt="Italy architecture" className="w-full h-full object-cover" />
                            </div>
                            
                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-200 rounded-full"></div>
                            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-200 rounded-full"></div>
                            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-green-200 rounded-full"></div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <h3 className="text-2xl font-bold mb-4">
                                <span className="text-orange-500">Assessments,</span>
                                <br />Quizzes, Tests
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the gradebook.
                                </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2">
                            <h3 className="text-2xl font-bold mb-2">
                                <span className="text-orange-500">Class Management</span>
                            </h3>
                            <h3 className="text-2xl font-bold mb-4">Tools for Educators</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <div className="rounded-lg overflow-hidden ">
                                <img src={img5} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <div className="rounded-lg overflow-hidden ">
                                <img src={img6}alt="Video call interface" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2">
                            <h3 className="text-2xl font-bold mb-4">
                                <span className="text-orange-500">One-on-One</span>
                                <br />Discussions
                            </h3>
                            <ul className="text-gray-600 space-y-2 leading-relaxed">
                                <li>• Teachers and teacher assistants can talk with students privately without leaving the video call.</li>
                                <li>• Share materials during one-on-one discussions.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-16 px-8">
                <div className="max-w-6xl mx-auto mt-[50px]">
                    <div className="flex items-center justify-center mb-8">
                        <div className="flex items-center">
                            <div className="">
                                <img src={logo} alt="" />
                            </div>
                        </div>
                        <span className="mx-4 text-gray-400">|</span>
                        <span className="text-gray-200">Virtual Class for Zoom</span>
                    </div>

                    <div className="max-w-md mx-auto text-center mb-8 h-[200px]">
                        <p className="text-gray-300 mb-4">Subscribe to get our Newsletter</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="px-4 py-3 bg-gray-800 rounded-full text-white flex-grow"
                            />
                            <button className="px-6 py-3 bg-indigo-600 rounded-full font-medium">Subscribe</button>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6 text-gray-400 text-sm">
                        <a href="#" className="hover:text-white">Careers</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms & Conditions</a>
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-8">
                        © 2021 Class Technologies Inc.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default FeaturesSection