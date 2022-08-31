// Action types
const GET_STOCK_DATA = 'stocks-market-trends/stocks/GET_STOCK_DATA';
const GET_COMPANY_DETAILS = 'stocks-market-trends/stocks/GET_COMPANY_DETAILS';
const GET_COMPANY_STATEMENTS = 'stocks-market-trends/stocks/GET_COMPANY_STATEMENTS';
const FILTER_COMPANY = 'stocks-market-trends/stocks/FILTER_COMPANY';
const RESET_STOCK = 'stocks-market-trends/stocks/RESET_STOCK';
const API_URL = 'https://financialmodelingprep.com/api/v3/';
const API_KEY = '8a72d8ff75cae8e9408d6aace712e8c2';

// Stock actions
const initialState = {
  stocksData: [],
  details: [],
  statement: [],
  filtered: [],
};

export const getStockData = (payload) => ({
  type: GET_STOCK_DATA,
  payload,
});

export const getCompanyDetails = (payload) => ({
  type: GET_COMPANY_DETAILS,
  payload,
});

export const getCompanyStatement = (payload) => ({
  type: GET_COMPANY_STATEMENTS,
  payload,
});

export const filterCompany = (payload) => ({
  type: FILTER_COMPANY,
  payload,
});

export const resetStock = () => ({
  type: RESET_STOCK,
});

export const fetchCompanyDetails = (companyId) => async (dispatch) => {
  try {
    const response = await fetch(
      `${API_URL}profile/${companyId}?apikey=${API_KEY}`,
    );
    const result = await response.json();
    dispatch(getCompanyDetails(result));
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchCompanyStatements = (companyId) => async (dispatch) => {
  try {
    const response = await fetch(
      `${API_URL}income-statement/${companyId}?limit=120&apikey=${API_KEY}`,
    );
    const result = await response.json();
    dispatch(getCompanyStatement(result));
  } catch (err) {
    throw new Error(err);
  }
};
