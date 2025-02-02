import React, { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import ChatModal from './ChatModal'

function MiniChatApp() {
    const [modal, setModal] = useState(false)

    return (
        <div>
            <button onClick={() => setModal(!modal)} className='fixed bottom-24 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center justify-center'>
                <MessageCircle size={24} />
            </button>
            {
                modal == true ?
                    <>
                        <ChatModal />
                    </> :
                    <div></div>
            }
        </div>
    )
}

export default MiniChatApp