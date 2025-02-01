import React from 'react'

function AIBot({ message }) {
    return (
        <div>
            <div className="flex items-start gap-3 p-2">
                {/* AI Bot Avatar */}
                <div className="w-8 h-8 bg-green-500 text-white flex items-center justify-center rounded-full font-bold">
                    🤖
                </div>

                {/* AI Message Bubble */}
                <div className="bg-gray-700 text-white px-4 py-2 rounded-xl max-w-lg shadow-md">
                    {message}
                </div>
            </div>
        </div>
    )
}

export default AIBot