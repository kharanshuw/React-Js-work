import { useCallback, useEffect, useState } from 'react'
import React from 'react'
import { getCurrency, getCurrencyList } from './api';
import { InputBox } from "./component/InputBox";


function App() {

  let [fromCountry, setFromCountry] = useState("USD");
  let [toCountry, setToCountry] = useState("INR");

  let [amount, setAmount] = useState(1);

  let [convertedCurrency, setConvertedCurrency] = useState(1);

  let [convertedAmount, setConvertedAmount] = useState(0);

  let [options, setOptions] = useState([]);



  let getConvertedCurrency = useCallback(
    () => {
      getCurrency(fromCountry, toCountry).then(
        (d) => {
          setConvertedCurrency(d.data[toCountry]);
        }
      )
        .catch(
          (error) => {
            console.log(error);
          }
        )
    }, [fromCountry, toCountry]
  )


  useEffect(() => {
    getConvertedCurrency();
  }, [getConvertedCurrency])



  let getCurrencyListfromApi = useCallback(
    () => {
      getCurrencyList().then(
        (data) => {

          setOptions(Object.keys(data.data));
        }
      )
        .catch(
          (error) => {
            console.log(error);
          }
        )
    }, []
  )

  useEffect(() => {
    getCurrencyListfromApi();
  }, [getCurrencyListfromApi])



  let convert = () => {
    setConvertedAmount(amount * convertedCurrency);
  }



  let swap = () => {
    setFromCountry(toCountry);
    setToCountry(fromCountry);
  }



  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full max-w-lg mx-auto border border-gray-300 rounded-lg p-8 backdrop-blur-md bg-white/90 shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="mb-6">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFromCountry(currency)}
              selectCurrency={fromCountry}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative w-full my-2 flex justify-center">
            <button
              type="button"
              className="border border-blue-600 rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition duration-300"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setToCountry(currency)}
              selectCurrency={toCountry}
              amountDisable
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">
            Convert {fromCountry.toUpperCase()} to {toCountry.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );




}

export default App
