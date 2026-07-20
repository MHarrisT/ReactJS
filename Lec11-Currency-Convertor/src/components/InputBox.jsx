import React, {useId} from 'react'

// useId hook is used for generating unique IDs that can be passed to accessibility attributes

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className={`bg-white/90 backdrop-blur-md p-5 rounded-2xl text-sm flex shadow-sm border border-white/40 ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-500 font-semibold mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-xl font-bold text-gray-800 placeholder-gray-400"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value === "" ? "" : Number(e.target.value))}
                    onFocus={(e) => e.target.select()}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-gray-500 font-semibold mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-xl px-3 py-2 bg-gray-100 cursor-pointer outline-none font-medium hover:bg-gray-200 transition-colors shadow-sm"
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

export default InputBox;
