let userName;
let userEmail;
let userAddress;
let userHouseNumber;
let userCity;
let userState;
let userZipCode;

function signUp(){
    userName = document.getElementById("userName").value;
    userEmail = document.getElementById("userEmail").value;
    userAddress = document.getElementById("userAddress").value;
    userHouseNumber = document.getElementById("userHouseNumber").value;
    userCity = document.getElementById("userCity").value;
    userState= document.getElementById("userState").value;
    userZipCode = document.getElementById("userZipCode").value;

    const outPutData = document.getElementById("outPutData");
    outPutData.innerHTML = `
    
        <h2>Filled Data</h2>
        <p>Name ${userName}</p>
        <p>Email ${userEmail}</p>
        <p>Address ${userAddress}</p>
        <p>House Number ${userHouseNumber}</p>
        <p>City ${userCity}</p>
        <p>State ${userState}</p>
        <p>Zip Code ${userZipCode}</p>
        
    `;
}