import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import PythonSandbox from '../PythonSandbox'
import MiniChatApp from '../MiniChatApp'
import Quiz1 from '../Quiz/Quiz1'
import { question, answer, option } from '../../utils/quesAndOption'

function Module3() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 text-black min-h-screen p-6">
                {/* Module Heading */}
                <h1 className="text-3xl text-center font-bold mb-4">📦 Module 3: Variables in Python</h1>

                {/* Introduction */}
                <p className="text-lg text-center text-gray-800 mb-6">
                    A variable in Python is used to store data that can be referenced and manipulated.
                    It acts as a container for values like numbers, text, or lists.
                </p>

                {/* Section: Declaring Variables */}
                <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🔹 Declaring Variables</h2>
                    <p className="text-gray-300">
                        In Python, you don’t need to declare the type of a variable explicitly.
                        A variable is created when a value is assigned to it.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: Creating Variables</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Creating variables in Python
name = "Alice"   # String
age = 25         # Integer
price = 99.99    # Float
is_student = True  # Boolean

print(name)
print(age)
print(price)
print(is_student)`}
                    </pre>
                </div>

                {/* Section: Rules for Naming Variables */}
                <div className="bg-gray-800 p-4 rounded-lg mt-6 border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">📌 Rules for Naming Variables</h2>
                    <ul className="list-disc list-inside text-gray-300">
                        <li>✅ Must start with a letter or an underscore (_)</li>
                        <li>✅ Cannot start with a number</li>
                        <li>✅ Can contain letters, numbers, and underscores</li>
                        <li>❌ Cannot use Python keywords (e.g., `if`, `while`, `class`)</li>
                        <li>❌ Variable names are **case-sensitive** (e.g., `Name` and `name` are different)</li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <h2 className="text-xl text-center font-bold">👨‍💻 Now it your time to write code </h2>
                    <PythonSandbox />
                </div>
                
                <div className='mt-8 mb-8'>
                    <h2 className='mt-4 mb-4 text-xl text-center font-bold'>A follow up short little quiz!! Hope you get the right answer</h2>
                    <Quiz1 question={question[4]} options={option[4]} answer={answer[4]} />
                    <Quiz1 question={question[5]} options={option[5]} answer={answer[5]} />
                    <Quiz1 question={question[6]} options={option[6]} answer={answer[6]} />
                    <Quiz1 question={question[7]} options={option[7]} answer={answer[7]} />
                </div>
                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    <Link to='/main-app/module2' className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">⬅ Previous</Link>
                    <Link to="/main-app/module4" className="bg-green-600 px-4 py-2 rounded-lg hover:bg-green-700">Next ➡</Link>
                </div>
            </div>
            <MiniChatApp />
        </>
    )
}

export default Module3