import axios from "axios";

const host = process.env.NEXT_PUBLIC_BASEURL;

const api = axios.create({
  baseURL: host,
});
// 요청 인터셉터 설정
api.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰 값을 가져옴
    const token = localStorage.getItem("token");

    // 토큰 값이 존재할 경우 헤더에 토큰을 포함시킴
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // 로그인 페이지로 리다이렉션
        return Response.redirect(new URL("/", process.env.NEXT_BASE_URL));
        // router.push({ name: 'deatail-sign' });
      } else {
        alert(error.response.data.message);
        // 다른 HTTP 상태 코드에 대한 처리
        // 예를 들어, 404 Not Found 등
        // 에러 메시지 출력 또는 다른 작업 수행 가능
      }
    } else {
      // 서버로의 요청이 실패한 경우에 대한 처리
      // 예를 들어, 서버에 도달하지 못한 경우
    }

    return Promise.reject(error);
  }
);
export default api;

// export const api = axios.create({
//   baseURL: host,
//   headers: {
//     'content-type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
// });
