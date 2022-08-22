const axios = require('axios')
const qs = require('qs')
const { REACT_APP_SERVICE_KEY } = process.env

axios.defaults.paramsSerializer = params => {
  return qs.stringify(params, { encode: false })
}

const getParameters = {
  serviceKey: process.env.REACT_APP_SERVICE_KEY,
  returnType: 'json',
  numOfRows: '631',
  pageNo: '1',
  sidoName: '전국',
  ver: '1.0',
}

exports.handler = async function handler(event) {
  const res = await axios({
    url: 'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
    method: 'GET',
    params: getParameters,
  })
  return res.data.response.body.items
}