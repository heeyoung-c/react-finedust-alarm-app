import axios from 'axios'
import qs from 'qs'

// axios 가 자체적으로 encode 하는 것을 방지!
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

export const getFineDustData = async () => {
  const res = await axios({
    url: 'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
    method: 'GET',
    params: getParameters,
  })
  return res.data.response.body.items
}
