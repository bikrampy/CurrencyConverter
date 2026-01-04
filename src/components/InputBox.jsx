import React, { useId } from "react";

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
  const amountInputId = useId();

  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/40 p-4 shadow-md ${className}`}
    >
      {/* Amount Section */}
      <div className="flex flex-col w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-xs font-medium text-gray-600 mb-1"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="w-full rounded-lg bg-transparent text-gray-900 placeholder-gray-400 outline-none py-2 px-2 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
        />
      </div>

      {/* Currency Section */}
      <div className="flex flex-col w-1/2 items-end">
        <span className="text-xs font-medium text-gray-600 mb-1">
          Currency
        </span>
        <select
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          className="w-full rounded-lg bg-gray-100 px-3 py-2 text-gray-900 cursor-pointer outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
