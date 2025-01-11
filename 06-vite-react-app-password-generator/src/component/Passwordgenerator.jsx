import React, { Component } from 'react'
import { useState } from 'react';

function Passwordgenerator() {
    

        const [length, setLength] = useState(12);
        const [includeUppercase, setIncludeUppercase] = useState(true);
        const [includeNumbers, setIncludeNumbers] = useState(true);
        const [includeSymbols, setIncludeSymbols] = useState(true);
        const [password, setPassword] = useState('');
      
        const generatePassword = () => {
          const lower = 'abcdefghijklmnopqrstuvwxyz';
          const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          const numbers = '0123456789';
          const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
      
          let allChars = lower;
          if (includeUppercase) allChars += upper;
          if (includeNumbers) allChars += numbers;
          if (includeSymbols) allChars += symbols;
      
          let generatedPassword = '';
          for (let i = 0; i < length; i++) {
            generatedPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
          }
      
          setPassword(generatedPassword);
        };
      

        return (
            <>

                <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                    <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
                        <h1 className="mb-4 text-2xl font-bold text-center">Password Generator</h1>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-medium text-gray-700">Length</label>
                            <input
                                type="number"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                className="w-full p-2 border rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={includeUppercase}
                                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                                    className="mr-2"
                                />
                                Include Uppercase Letters
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={includeNumbers}
                                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                                    className="mr-2"
                                />
                                Include Numbers
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={includeSymbols}
                                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                                    className="mr-2"
                                />
                                Include Symbols
                            </label>
                        </div>
                        <button
                            onClick={generatePassword}
                            className="w-full p-2 mb-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            Generate Password
                        </button>
                        <div className="w-full p-2 text-center border rounded-md">
                            {password}
                        </div>
                    </div>
                </div>


            </>
        )
    }


    export default Passwordgenerator;