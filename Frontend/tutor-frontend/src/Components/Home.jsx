import React from 'react'
import { Link } from 'react-router-dom'
import CodeExecuter from './CodeExecuter'

function Home() {
    return (
        <>
            <div className="text-center p-10 bg-blue-200">
                <h1 className="text-4xl font-bold text-gray-800">Learn Python the Fun Way with AI!</h1>
                <p className="text-lg text-gray-600 mt-2">An interactive AI tutor that makes coding easy for kids.</p>
                <div className='mt-4'>
                    <Link to='/main-app' className="mt-4 px-6 py-2 bg-green-500 text-white text-lg rounded-lg">Start Learning Now</Link>
                </div>

            </div>

            <div className="grid grid-cols-2 gap-6 p-8">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">🤖 AI-Powered Tutor</h2>
                    <p>Get instant coding help from a friendly AI.</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">🎮 Fun Challenges</h2>
                    <p>Practice with engaging quizzes and challenges.</p>
                </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-bold">Try Coding Now! 👨‍💻</h2>
                <CodeExecuter />
            </div>

            <div className="flex space-x-4 p-6">
                <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">1</span>
                    <p>Pick a Lesson</p>
                </div>
                <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">2</span>
                    <p>Chat with AI</p>
                </div>
                <div className="text-center">
                    <span className="text-3xl font-bold text-blue-600">3</span>
                    <p>Write & Run Code</p>
                </div>
            </div>

            <div className="text-center p-6 bg-yellow-300 rounded-lg">
                <h2 className="text-2xl font-bold">Join 1,000+ kids learning Python with AI! 🚀</h2>
                <div className='mt-4'>
                    <Link to='/main-app' className="mt-8 px-6 py-3 bg-green-600 text-white text-lg rounded-lg">Start Learning for Free</Link>
                </div>

            </div>

        </>
    )
}

export default Home