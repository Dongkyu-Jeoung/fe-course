window.addEventListener('DOMContentLoaded', () => {
    createSwiper();
    show();
})


// KOBIS API
async function getJson () {
    const key = `d958a4f3912d79ee77d2dc0a39ee2a17`;
    const today = new Date();
    const targetDt = String(today.getFullYear()) + 
        String(today.getMonth()+1).padStart(2,'0') + String(today.getDate()-1).padStart(2,'0');
    
    const data_url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`
    let response = await fetch(data_url);
    return response.json();
}


// KMDB API
async function getPoster (movieNm, openDt) {
    const key = '04SE2L62OF3P0LU83V7M';
    let kmdbUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&releaseDts=${openDt}&ServiceKey=${key}`

    let response = await fetch(kmdbUrl);
    return response.json();
}

// CGV demo 사이트에서는 상위 5개 영화 정보만 필요
async function movieChart () {
    let kobis = await getJson();
    let dailyBoxOfficeList = kobis.boxOfficeResult.dailyBoxOfficeList;
    return dailyBoxOfficeList.slice(0,5);
}


// 누적 관객 만단위 표시 하려고 만듬
function strToMan (str) {
    let num = Number(str);
    const man = Math.floor(num / 10000);

    return man.toLocaleString()
}

// 화면 출력 함수
async function show() {
    const topMovie = await movieChart();
    let poster = [];

    for (movie of topMovie) {
        let movieNm = movie.movieNm;
        let openDt = movie.openDt.replaceAll('-','');
        let posterJson = await getPoster(movieNm, openDt);
        let posters = posterJson.Data[0].Result[0].posters.split("|");        
        poster.push(posters[0]);
    }
        
    let output = `
        ${
            topMovie.map( (movie, idx) => 
                `<li>
                    <div><img src="${poster[idx]}" alt="moviechart img" width="200px"></div>
                    <div><h3>${movie.movieNm}</h3></div>
                    <div><h5>누적관객 : ${strToMan(movie.audiAcc)} 만</h5></div>
                </li>`
            ).join("")
        }   
    `
            
    document.querySelector('#movie-chart').innerHTML = output;
}

function createSwiper () {
    const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    autoplay : {delay : 6000},
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    });
}
