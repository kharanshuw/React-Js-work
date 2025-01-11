import React, { useCallback, useEffect, useState } from 'react';

function PasswordGenerator() {
    const [length, setLength] = useState(8);
    const [includeUpper, setIncludeUpper] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(false);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState("");


    // use callback start
    const generatePassword = useCallback(() => {
        // Password generation logic here
        let pass = "";
        let str = "";
        if (includeNumbers == true) {
            str = str + "1234567890";
            console.log("Numbers included");

        }
        if (includeUpper == true) {
            str = str + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            console.log("Uppercase included");

        }
        if (includeSymbols == true) {
            str = str + "!@#$%^&*()_+[]{}|;:,.<>?";
            console.log("symbol included");

        }

        for (let index = 1; index < length; index++) {
            const position = Math.floor(Math.random() * str.length + 1);

            console.log("position is : " + position);

            pass += str.charAt(position)

        }

        setPassword(pass);

    }, [length, includeNumbers, includeUpper, includeSymbols]);

    // use callback end


    // useeffect start 

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);


    // useeffect end 

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4' style={{ backgroundColor: '#A9A9A9' }}>
            <div className='w-full max-w-md p-8 rounded shadow-lg bg-gray-100'>
                <h1 className='mb-4 text-2xl font-bold text-center'>Password Generator</h1>
                <div className='mb-4 flex flex-row flex-nowrap gap-1'>
                    <label htmlFor="number" className='mb-2 text-xl font-medium text-black capitalize'>Length</label>
                    <input
                        type="number"
                        value={length}
                        onChange={(event) => setLength(event.target.value)}
                        className='w-full text-center border rounded-md'
                    />
                </div>
                <div className='mb-4'>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={includeUpper}
                            onChange={() => setIncludeUpper(prevValue => {
                                console.log("Previous value was in includeUpper " + prevValue);
                                return !prevValue;
                            })}
                            className="mr-2"
                        />
                        Include Uppercase Letters
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={includeNumbers}
                            onChange={() => setIncludeNumbers(prevValue => {
                                console.log("Previous value was " + prevValue + " of includeNumbers");
                                return !prevValue;
                            })}
                            className="mr-2"
                        />
                        Include Numbers
                    </label>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={includeSymbols}
                            onChange={() => setIncludeSymbols(prevValue => {
                                console.log("Previous value was " + prevValue + " of includeSymbols");
                                return !prevValue;
                            })}
                            className="mr-2"
                        />
                        Include Symbols
                    </label>
                </div>
                <button
                    className='capitalize w-full p-2 mb-4 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600'
                    onClick={generatePassword}
                >
                    Generate Password
                </button>
                <div className="w-full p-2 text-center border rounded-md">
                    {password}
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;
