import React from 'react'
import Navbar from '../Navbar'
import MiniChatApp from '../MiniChatApp'
import PythonSandbox from '../PythonSandbox'
import Quiz1 from '../Quiz/Quiz1'
import { question, answer, option } from '../../utils/quesAndOption'
import { Link } from 'react-router-dom'

function Module2() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 text-black min-h-screen p-6">
                {/* Module Heading */}
                <h1 className="text-3xl text-center font-bold mb-4">🔢 Module 2: Introduction to Operators</h1>

                {/* Introduction */}
                <p className="text-lg text-center text-gray-700 mb-6">
                    Operators in Python are symbols that perform operations on variables and values.
                    Python supports different types of operators, such as **arithmetic, comparison, logical, bitwise,
                    assignment, and membership operators**.
                </p>

                {/* Section: Types of Operators */}
                <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🧮 Types of Operators in Python</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li><strong>Arithmetic Operators</strong> {`(+, -, *, /, %, **, //)`}</li>
                        <li><strong>Comparison Operators</strong> {`(==, !=, >, <, >=, <=)`}</li>
                        <li><strong>Logical Operators</strong> (and, or, not)</li>
                        <li><strong>Assignment Operators</strong> (=, +=, -=, *=, etc.)</li>
                        <li><strong>Bitwise Operators</strong> {`(&, |, ^, ~, <<, >>)`}</li>
                        <li><strong>Membership Operators</strong> (in, not in)</li>
                    </ul>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl font-semibold mb-3 text-gray-100">💻 Example: Arithmetic Operators</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Python Arithmetic Operators Example
a = 10
b = 5

print(a + b)  # Addition
print(a - b)  # Subtraction
print(a * b)  # Multiplication
print(a / b)  # Division
print(a % b)  # Modulus`}
                    </pre>
                </div>

                <div className='mt-4'>
                    <h2 className="text-xl text-center font-bold">👨‍💻 Now it your time to write code </h2>
                    <PythonSandbox />
                </div>

                <div className='mt-8 mb-8'>
                    <h2 className='mt-4 mb-4 text-xl text-center font-bold'>A follow up short little quiz!! Hope you get the right answer</h2>
                    <Quiz1 question={question[1]} options={option[1]} answer={answer[1]} />
                    <Quiz1 question={question[2]} options={option[2]} answer={answer[2]} />
                    <Quiz1 question={question[3]} options={option[3]} answer={answer[3]} />
                </div>

                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    <Link to='/main-app' className="bg-blue-600 px-8 py-2 rounded-lg hover:bg-blue-700">⬅ Previous</Link>
                    <button className="bg-green-600 px-8 py-2 rounded-lg hover:bg-green-700">Next ➡</button>
                </div>
            </div>
            <MiniChatApp />
        </>
    )
}

export default Module2