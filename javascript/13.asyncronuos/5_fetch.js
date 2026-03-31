/**
 * fetch(resource) : 데이터 파일을 호출하여 데이터를 가져오는 함수
 * - JSON(JavaScripts Object Notation) 파일을 호출
 * - Web API 구조는 보통 JSON 형태임
 */
let data_url = 'http://127.0.0.1:5501/javascript/13.asyncronuos/data.json';

function getJson2() {
    fetch(data_url)
        .then( response => response.json() )     // 성공 시 받은 response 객체에 json데이터만 걸러냄
        .then((jsonData) => { console.log(jsonData); })  // 위에서 return값인 response.json()을 받아서 출력
        .catch( error => console.log('error =>', error) );
}


const getJson = () => {
    fetch(data_url)
        .then( response => response.json() )
        .catch( error => console.log('error =>', error) );
}

const getJson3 = async () => {
    let response = await fetch(data_url);
    return response.json();
}

async function getJson4 () {
    let response = await fetch(data_url);
    return response.json();
}

async function test() {
    let jsonData1 = await getJson3();
    let jsonData2 = await getJson4();
    
    console.log(jsonData1);
    console.log(jsonData2);
}

getJson();
getJson2();
test();


