function CheckLogin() {
    event.preventDefault();

    let login = document.querySelector(".authorization-item").value;
    let inputField = document.querySelector(".authorization-item");
    let errorImage = document.querySelector(".error-image");
    let errorText = document.querySelector(".error-text");
     
    if (login == "1443") {
        window.open("Ula.html");
    }

    else if (login == "7773") {
        window.open("Lilya.html");
    }

    else if (login == "1334") {
        window.open("Olesya.html");
    }

    else {
        inputField.style.border = "5px solid #FF0033";
        errorImage.style.display = "flex";  // Corrected the typo here
        errorText.style.display = "flex";    // Corrected the typo here
    }
}

function GetGiftUla() {
    window.open("congratulationUla.html");
}

function GetGiftOlesya() {
    window.open("congratulationOlesya.html");
}

function GetGiftLiliya() {
    window.open("congratulationLiliya.html");
}