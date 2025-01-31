import React, { useEffect, useState } from 'react'
import { executePythonCode } from '../utils/executePythonCode'

function CodeExecuter() {
    const [code, setCode] = useState('print("Hello, world!")')
    const [output, setOutput] = useState('')

    const handleRunCode = async () => {
        const output = await executePythonCode(code)
        setOutput(output)
    }
    return (
        <>
            <div className="p-4">
                <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    rows={5}
                    className="w-full p-2 border"
                />
                <button onClick={handleRunCode} className="mt-2 p-2 bg-blue-500 text-white">Run Code</button>
                <pre className="mt-4 p-2 bg-gray-100">{output}</pre>
            </div>
        </>
    )
}

export default CodeExecuter