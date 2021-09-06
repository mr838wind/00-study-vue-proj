/*
- 작성: 윈드폴
- 목적: axios 인스턴스 생성
*/

import axios from 'axios';


const axiosInterceptors = axios.create({
    headers: { Pragma: "no-cache" }
});


axiosInterceptors.interceptors.request.use(
  function(config){
      // cors
      config.headers['Access-Control-Allow-Origin'] = '*';

      // token
      return config;
  }, (error)=>{
    //console.log('>>== axiosInterceptors >> request >> error : %o ', error);
    return Promise.reject(error);

  }
);



axiosInterceptors.interceptors.response.use(function (response) {
    return response;
},  (error) => {
    return Promise.reject(error);

});

export default axiosInterceptors;
