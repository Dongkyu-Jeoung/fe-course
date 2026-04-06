/**
 * DOM 객체 생성 후 객체 호출
 */
window.addEventListener('DOMContentLoaded', () => {
    /** 검색하기 버튼 이벤트 */
    let search_content = document.querySelector('#search_content');
    let btnSearch = document.querySelector('#btnSearch');

    btnSearch.addEventListener('click', () => {
        if(search_content.value.trim() === '') {
            alert('검색할 내용을 입력해주세요');
            search_content.focus();
        } else {
            //검색 진행
        }
    });

    /** 테이블 생성 함수 */
    createTable();

}); //window event

//filterMenu 함수 생성
async function filterMenu(type) {
    let filterList = null;
    if(type === 'all') {
        // createTable();
        filterList = await getJson();
    } else {
        filterList = await filterData(type);
    }
    // console.log('result --> ',filterList);
    let output = `
        <table id='stable'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
            ${
                filterList.map((item, idx) => `
                    <tr>
                        <td>${idx+1}</td>
                        <td>${item.type}</td>
                        <td>${item.title}</td>
                        <td>${item.rdate}</td>
                        <td>${item.hits}</td>
                    </tr>
                `).join("")
            }
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">1 2 3 4 5  >></td>
                </tr>
            </tfoot>
        </table>
    `;
    
    document.querySelector('#stable')?.remove();
    document.querySelector('#before-table').insertAdjacentHTML('afterEnd', output);
    
}

//filterData 함수 생성
async function filterData(type) {
    let data = await getJson();
    // console.log('data => ', type, data);
    return data.filter(item => item.type === type);
}

//support.json JSON 데이터 가져오기
async function getJson() {
    let response = await fetch("../data/support.json");
    return response.json();
}

async function createTable() {
    let list = await getJson();
    // console.log('list =>', list);
    let output = `
        <table id='stable'>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>구분</th>
                    <th>제목</th>
                    <th>등록일</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
            ${
                list.map((item, idx) => `
                    <tr>
                        <td>${idx+1}</td>
                        <td>${item.type}</td>
                        <td>${item.title}</td>
                        <td>${item.rdate}</td>
                        <td>${item.hits}</td>
                    </tr>
                `).join("")
            }
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="5">1 2 3 4 5  >></td>
                </tr>
            </tfoot>
        </table>
    `;

    document.querySelector('#before-table').insertAdjacentHTML('afterEnd', output);
}