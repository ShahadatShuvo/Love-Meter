const yourName = document.querySelector('#yourName');
const partnerName = document.querySelector('#partnerName');
const btnSubmit = document.querySelector('#btnSubmit');
const btnMutualLove = document.querySelector('#btnMutualLove');
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const yourCounter = document.querySelector('#yourCounter');
const partnerCounter = document.querySelector('#partnerCounter');
const mutualCounter = document.querySelector('#mutualCounter');
const status1 = document.querySelector('#yourStatus');
const status2 = document.querySelector('#partnerStatus');
const status3 = document.querySelector('#mutualStatus');

function calculateStatus(status, value) {

    if (value < 25) {
        status.className = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger';
        status.innerHTML = `Status: Danger`;
    } else if (value >= 25 && value < 40) {
        status.className = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark';
        status.innerHTML = `Status: Very Poor`;
    } else if (value >= 40 && value < 50) {
        status.className = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning';
        status.innerHTML = `Status: Poor`;
    } else if (value >= 50 && value < 60) {
        status.className = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary';
        status.innerHTML = `Status: Normal`;
    } else if (value >= 60 && value < 80) {
        status.className = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info';
        status.innerHTML = `Status: Good`;
    } else {
        status.className = 'position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success';
        status.innerHTML = `Status: True Love`;
    }
}

function calculateResult(str1, str2) {
    if ((str1 == 'nuri' || str1 == 'nurizerin' || str1 == 'nurijerin') && (str2 == 'shuvo' || str2 == 'shahadat' || str2 == 'hossainshuvo' || str2 == 'shahadatshuvo')) {
        section1.style.display = 'block';
        yourCounter.textContent = `${72}%`;
        partnerCounter.textContent = `${93}%`;
        mutualCounter.textContent = `${83}%`;
        calculateStatus(status1, 72);
        calculateStatus(status2, 93);
        calculateStatus(status3, 83);
    } else if ((str2 == 'nuri' || str2 == 'nurizerin' || str2 == 'nurijerin') && (str1 == 'shuvo' || str1 == 'shahadat' || str1 == 'hossainshuvo' || str1 == 'shahadatshuvo')) {
        section1.style.display = 'block';
        yourCounter.textContent = `${93}%`;
        partnerCounter.textContent = `${72}%`;
        mutualCounter.textContent = `${83}%`;
        calculateStatus(status1, 93);
        calculateStatus(status2, 72);
        calculateStatus(status3, 83);
    } else {
        let randomValue1 = Math.floor(Math.random() * 101);
        let randomValue2 = Math.floor(Math.random() * 101);
        let mutualAverage = Math.ceil((randomValue1 + randomValue2) / 2);
        section1.style.display = 'block';
        yourCounter.textContent = `${randomValue1}%`;
        partnerCounter.textContent = `${randomValue2}%`;
        mutualCounter.textContent = `${mutualAverage}%`;

        calculateStatus(status1, randomValue1);
        calculateStatus(status2, randomValue2);
        calculateStatus(status3, mutualAverage);
    }

    btnMutualLove.addEventListener('click', function() {
        btnMutualLove.style.display = 'none';
        section2.style.display = 'block';
    })
}

btnSubmit.onclick = function() {
    let str1 = yourName.value;
    let str2 = partnerName.value;
    str1 = str1.toLowerCase();
    str1 = str1.split(' ').join('');
    str2 = str2.toLowerCase();
    str2 = str2.split(' ').join('');
    let temp = 0;

    for (let i = 0; i < str1.length; i++) {
        console.log(str1[i]);
        if (str1[i] >= 'a' && str1 <= 'z') {
            temp = 0;
        } else {
            temp = 1;
            break;
        }
    }

    if (temp == 0) {
        for (let i = 0; i < str2.length; i++) {
            if (str2[i] >= 'a' && str2 <= 'z') {
                temp = 0;
            } else {
                temp = 2;
                break;
            }
        }
    }
    if (yourName.value === '' || partnerName.value === '') {
        alert('Please type your and your partner name.');
        window.location.reload();
    } else if (str1.length < 3 || str2.length < 3) {
        alert('Enter Valid Name in both field..');
        window.location.reload();
    } else if (temp == 1) {
        alert('Enter Valid Character between [a-z] and [A-Z] in YOUR NAME field.');
        window.location.reload();
    } else if (temp == 2) {
        alert(`Enter Valid Character between [a-z] and [A-Z] in PARTNER'S NAME field.`);
        window.location.reload();
    } else {
        calculateResult(str1, str2);
    }
}