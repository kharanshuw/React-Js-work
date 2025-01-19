import React from 'react'

import { useId } from 'react';

function InputBox({
    label,
    className = "",
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,
    currencyDisable = false,
    amount,
    onAmountChange
}
)


{

    const amountInputId = useId();

    return (
        <div className={`bg-white p-4 rounded-lg shadow-lg flex items-center ${className}`}>
            <div className="w-1/2 pr-3">
                <label htmlFor={amountInputId} className="block text-gray-700 font-semibold mb-1">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 pl-3 flex flex-col items-end">
                <label className="block text-gray-700 font-semibold mb-1">Currency</label>
                <select
                    className="w-full border border-gray-300 rounded-md p-2 bg-gray-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export { InputBox };