import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {

  const [data, setData] = useState({})

  useEffect(() => {
    const responseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    async function getExchangeRates() {
      try {
      const response = await fetch(responseUrl)
        switch (response.status) {
          case 200: {
            const result = await response.json()
            setData(result[currency])
            break;
          }
          case 404:
            console.log("Resource not found")
            break;
          case 500:
            console.log("Internal server error")
            break;
          default:
            console.log("Status code: ", response.status)
            break;
        }
      }
      catch (error) {
        console.log(error)
      }
    }
    getExchangeRates()
  }, [currency])
  return data
}


export default useCurrencyInfo
