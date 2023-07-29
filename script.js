let data = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
let myMain = document.getElementById("main")

{/* <div class="card">
            <div class="logoCard" id="logoCard">
                <div id="logoCardImage">
                    <img src="https://assets.coingecko.com/coins/images/11085/large/Trust.png?1588062702" alt="img"id="mainImg" >
                </div>
            <div id="logoCardDetails">
                <h3>My Name</h3>
                <h4>fullname</h4>
            </div>
        </div>
            <div class="parcent" id="parcent"></div>
            <div class="price" id="price">
                <h2 id="acPrice">1256</h2>
                <h2 id="cap1">5465414654153</h2>
                <h2 id="cap2">565456456465468453</h2>
            </div>
            <div></div>
        </div> */}


        let card = document.createElement("div");
        card.className = ""

data.then(res=>res.json()).then(mydata=>{
    mydata.forEach(element => {
        console.log(element.id);
    });
})
