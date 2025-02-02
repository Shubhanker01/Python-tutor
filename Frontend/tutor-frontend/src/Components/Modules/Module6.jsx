import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar'
import PythonSandbox from '../PythonSandbox'
import MiniChatApp from '../MiniChatApp'
import Quiz1 from '../Quiz/Quiz1'
import { question, answer, option } from '../../utils/quesAndOption'


function Module6() {
    return (
        <>
            <Navbar/>
            <div className="bg-gray-100 text-black min-h-screen p-6">
                {/* Module Heading */}
                <h1 className="sm:text-3xl text-lg text-center font-bold mb-4">🛠️ Module 6: Functions in Python</h1>

                {/* Introduction */}
                <p className="text-lg text-center text-gray-800 mb-6">
                    Functions allow us to **organize code into reusable blocks**.
                    Instead of repeating code, we define a function and call it whenever needed.
                </p>

                {/* Section: Defining a Function */}
                <div className="bg-gray-800 p-4 rounded-lg mb-6 border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🔹 Defining and Calling a Function</h2>
                    <p className="text-gray-300">
                        A function is defined using the `def` keyword and can be called multiple times in a program.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 w-[70%] m-[0px_auto]">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: Creating a Function</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Defining a function
def greet():
    print("Hello! Welcome to Python.")

# Calling the function
greet()`}
                    </pre>
                </div>

                {/* Section: Function Parameters */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg mt-6 border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">🔄 Function Parameters</h2>
                    <p className="text-gray-300">
                        Functions can accept **parameters** to process data dynamically.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: Function with Parameters</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Function with a parameter
def greet_user(name):
    print(f"Hello, {name}! Welcome to Python.")

# Calling the function
greet_user("Alice")`}
                    </pre>
                </div>

                {/* Section: Return Statement */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg mt-6 border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">📌 Return Values</h2>
                    <p className="text-gray-300">
                        Functions can **return values** to be used in other parts of the program.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: Function with Return Value</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Function that returns a value
def add_numbers(a, b):
    return a + b

# Calling the function
result = add_numbers(5, 3)
print("Sum:", result)`}
                    </pre>
                </div>

                {/* Section: Default Parameters */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg mt-6 border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">⚙️ Default Parameter Values</h2>
                    <p className="text-gray-300">
                        If a function parameter is not provided, a **default value** can be used.
                    </p>
                </div>

                {/* Example Code Box */}
                <div className="bg-gray-800 w-[70%] m-[0px_auto] p-4 rounded-lg border border-gray-700">
                    <h2 className="text-xl text-gray-100 font-semibold mb-3">💻 Example: Default Parameters</h2>
                    <pre className="bg-gray-900 p-3 rounded-lg text-green-400 text-sm overflow-x-auto">
                        {`# Function with a default parameter
def greet(name="Guest"):
    print(f"Hello, {name}!")

# Calling the function without passing a name
greet()

# Calling the function with a name
greet("Alice")`}
                    </pre>
                </div>

                <div className='mt-4'>
                    <h2 className="text-xl text-center font-bold">👨‍💻 Now it your time to write code </h2>
                    <p className='text-center'>Write a function to greet good morining</p>
                    <PythonSandbox />
                </div>
                
                <div className='mt-8 mb-8'>
                    <h2 className='mt-4 mb-4 text-xl text-center font-bold'>A follow up short little quiz!! Hope you get the right answer</h2>
                    <Quiz1 question={question[18]} options={option[18]} answer={answer[18]} />
                    <Quiz1 question={question[19]} options={option[19]} answer={answer[19]} />
                    <Quiz1 question={question[20]} options={option[20]} answer={answer[20]} />
                    <Quiz1 question={question[21]} options={option[21]} answer={answer[21]} />
                    <Quiz1 question={question[22]} options={option[22]} answer={answer[22]} />
                    <Quiz1 question={question[23]} options={option[23]} answer={answer[23]} />
                </div>
                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    <Link to="/main-app/module5" className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">⬅ Previous</Link>
                </div>
            </div>
            <MiniChatApp/>
        </>
    )
}

export default Module6