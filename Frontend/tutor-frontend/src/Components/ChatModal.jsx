import React from 'react'

function ChatModal() {
    return (
        <>
            <div className="fixed bottom-16 right-6 bg-gray-900 text-white w-80 p-4 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-lg font-bold">🤖 AI Chat</h3>
                <p className="text-gray-400 text-sm">Ask anything about Python!</p>
                <textarea
                    className="w-full mt-3 p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                    placeholder="Type your question..."
                />
                <button className="mt-2 w-full py-2 bg-green-500 hover:bg-green-600 rounded-lg">
                    Send 🚀
                </button>
            </div>

        </>
    )
}

export default ChatModal