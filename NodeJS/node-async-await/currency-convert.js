//CurrencyCodeConvertFrom, CurrencyCodeConvertTo
//ex: 20 USD is worth 26 CAD. You can spend these in the following countries: Canada
//fixer.io API key: 209e7789b81dc38a7bad0445a8a58c46
//API URL   http://data.fixer.io/api/latest?access_key=209e7789b81dc38a7bad0445a8a58c46
//NOTE API bases in EUR, need to convert to that first before final result
const axios = require('axios');
// const getExchangeRate = (from, to) => {
//   return axios.get('http://data.fixer.io/api/latest?access_key=209e7789b81dc38a7bad0445a8a58c46').then((response) => {
//     const euro = 1 / response.data.rates[from];
//     const rate = euro * response.data.rates[to];
//     return rate;
//   });
// };

const getExchangeRate = async (from, to) => {
  try {
    const response = await axios.get('http://data.fixer.io/api/latest?access_key=209e7789b81dc38a7bad0445a8a58c46');
    const euro = 1 / response.data.rates[from];
    const rate = euro * response.data.rates[to];

    if(isNaN(rate)){
      throw new Error();
    }
    return rate;
  } catch(e){
      throw new Error(`Unable to get exchange rate for ${from} and ${to}.`)
  }
};

// const getCountries = (currencyCode) => {
//   return axios.get('https://restcountries.eu/rest/v2/currency/' + currencyCode).then((response) => {
//     return response.data.map((country)=> country.name);
//   });
// };


const getCountries = async (currencyCode) => {
  try{
    const response = await axios.get('https://restcountries.eu/rest/v2/currency/' + currencyCode);
    return response.data.map((country)=> country.name);
  }catch (e){
    throw new Error(`Unable to get countries for currenct code: ${currencyCode}`);
  }
};


// const convertCurrency = (from, to, amount) => {
//   let convertedAmount;
//   return getExchangeRate(from, to).then((rate) => {
//     convertedAmount = (rate * amount).toFixed(2);
//     return getCountries(to);
//   }).then((countries) => {
//     return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend these in the following countries: ${countries.join(', ')}.`;
//   });
// };

const convertCurrency = async (from, to, amount) => {
  let exchangeRate = await getExchangeRate(from, to);
  let convertedAmount = (exchangeRate * amount).toFixed(2);
  let countries = await getCountries(to);
  return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend these in the following countries: ${countries.join(', ')}.`
}

convertCurrency('USD', 'CAD', 20).then((message)=>{
  console.log(message);
}).catch((e)=>{
  console.log(e.message);
});

const add = async (a, b) =>{
  return a+b + c;
}

const doWork = async () =>{
  try {
    const res = await add(12, 13);
    return res;
  }catch(e) {
    return 10;
  }

};

doWork().then((data) => {
  console.log(data);
}).catch((e)=>{
  console.log('error');
});
