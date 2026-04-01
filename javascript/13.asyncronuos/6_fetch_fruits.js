// 최초 호출되는 이벤트 함수 : window.addEventListner()
window.addEventListener('DOMContentLoaded', () => {
    show();
})


const data_url = 'http://127.0.0.1:5501/javascript/13.asyncronuos/fruit.json';

// getJson 함수 생성

async function getJson () {
    let response = await fetch(data_url);
    return response.json();
}

// show 함수 생성
async function show () {
    let jsonData = await getJson();
    console.log(jsonData);

    let output = `
        <h1>${jsonData.title}</h1>
        <table border="1">
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>COLOR</th>
                <th>EMOJI</th>
            </tr>
            ${  // 자바스크립트 코드
                jsonData.list.map((fruit, idx) =>
                    `<tr>
                        <td>${idx+1}</td>
                        <td>${fruit.name}</td>
                        <td>${fruit.color}</td>
                        <td>${fruit.emoji}</td>
                    </tr>`
                ).join("")
            }
        </table>
    `;
    document.querySelector('#content').innerHTML = output;
}

// show();