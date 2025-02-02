import React, { useState } from 'react'


function Quiz1({ question, options, answer }) {

    const [selectedOption, setSelectedOption] = useState(null)
    const [feedback, setFeedback] = useState("")

    const handleSubmit = () => {
        if (selectedOption == null) {
            setFeedback('⚠️ Please select an option.')
            return;
        }
        setFeedback(selectedOption === answer ? '✅ Correct!' : '❌ Incorrect. Try again!')
    }
    return (
        <>
            <div className='bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto mt-4'>
                <h2 className="text-xl font-bold mb-4">{question}</h2>
                <div className='space-y-3'>
                    {
                        options.map((option, index) => {
                            return <button
                                key={index}
                                onClick={() => setSelectedOption(option)}
                                className={`w-full px-4 py-2 rounded-lg border 
                              ${selectedOption === option ? "bg-blue-600 border-blue-500" : "bg-gray-800 border-gray-700"} 
                              hover:bg-blue-500 transition`}
                            >
                                {option}
                            </button>
                        })
                    }
                </div>
                <button
                    onClick={handleSubmit}
                    className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg w-full"
                >
                    ✅ Submit Answer
                </button>
                {feedback && <p className="mt-4 text-lg font-semibold">{feedback}
                </p>}
            </div>
        </>
    )
}

export default Quiz1