import axios from "axios";

const BASE_URL = "https://dapi.kakao.com/v3/search/book";
const KAKAO_KEY = process.env.REACT_APP_KAKAO_API_KEY;


// 책 검색 API 요청 함수
export const searchBooks = async (query: string) => {
    if (!query.trim()) return [];

    try {
        const response = await axios.get(BASE_URL, {
            params: { target: "title", query }, // ✅ GET 요청에 쿼리 파라미터 추가
            headers: {
                Authorization: `KakaoAK ${KAKAO_KEY}`, // ✅ 인증 헤더 추가
            },
        });

        return response.data.documents || []; // 📚 카카오 API는 `documents` 배열을 반환해
    } catch (error) {
        console.error("카카오 책 검색 API 호출 중 오류 발생:", error);
        return [];
    }
};