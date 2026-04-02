const key = `d958a4f3912d79ee77d2dc0a39ee2a17`;

async function getJason (type, targetDt) {
    const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${targetDt}`;
    let response = await fetch(data_url);
    return response.json();
}


async function handleBoxOffice() {
    let type = document.querySelector('#type').value;
    let sdate = document.querySelector('#sdate').value;

    const today = new Date();
    const todayStr = String(today.getFullYear()) + '-' +
        String(today.getMonth()+1).padStart(2,'0') + '-' + String(today.getDate()).padStart(2,'0');    

    if(type == 'Default') {
        alert('타입을 선택해주세요');
        document.querySelector('#type').focus();
        return;
    } else {
        // validation check
        if(sdate == "") {
            alert('날짜를 선택해주세요');
            document.querySelector('#sdate').focus();
        } else if (sdate >= todayStr) {
            alert('아직 집계 전입니다.');
            return;
        } else {
            let targetDt = sdate.replaceAll('-','');
            let kobis = await getJason(type, targetDt);
            let kobis_data = null;
            let posterList = [];

            if (type === 'Daily'){
                kobis_data = kobis.boxOfficeResult.dailyBoxOfficeList;
            } else {
                kobis_data = kobis.boxOfficeResult.weeklyBoxOfficeList;
            }


            for (const movie of kobis_data) {
                // 영화제목(movieNm), 개봉일(openDt)
                let movieNm = movie.movieNm;
                let openDt = movie.openDt.replaceAll('-','');

                let posters = await searchMoviePoster(movieNm, openDt);    
                posterList.push(posters);
            }
            

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
                        kobis_data.map((instance, idx) =>
                            `
                                <tr>
                                    <td>${instance.rank}</td>
                                    <td>
                                        <img src="${posterList[idx][0]}" style="width:50px">
                                        <a href="#" onclick="handleMovieInfo(${instance.movieCd}, ${instance.rank}, '${posterList[idx]}')">
                                        ${instance.movieNm}</td>
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
    }
}

// KMDB API (영화 포스터 가져오기)
async function searchMoviePoster (movieNm, openDt) {
    const key = '04SE2L62OF3P0LU83V7M';
    let kmdbUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&releaseDts=${openDt}&ServiceKey=${key}`

    // let response = await fetch(kmdbUrl);
    // let kmdb = await response.json();
    // let poster = kmdb.Data[0].Result[0].posters.split("|");

    try {
        let response = await fetch(kmdbUrl);
        let kmdb = await response.json();

        // 데이터가 있는지 단계별로 확인 (Optional Chaining ?. 활용)
        const movieResult = kmdb.Data?.[0]?.Result?.[0];
        const posterString = movieResult?.posters || "";

        if (posterString) {
            // 파이프(|)로 구분된 주소들을 배열로 만들고 빈 값 제거
            return posterString.split("|").filter(url => url.trim() !== "");
        } else {
            return []; // 포스터가 없으면 빈 배열 반환
        }
    } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        return [];
    }
}

function openModal(movieInfoObj) {
    let modal = document.querySelector('#modal');
    let modalBody = document.querySelector('#modal-body');
    let modalClose = document.querySelector('#modal-close');

    let posterList = movieInfoObj.posterList.split(',');
    

    modalClose.addEventListener('click',() => {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    })

    let output = `
        <h3>[${movieInfoObj.movieRank}] ${movieInfoObj.movieNm}</h3>
        <ul>
            ${
                posterList.map(poster =>
                    `
                    <li><img src="${poster}" style="width:100px"></li>
                    `
                ).join("")
            }
            <li><label>감독 : </label> ${movieInfoObj.director}</li>
            <li><label>배우 : </label> ${movieInfoObj.actor}</li>
        </ul>
    `

    modal.style.display = 'flex';
    modalBody.innerHTML = output;
}


async function handleMovieInfo(movieCd, rank, posterList) {
    let info = await getMovieInfo(movieCd);
    let movieInfoObj = {
        movieRank : rank,
        movieNm : info.movieInfoResult.movieInfo.movieNm,
        director : info.movieInfoResult.movieInfo.directors[0].peopleNm,
        actor : info.movieInfoResult.movieInfo.actors[0].peopleNm,
        posterList : posterList
    }
    
    
    openModal(movieInfoObj);
}

async function getMovieInfo (movieCd) {
    // 영화 상세 API를 통해 json 객체 가져오기
    let response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`);
    return response.json();
}

window.addEventListener('DOMContentLoaded', ()=> {
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', () => {
        handleBoxOffice();
    })
})