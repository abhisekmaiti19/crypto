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

  let myFunc = function (id,myName,image,current_price,market_cap,price_change_percentage_24h,total_volume){

    const card = document.createElement("div");
    card.className = "card";
    

    const logoCard = document.createElement("div");
    logoCard.className = "logoCard";
    logoCard.id = "logoCard";

    const logoCardImage = document.createElement("div");
    logoCardImage.className = "logoCardImage";
    logoCardImage.id = "logoCardImage";
    const img = document.createElement("img");
    img.src = image;
    img.id = "mainImg"
    logoCardImage.appendChild(img);


    const logoCardDetails = document.createElement("div");
    logoCardDetails.className = "logoCardDetails";
    logoCardDetails.id = "logoCardDetails";
    const h3Ele = document.createElement("h3");
    h3Ele.innerText = `${id}`
    const h4Ele = document.createElement("h4");
    h4Ele.innerText = `${myName}`
    logoCardDetails.appendChild(h3Ele);
    logoCardDetails.appendChild(h4Ele);

    logoCard.appendChild(logoCardImage)
    logoCard.appendChild(logoCardDetails)
    card.appendChild(logoCard)


    const parcent = document.createElement("div");
    parcent.className = "parcent";
    parcent.id = "parcent";
    parcent.innerText = `${price_change_percentage_24h} %`
    card.appendChild(parcent)

    const price = document.createElement("div");
    price.className = "price";
    price.id = "price";
    const ACprice = document.createElement("h2");
    ACprice.id = "acPrice"
    ACprice.innerText = `${current_price}`
    const cap1 = document.createElement("h2");
    cap1.id = "cap1"
    cap1.innerText=`Market cap: ${market_cap}`;
    const cap2 = document.createElement("h2");
    cap2.id="cap2"
    cap2.innerText = `Total Volume: ${total_volume}`
    price.appendChild(ACprice)
    price.appendChild(cap2)
    price.appendChild(cap1)
    card.appendChild(price)

    myMain.appendChild(card);

  }
       

  try {
    let data = fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en').catch(err=>{
        alert("Sorry ! 😢 Wait for 1- 2 minutes")
    })

    data.then(res=>res.json()).then(daata=>{

        Object.entries(daata).forEach(ele=>{
            let myres = ele[1];
            myFunc(myres.id,myres.name,myres.image,myres.current_price,myres.market_cap,myres.price_change_percentage_24h,myres.total_volume)
        })
        
        

    })
    
  } catch (error) {
    alert(error)
    
  }
        

  document.getElementById('gridView').addEventListener("click",()=>{
 
    // document.getElementById('listView').className="";
    document.getElementById('gridView').style = " border-bottom: 5px solid #009dff; border-radius: 0px 10px 10px; color:  #009dff;"

  })

  document.getElementById('listView').addEventListener("click",()=>{
 
    document.getElementById('gridView').style = ""
    document.getElementById('listView').style = " border-bottom: 5px solid #009dff; border-radius: 0px 10px 10px; color:  #009dff;"

  })

            
    
       
       


