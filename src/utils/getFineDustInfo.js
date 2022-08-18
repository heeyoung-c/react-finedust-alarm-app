import axios from 'axios'

const getParameters = {
  // serviceKey: process.env.REACT_APP_SERVICE_KEY,
  serviceKey:
    'G%2FYd2kJcAFrMhbq2dIu1WVAuhW95Y7a5B8I6BO1Q7mkGrE7uJFDF2CrAyk8CTwXXGZ%2FsRvN5WrZKBwAHWTeS%2Fw%3D%3D',
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  sidoName: '경기/시흥',
  ver: '1.0',
}

export const fetchData = async () => {
  const res = await axios({
    url: 'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
    method: 'GET',
    params: getParameters,
  })
  return res
}
