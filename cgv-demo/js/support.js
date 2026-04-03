window.addEventListener('DOMContentLoaded', () => {
    let search_content = document.querySelector('#search_content');
    let btnSearch = document.querySelector('#btnSearch');

    let filterSystem = document.querySelector('#system');
    let filterTheater = document.querySelector('#theater');
    let filterEvent = document.querySelector('#event');
    let filterPartner = document.querySelector('#partner');
    let filterEtc = document.querySelector('#etc');
    let filterAll = document.querySelector('#all');
    
    createTableAll();

    // all 타입 출력
    filterAll.addEventListener('click', ()=>{
        createTableAll();
    })
    // system 타입 출력
    filterSystem.addEventListener('click', ()=>{
        createTableSystem();
    })
    // theater 타입 출력
    filterTheater.addEventListener('click', ()=>{
        createTableTheater();
    })
    // event 타입 출력
    filterEvent.addEventListener('click', ()=>{
        createTableEvent();
    })
    // partner 타입 출력
    filterPartner.addEventListener('click', ()=>{
        createTablePartner();
    })
    // etc 타입 출력
    filterEtc.addEventListener('click', ()=>{
        createTableEtc();
    })

    btnSearch.addEventListener('click', () => {
        if(search_content.value.trim() === '') {
            alert('검색 내용을 입력해주세요');
            search_content.focus();
        }
    })
})

async function getJson () {
    let response = await fetch('../data/support.json');
    return response.json();
}

async function createTableAll () {
    let jsonData = await getJson();
    let output = `
        ${
            jsonData.map( (val, idx) =>
                `<tr>
                    <td>${idx+1}</td>
                    <td>${val.type}</td>
                    <td><a href="#">${val.title}</a></td>
                    <td>${val.rdate}</td>
                    <td>${val.hits}</td>
                </tr>`
            ).join("")
        }`
    
    document.querySelector('#table-list').innerHTML = output;
}

async function createTableSystem () {
    let jsonData = await getJson();
    let filterSystem = jsonData.filter(item => item.type == 'system')

    let output = `
        ${
            filterSystem.map( (val, idx) =>
                `<tr>
                    <td>${idx+1}</td>
                    <td>${val.type}</td>
                    <td><a href="#">${val.title}</a></td>
                    <td>${val.rdate}</td>
                    <td>${val.hits}</td>
                </tr>`
            ).join("")
        }`

        document.querySelector('#table-list').innerHTML = output;
}

async function createTableTheater () {
    let jsonData = await getJson();
    let filterTheater = jsonData.filter(item => item.type == 'theater')

    let output = `
        ${
            filterTheater.map( (val, idx) =>
                `<tr>
                    <td>${idx+1}</td>
                    <td>${val.type}</td>
                    <td><a href="#">${val.title}</a></td>
                    <td>${val.rdate}</td>
                    <td>${val.hits}</td>
                </tr>`
            ).join("")
        }`

        document.querySelector('#table-list').innerHTML = output;
}

async function createTableEvent () {
    let jsonData = await getJson();
    let filterEvent = jsonData.filter(item => item.type == 'event')

    let output = `
        ${
            filterEvent.map( (val, idx) =>
                `<tr>
                    <td>${idx+1}</td>
                    <td>${val.type}</td>
                    <td><a href="#">${val.title}</a></td>
                    <td>${val.rdate}</td>
                    <td>${val.hits}</td>
                </tr>`
            ).join("")
        }`

        document.querySelector('#table-list').innerHTML = output;
}

async function createTablePartner () {
    let jsonData = await getJson();
    let filterPartner = jsonData.filter(item => item.type == 'partner')

    let output = `
        ${
            filterPartner.map( (val, idx) =>
                `<tr>
                    <td>${idx+1}</td>
                    <td>${val.type}</td>
                    <td><a href="#">${val.title}</a></td>
                    <td>${val.rdate}</td>
                    <td>${val.hits}</td>
                </tr>`
            ).join("")
        }`

        document.querySelector('#table-list').innerHTML = output;
}

async function createTableEtc () {
    let jsonData = await getJson();
    let filterEtc = jsonData.filter(item => item.type == 'etc')

    let output = `
        ${
            filterEtc.map( (val, idx) =>
                `<tr>
                    <td>${idx+1}</td>
                    <td>${val.type}</td>
                    <td><a href="#">${val.title}</a></td>
                    <td>${val.rdate}</td>
                    <td>${val.hits}</td>
                </tr>`
            ).join("")
        }`

        document.querySelector('#table-list').innerHTML = output;
}