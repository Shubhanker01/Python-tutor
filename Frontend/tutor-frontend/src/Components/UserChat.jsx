import React from 'react'

function UserChat({ question }) {
    return (
        <div>
            <div className="flex items-start gap-3 justify-start p-2">
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold">
                    U
                </div>
                {/* Message Bubble */}
                <div className="bg-blue-600 text-white px-4 py-2 rounded-xl max-w-xs shadow-md">
                    {question}
                </div>

                {/* User Avatar */}

            </div>
        </div>
    )
}

export default UserChat