import "./App.css";
import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("npr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-latte-crust p-4">
      <div className="w-full max-w-md bg-latte-mantle border border-latte-surface0 rounded-xl p-6 shadow-md">
        <h1 className="text-xl font-bold text-latte-text text-center mb-6">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)}
              currencyValue={from}
              currencyOption={options}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="relative w-full h-0.5 my-2">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-latte-mantle rounded-md bg-latte-blue hover:bg-latte-sapphire text-white px-3 py-1 text-sm font-medium transition-colors cursor-pointer"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-5">
            <InputBox
              label="To"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              currencyValue={to}
              currencyOption={options}
              onAmountChange={(amount) => setAmount(amount)}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-latte-blue hover:bg-latte-sapphire text-white font-medium px-4 py-3 rounded-lg transition-colors cursor-pointer"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
