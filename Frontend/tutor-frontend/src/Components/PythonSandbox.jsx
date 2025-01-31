import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import { executePythonCode } from '../utils/executePythonCode'

function PythonSandbox() {
    const [input, setInput] = useState("print('Hello World')")
    const [output, setOutput] = useState('')

    const runCode = async () => {
        setOutput("Running... ⏳")
        try {
            const result = await executePythonCode(input)
            setOutput(result || "No output")
        } catch (error) {
            setOutput("Error executing code 🚨")
        }

    }
    return (
        <>
            <div className="bg-gray-900 text-white p-6 rounded-xl shadow-lg max-w-5xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">🐍 Python Code Sandbox</h2>

                {/* Monaco Editor (Dark Theme) */}
                <div className="border border-gray-700 rounded-lg overflow-hidden">
                    <Editor
                        height="300px"
                        theme="vs-dark"
                        defaultLanguage="python"
                        value={input}
                        onChange={(newCode) => setInput(newCode)}
                        options={{ fontSize: 14, minimap: { enabled: false } }}
                    />
                </div>

                {/* Run Button */}
                <button
                    onClick={runCode}
                    className="mt-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg"
                >
                    ▶ Run Code
                </button>

                {/* Output Terminal */}
                <div className="mt-4 bg-black p-4 rounded-lg border border-gray-700">
                    <h3 className="text-lg font-semibold">🖥 Output:</h3>
                    <pre className="mt-2 text-green-400">{output}</pre>
                </div>
            </div>

        </>
    )
}

export default PythonSandbox