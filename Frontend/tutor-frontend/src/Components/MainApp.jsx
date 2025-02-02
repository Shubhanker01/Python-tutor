import React from 'react'
import PythonSandbox from './PythonSandbox'
import Quiz1 from './Quiz/Quiz1'
import { question, option, answer } from '../utils/quesAndOption'
import MiniChatApp from './MiniChatApp'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function MainApp() {
    return (
        <>
            <Navbar />
            <h1 className='text-gray-800 py-4 text-center text-4xl font-bold'>Hey kids this is how you get started</h1>

            <div className="text-center p-10 bg-blue-200 rounded-lg mt-4">
                <h1 className="text-4xl font-bold text-gray-800">🐍 Welcome to Python Programming!</h1>
                <p className="text-lg text-gray-600 mt-2">Python is easy to learn and fun to use. Let's start with your first program!</p>
            </div>

            <div className="p-6">
                <h2 className="text-2xl font-bold">🐍 What is Python?</h2>
                <p className="mt-2 text-gray-600">
                    Python is an easy-to-learn programming language used for games, websites, and AI! It's a great first language for beginners.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6">
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">✨ Easy to Learn</h2>
                    <p>Python is simple and fun to write!</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h2 className="text-xl font-bold">🌍 Used Everywhere</h2>
                    <p>Python is used in websites, AI, and robotics.</p>
                </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
                <h2 className="text-xl font-bold">👨‍💻 Your First Python Program</h2>
                <p className="mt-2">Python can display text using the print command:</p>
                <pre className="bg-white p-4 mt-4 rounded-lg shadow-md">
                    print("Hello, World!")
                </pre>
            </div>

            <div className='mt-4'>
                <h2 className="text-xl text-center font-bold">👨‍💻 Now it your time to write code </h2>
                <PythonSandbox />
            </div>
            <div className='mt-8 mb-8'>
                <h2 className='mt-4 mb-4 text-xl text-center font-bold'>A follow up short little quiz!! Hope you get the right answer</h2>
                <Quiz1 question={question[0]} options={option[0]} answer={answer[0]} />
            </div>
            <div className='mt-6 flex justify-end'>
                <Link to="/main-app/module2" className="bg-green-600 px-8 py-2 rounded-lg hover:bg-green-700 mx-4">Next ➡</Link>
            </div>

            <MiniChatApp />

        </>
    )
}

export default MainApp