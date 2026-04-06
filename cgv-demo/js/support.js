window.addEventListener('DOMContentLoaded', () => {
    let search_content = document.querySelector('#search_content');
    let btnSearch = document.querySelector('#btnSearch');

    let menuList = document.querySelectorAll('.filter-menu li a')
    
    filterMenu('all');

    menuList.forEach(menu => {
        menu.addEventListener('click', () => {
            menuList.forEach(menu => menuDefaultColor(menu))
            menuSelectColor(menu)
            filterMenu(menu.id);
        })
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

async function filterMenu(type) {
    let jsonData = await getJson();
    let filterData = null;

    if (type ==='all') {
        createTable(jsonData);
    } else {
        filterData = jsonData.filter(item => item.type == type);
        createTable(filterData);
    }
}

async function createTable (list) {
    let output = `
        ${
            list.map( (val, idx) =>
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

function menuDefaultColor(menu) {
    menu.style.background = "rgb(137,137,135)";
    menu.style.borderLeft = `1px solid var(rgb(137,137,135))`;
    menu.style.borderBottom = `2px solid var(rgb(137,137,135))`;
}

function menuSelectColor(menu) {
    menu.style.background = "rgb(251, 67, 87)";
    menu.style.borderLeft = `1px solid var(rgb(251, 67, 87))`;
    menu.style.borderBottom = `2px solid var(rgb(251, 67, 87))`;
}