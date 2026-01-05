import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import image from "./image.jpg";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-2xl p-6 sm:p-8">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="space-y-5"
          >
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyOptions={options}
              selectCurrency={from}
            />

            <div className="flex justify-center">
              <button
                type="button"
                onClick={swap}
                className="flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 text-white px-5 py-2 text-sm font-semibold shadow-lg"
              >
                ⇄ Swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyOptions={options}
              selectCurrency={to}
              amountDisable={true}
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] transition-all duration-200 text-white py-3 text-base font-semibold shadow-xl"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
