const reviews = [{
        id: 1,
        name: "James",
        job: "Developer",
        img: "https://cdn.onlinewebfonts.com/svg/img_87237.png",
        text: "Great Work",
    },
    {
        id: 2,
        name: "Wilsom",
        job: "Engineer",
        img: "https://cdn.onlinewebfonts.com/svg/img_87237.png",
        text: "Awesome!!"   
    },
];

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem)
})

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson()
})

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson()
})

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length - 1);
    console.log(currentItem);
    showPerson();
})

const selectElement = (s) => document.querySelector(s);
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

/* Transaction Money */

function sendMoney() {
    var name = document.getElementById("name").value;
    var amt = parseInt(document.getElementById("amt").value);
    var senderName = document.getElementById("senderName").value;
    var senderBankAccount = senderName + "BankBalance";
    var senderAmt = parseInt(document.getElementById(senderBankAccount).innerHTML);
    if (amt > senderAmt) {
        alert("Insufficient Balance.")
    } else {
        var findUserBankAccount = name + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + amt;
        var myAccountBalance = parseInt(document.getElementById(senderBankAccount).innerHTML) - amt;
        document.getElementById(senderBankAccount).innerHTML = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;
        alert(`Successful Transaction !!,
             Rs. ${amt} is sent to ${name}@email.com.`)
            // transaction history
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`Rs ${amt} is transferred from ${senderName}@email.com
  to ${name}@email.com`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}

var myVar;

function myLoader() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}