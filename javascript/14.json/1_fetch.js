let key = `d958a4f3912d79ee77d2dc0a39ee2a17`;
let targetDt = `20260101`;
const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;

const getJson = async() => {
    let response = await fetch(data_url);
    return response.json();
}

const show = async() => {
    // 1. JSON 데이터 가져오기
    let kobis = await getJson();
    let kobis_data = kobis.boxOfficeResult.dailyBoxOfficeList;
    
    // console.log(kobis);
    
    // 2. 출력 데이터 생성 (DHTML)
    let output = `
        <h2>${kobis.boxOfficeResult.boxofficeType}</h2>
        <h3>${kobis.boxOfficeResult.showRange}</h3>
        <table border="1">
            <tr>
                <th>순위</th>
                <th>영화제목</th>
                <th>개봉일</th>
                <th>당일관객수</th>
                <th>누적관객수</th>
                <th>누적매출액(&#8361)</th>
            </tr>
            ${
                kobis_data.map(instance =>
                    `
                        <tr>
                            <td>${instance.rank}</td>
                            <td>${instance.movieNm}</td>
                            <td>${instance.openDt}</td>
                            <td>${Number(instance.audiCnt).toLocaleString()}</td>
                            <td>${Number(instance.audiAcc).toLocaleString()}</td>
                            <td>${Number(instance.salesAcc).toLocaleString()}</td>
                        </tr>
                    `
                ).join("")
            }
        </table>
    `
    // 3. 출력
    document.querySelector('#content').innerHTML = output;
}

window.addEventListener('DOMContentLoaded', () => {
    show();
})