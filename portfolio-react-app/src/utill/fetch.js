/**
 * 네트웍을 이용하여 JSON 데이터 가져오기
 */

export async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}