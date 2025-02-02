import React, { useState } from 'react'
import UserChat from './UserChat'
import AIBot from './AIBot'
import { getResponseAI } from '../utils/getResponseAI'
import { v4 as uuidv4 } from 'uuid';

function ChatModal() {

    const [chats, setChats] = useState([])
    const [question, setQuestion] = useState('')

    const handleSubmit = () => {
        if (question.trim() !== '') {
            setChats([...chats, { ques: question, ans: "" }])
            getResponseAI(question).then((res) => {
                setChats([...chats, { ques: question, ans: res }])
            }).catch((err) => {
                console.log(err)
            })
        }

        setQuestion('')
    }

    return (
        <>
            <div className="fixed bottom-8 right-22 bg-gray-900 text-white sm:w-[800px] w-[80%] sm:h-[90%] h-[95%] p-4 rounded-xl shadow-lg border border-gray-700 z-40">
                <h3 className="text-lg font-bold">🤖 AI Chat Your Personal Tutor</h3>
                <p className="text-gray-400 text-sm">Ask anything about Python!</p>


                {/* <UserChat question="what is python" />
                <AIBot message="It is a language" /> */}
                <div className='absolute w-[90%] sm:h-[350px] h-[60%] right-22 overflow-auto scroll-auto overscroll-auto left-8'>
                    {
                        chats.length !== 0 ?
                            chats.map((chat) => {
                                return (
                                    <div key={uuidv4()}>
                                        <UserChat question={chat.ques} />
                                        <AIBot message={chat.ans} />
                                    </div>

                                )
                            }) :
                            <div></div>
                    }
                </div>


                <div className='absolute bottom-4 right-2 w-full mr-4 ml-4 pl-8 z-10'>
                    <textarea
                        className="ml-3 mr-6 w-[90%] mt-3 p-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
                        placeholder="Type your question..." value={question} onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button disabled={question === '' ? true : false} onClick={handleSubmit} className="mt-2 ml-3 w-[90%] py-2 bg-green-500 hover:bg-green-600 rounded-lg">
                        Send 🚀
                    </button>
                </div>

            </div>

        </>
    )
}

export default ChatModal