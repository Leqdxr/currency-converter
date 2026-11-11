function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  currencyValue = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <div
      className={`bg-latte-base p-4 rounded-lg border border-latte-surface0 text-sm flex ${className}`}
    >
      <div className="w-1/2">
        <label className="text-latte-subtext0 mb-2 inline-block font-medium">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1 text-base font-semibold text-latte-text placeholder:text-latte-overlay0"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-latte-subtext0 mb-2 w-full font-medium">Currency Type</p>
        <select
          className="rounded-md px-2 py-1 bg-latte-surface0 text-latte-text font-medium cursor-pointer outline-none border border-latte-surface1"
          value={currencyValue}
          disabled={currencyDisable}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
        >
          {currencyOption.map((currency) => (
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
