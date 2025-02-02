import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import PythonSandbox from '../PythonSandbox'
import MiniChatApp from '../MiniChatApp'
import Quiz1 from '../Quiz/Quiz1'
import { question, answer, option } from '../../utils/quesAndOption'

function Module4() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 text-black min-h-screen p-6">
                {/* Module Heading */}
                <h1 className="sm:text-3xl text-lg text-gray-800 text-center font-bold mb-4">⚖️ Module 4: Conditional Statements</h1>

                {/* Introduction */}
                <p className="text-lg text-gray-800 text-center text-gray-300 mb-6">
                    Conditional statements allow you to make decisions in your code. They help you
                    execute different blocks of code based on conditions.
                </p>

                {/* Section: If-Else Statement */}
                <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🔹 If-Else Statements</h2>
                    <p className="text-gray-100">
                        The `if` statement checks a condition and executes a block of code if the condition is `True`.
                        The `else` statement runs if the condition is `False`.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: If-Else Condition</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Checking if a number is positive or negative
num = -5

if num > 0:
    print("The number is positive")
else:
    print("The number is negative")`}
                    </pre>
                </div>

                {/* Section: If-Elif-Else */}
                <div className="bg-gray-800 p-4 rounded-lg mt-6 border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🔄 If-Elif-Else Statements</h2>
                    <p className="text-gray-300">
                        The `elif` statement allows you to check multiple conditions before reaching the final `else`.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 mt-6 p-4 rounded-lg border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: If-Elif-Else Condition</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Checking grade based on marks
marks = 85

if marks >= 90:
    print("Grade: A")
elif marks >= 75:
    print("Grade: B")
elif marks >= 50:
    print("Grade: C")
else:
    print("Grade: F")`}
                    </pre>
                </div>

                {/* Section: Nested If */}
                <div className="bg-gray-800 p-4 rounded-lg mt-6 border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">📌 Nested If Statements</h2>
                    <p className="text-gray-300">
                        You can also place `if` statements inside another `if` to create **nested conditions**.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 w-[70%] m-[0px_auto] mt-6">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: Nested If Condition</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Checking if a number is positive and even
num = 10

if num > 0:
    if num % 2 == 0:
        print("The number is positive and even")
    else:
        print("The number is positive but odd")
else:
    print("The number is negative")`}
                    </pre>
                </div>

                <div className='mt-4'>
                    <h2 className="text-xl text-center font-bold">👨‍💻 Now it your time to write code </h2>
                    <p className='text-center'>Write a Program to check if the number is even or odd</p>
                    <PythonSandbox />
                </div>

                <div className='mt-8 mb-8'>
                    <h2 className='mt-4 mb-4 text-xl text-center font-bold'>A follow up short little quiz!! Hope you get the right answer</h2>
                    <Quiz1 question={question[8]} options={option[8]} answer={answer[8]} />
                    <Quiz1 question={question[9]} options={option[9]} answer={answer[9]} />
                    <Quiz1 question={question[10]} options={option[10]} answer={answer[10]} />
                    <Quiz1 question={question[11]} options={option[11]} answer={answer[11]} />
                </div>
                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    <Link to="/main-app/module3" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">⬅ Previous</Link>
                    <Link to="/main-app/module5" className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Next ➡</Link>
                </div>
            </div>
            <MiniChatApp />
        </>
    )
}

export default Module4