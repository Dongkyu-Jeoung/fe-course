window.addEventListener('DOMContentLoaded', () => {
    show();
})


const data_url = 'http://127.0.0.1:5501/javascript/13.asyncronuos/employees.json'

async function show () {
    let jsonData = await (await fetch(data_url)).json();

    let output = `
        <h1>${jsonData.title}</h1>
        <table border="1">
            <tr>
                <th>NO</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>DEPT</th>
            </tr>
            ${
                jsonData.list.map((emp, idx) =>
                    `<tr>
                        <td>${idx+1}</td>
                        <td>${emp.name}</td>
                        <td>${emp.age}</td>
                        <td>${emp.department}</td>
                    </tr>`
                ).join("")
            }
        </table>
    `

    document.querySelector('#content').innerHTML = output;
}