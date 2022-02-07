let chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function transformerMaker(trans){
    let ele = document.createElement("div");
    ele.classList.add("character");

    let img = document.createElement("img");
    img.classList.add("img");

    let transName = document.createElement("div");
    let transClass = document.createElement("div");
    let transVehicle = document.createElement("div");

    ele.appendChild(transName);
    ele.appendChild(transClass);
    ele.appendChild(transVehicle);

    transName.innerHTML = "Name: " + trans.name;
    transClass.innerHTML = "Class: " + trans.class.toUpperCase();
    transVehicle.innerHTML = "Vehicle: " + trans.vehicle;

    if (trans.afl == "autobot") {
        ele.classList.add("autobot");
        ele.classList.add("img");
        ele.appendChild(img);
        img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    } else {
        ele.classList.add("decepticon");
        ele.classList.add("img");
        ele.appendChild(img);
        img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    }

    if (trans.vehicle == "car") {
        transVehicle.style.color = "gold";
    } else if (trans.vehicle == "truck") {
        transVehicle.style.color = "blue";
    } else if (trans.vehicle == "tank") {
        transVehicle.style.color = "green";
    } else if (trans.vehicle == "plane") {
        transVehicle.style.color = "white";
    }

    ele.classList.add("characterdiv")
    document.body.appendChild(ele);


}

for (let i=0; i<chrs.length; i ++){
    transformerMaker(chrs[i]);
}