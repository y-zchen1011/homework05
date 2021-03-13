let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];


const card = document.querySelector(".ticketCard-area");
const search = document.querySelector(".regionSearch");
const submit = document.querySelector(".addTicket-btn");
const item = document.querySelector("#searchResult-text");
let str = "";

function init(){
    card.innerHTML = "";
    item.textContent = "";
    let count = 0;
    console.log("restart")
    data.forEach(function (item, index){
        str = concatenation(item);
        card.innerHTML += str;
        count ++;
    });
    item.textContent = `本次搜尋共 ${count} 筆資料`;
}
function concatenation(item){
    return `
    <li class="ticketCard">
            <div class="ticketCard-img">
                <a href="#">
                    <img src="${item.imgUrl}" alt="">
                </a>
                <div class="ticketCard-region">${item.area}</div>
                <div class="ticketCard-rank">${item.rate}</div>
            </div>
            <div class="ticketCard-content">
                <div>
                    <h3>
                        <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                        ${item.description}嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。
                    </p>
                </div>
                <div class="ticketCard-info">
                    <p class="ticketCard-num">
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${item.group}</span> 組
                    </p>
                    <p class="ticketCard-price">
                        TWD <span id="ticketCard-price">${item.price}</span>
                    </p>
                </div>
            </div>
        </li>
    `;
}
function validation(item){
    return !(item.id === "" || item.name === "" || item.imgUrl === "" || item.area === "" || item.description === ""
        || item.group === "" || item.price === "" || item.rate === "");
}


init();
search.addEventListener('change',()=> {
    if(search.value === ""){
        init();
    }else{
        card.innerHTML = "";
        let count = 0;
        data.filter(item => item.area === search.value)
            .forEach(function (item, index) {
                str = concatenation(item);
                card.innerHTML += str;
                count ++
            });
        item.textContent = `本次搜尋共 ${count} 筆資料`;
    }
});
submit.addEventListener('click',()=>{
    let name = document.querySelector("#ticketName").value;
    let imgUrl = document.querySelector("#ticketImgUrl").value;
    let area = document.querySelector("#ticketRegion").value;
    let price = document.querySelector("#ticketPrice").value;
    let group = document.querySelector("#ticketNum").value;
    let rate = document.querySelector("#ticketRate").value;
    let description = document.querySelector("#ticketDescription").value;
    let newData = {
        "id": 2,
        "name": name,
        "imgUrl": imgUrl,
        "area": area,
        "description": description,
        "group": group,
        "price": price,
        "rate": rate
    }
    if(validation(newData)){
        data.push(newData);
        init();
    }else{
        alert("資料錯誤");
    }
});








