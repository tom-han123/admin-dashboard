

fetch('https://randomuser.me/api/?results=500').then((data)=>{
    return data.json();
}).then((completedata)=>{
    let datalist="";
    let id = 1;
    completedata.results.map((values)=>{
        datalist+=`<tr>
        <td>
            <p class="small-text light">${id++}</p>
        </td>
        <td><p class="small-text">${values.name['first']}</p></td>
        <td onclick="live()"><span class="view-profile green">Live</td>
    </tr>`
    });
    
    document.getElementById('users').innerHTML=datalist;
}).catch((err)=>{
    console.log(err);
});

function single_user(){
    document.querySelector('.map-img').style.display = "none";
    document.querySelector('.user-profile').style.display = "grid";
    document.querySelector('#tran-chart-part').style.display = 'none';
    document.querySelector('#report-chart-part').style.display = 'none';
    document.querySelector('#momement-chart-part').style.display = 'none';
    fetch('https://randomuser.me/api/').then((data)=>{
        return data.json();
    }).then((completedata)=>{
        var pic, n, age, phone, addr;
        completedata.results.forEach(element => {
            pic = element['picture']['large'];
            n = element['name']['title']+' '+element['name']['first']+' '+element['name']['last'];
            age = element['dob']['age'];
            phone = element['phone'];
            addr = element['city']+', '+element['state']+','+element['country'];
            console.log(pic);
        });
        let datalist=`<img src="${pic}" class="profile-img" alt="">
            <ul class="profile-li">
                <li><span class="medium-text green">${n}</span></li>
                <li><span class="small-text light">${age}</span></li>
                <li><span class="small-text light">${phone}</span></li>
                <li><span class="small-text light">${addr}</span></li>
            </ul>`;
        document.getElementById('user-info').innerHTML=datalist;
    }).catch((err)=>{
        console.log(err);
    });
}