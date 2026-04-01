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
            if (type === 'Daily'){
                kobis_data = kobis.boxOfficeResult.dailyBoxOfficeList;
            } else {
                kobis_data = kobis.boxOfficeResult.weeklyBoxOfficeList;
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
                        kobis_data.map(instance =>
                            `
                                <tr>
                                    <td>${instance.rank}</td>
                                    <td><a href="#" onclick="handleMovieInfo(${instance.movieCd},${instance.rank})">
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

function openModal(movieInfoObj) {
    let modal = document.querySelector('#modal');
    let modalBody = document.querySelector('#modal-body');
    let modalClose = document.querySelector('#modal-close');

    modalClose.addEventListener('click',() => {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
    })

    let output = `
        <h3>[${movieInfoObj.movieRank}] ${movieInfoObj.movieNm}</h3>
        <ul>
            <li><label>감독 : </label> ${movieInfoObj.director}</li>
            <li><label>배우 : </label> ${movieInfoObj.actor}</li>
        </ul>
    `

    modal.style.display = 'flex';
    modalBody.innerHTML = output;
}


async function handleMovieInfo(movieCd, rank) {
    let info = await getMovieInfo(movieCd);
    let movieInfoObj = {
        movieRank : rank,
        movieNm : info.movieInfoResult.movieInfo.movieNm,
        director : info.movieInfoResult.movieInfo.directors[0].peopleNm,
        actor : info.movieInfoResult.movieInfo.actors[0].peopleNm
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