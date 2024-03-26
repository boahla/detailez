import axios from "axios";
import { getSession } from "next-auth/react";

const host = process.env.NEXT_PUBLIC_BASEURL;

const api = axios.create({ baseURL: host });

api.interceptors.request.use(async function (config) {
  const session = await getSession();
  if (session) {
    config.headers.Authorization = `Bearer ${session.user.token}`;
  }

  return config;
});

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

// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// export const api = axios.create({
//   baseURL: host,
//   headers: {
//     'content-type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   },
// });

// const Api = () => {
//   const instance = axios.create({ baseURL: host });
//   instance.interceptors.request.use(
//     async (request) => {
//       const session = await getSession();
//       console.log({ session });

//       console.log({ session });
//       if (session) {
//         request.headers.common = {
//           Authorization: `Bearer ${session.user.token}`,
//         };
//       }
//       return request;
//     },
//     (error) => {
//       console.log("er", { error });
//       return Promise.reject(error);
//     }
//   );

//   instance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       if (error.response) {
//         if (error.response.status === 401) {
//           // 로그인 페이지로 리다이렉션
//           return Response.redirect(new URL("/", process.env.NEXT_BASE_URL));
//           // router.push({ name: 'deatail-sign' });
//         } else {
//           alert(error.response.data.message);
//           // 다른 HTTP 상태 코드에 대한 처리
//           // 예를 들어, 404 Not Found 등
//           // 에러 메시지 출력 또는 다른 작업 수행 가능
//         }
//       } else {
//         // 서버로의 요청이 실패한 경우에 대한 처리
//         // 예를 들어, 서버에 도달하지 못한 경우
//       }

//       return Promise.reject(error);
//     }
//   );

//   return instance;
// };
