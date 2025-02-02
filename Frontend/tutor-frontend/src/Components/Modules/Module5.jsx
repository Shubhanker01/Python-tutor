import React from 'react'
import { Link } from 'react-router-dom'
import MiniChatApp from '../MiniChatApp'
import Navbar from '../Navbar'
import PythonSandbox from '../PythonSandbox'
import Quiz1 from '../Quiz/Quiz1'
import { question, answer, option } from '../../utils/quesAndOption'

function Module5() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 text-black min-h-screen p-6">
                {/* Module Heading */}
                <h1 className="sm:text-3xl text-lg text-center font-bold mb-4">🔄 Module 5: Loops in Python</h1>

                {/* Introduction */}
                <p className="text-lg text-center text-gray-800 mb-6">
                    Loops allow us to execute a block of code multiple times. Python supports two types of loops:
                    **for loop** and **while loop**.
                </p>

                {/* Section: For Loop */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg mb-6 border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🔹 For Loop</h2>
                    <p className="text-gray-300">
                        The `for` loop is used for iterating over a sequence (like a list, tuple, dictionary, or range).
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: For Loop</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Iterating through a list
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)`}
                    </pre>
                </div>

                {/* Section: While Loop */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg mt-6 border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🔄 While Loop</h2>
                    <p className="text-gray-300">
                        The `while` loop executes a block of code **as long as a condition is True**.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: While Loop</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Counting from 1 to 5 using while loop
count = 1

while count <= 5:
    print(count)
    count += 1`}
                    </pre>
                </div>

                {/* Section: Break & Continue */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg mt-6 border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">📌 Break & Continue</h2>
                    <p className="text-gray-300">
                        - `break` exits the loop completely.
                        - `continue` skips the current iteration and moves to the next one.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: Break & Continue</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Using break and continue in a loop
for i in range(1, 10):
    if i == 5:
        break  # Stops the loop when i is 5
    if i == 3:
        continue  # Skips printing 3
    print(i)`}
                    </pre>
                </div>

                <div className='mt-4'>
                    <h2 className="text-xl text-center font-bold">👨‍💻 Now it your time to write code </h2>
                    <p className='text-center'>Write a Program to print numbers from 1 to 15</p>
                    <PythonSandbox />
                </div>

                <div className='mt-8 mb-8'>
                    <h2 className='mt-4 mb-4 text-xl text-center font-bold'>A follow up short little quiz!! Hope you get the right answer</h2>
                    <Quiz1 question={question[12]} options={option[12]} answer={answer[12]} />
                    <Quiz1 question={question[13]} options={option[13]} answer={answer[13]} />
                    <Quiz1 question={question[14]} options={option[14]} answer={answer[14]} />
                    <Quiz1 question={question[15]} options={option[15]} answer={answer[15]} />
                    <Quiz1 question={question[16]} options={option[16]} answer={answer[16]} />
                    <Quiz1 question={question[17]} options={option[17]} answer={answer[17]} />
                </div>
                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    <Link to="/main-app/module4" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">⬅ Previous</Link>
                    <Link to="/main-app/module6" className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Next ➡</Link>
                </div>
            </div>
            <MiniChatApp />
        </>
    )
}

export default Module5