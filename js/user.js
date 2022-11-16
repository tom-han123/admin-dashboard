
fetch('https://randomuser.me/api/?results=500').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let datalist=`<tr>
    <th>UserId</th>
    <th>Nickname</th>
    <th>Cell Phone</th>
    <th>Phone</th>
    <th>Balance</th>
    <th>SMS Registeration</th>
    <th>Login Device</th>
    <th>Location</th>
    <th>Online status</th>
</tr>`;
    let id = 1;
    completedata.results.map((values)=>{
        datalist+=`<tr>
        <td>${id++}</td>
        <td>${values.name['first']}</td>
        <td>${values.cell}</td>
        <td>${values.phone}</td>
        <td>10,000</td>
        <td>True</td>
        <td>Iphone14</td>
        <td>${values.country}</td>
        <td class='green'>Active</td>
    </tr>`
    });
    
    document.getElementById('li').innerHTML=datalist;
}).catch((err)=>{
    console.log(err);
});
