var drumButtons = document.querySelectorAll(".drum"); //7 sayısını döndürüyor

for (var i = 0; i < drumButtons.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        //butonların hepsine listener eklemiş oluyoruz hangisine bastığımızın kontrolü if blokları ile yapılıyor

        var clickedBtnInnerHTML = this.innerHTML;
        //buradaki this ifadesi dinleyicisi tetiklenen butonu ifade etmekte böylelikle tıkladığımız butonu tutabiliyoruz

        if (clickedBtnInnerHTML === "w") {
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
        } else if (clickedBtnInnerHTML === "a") {
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
        } else if (clickedBtnInnerHTML === "s") {
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
        } else if (clickedBtnInnerHTML === "d") {
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
        } else if (clickedBtnInnerHTML === "j") {
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
        } else if (clickedBtnInnerHTML === "k") {
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
        } else if (clickedBtnInnerHTML === "l") {
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
        }

    })

}


//klavyeye listener ekliyoruz tetiklendiğinde event (e) parametresi alan bir fonksiyon çalışıyor

//eğer klavyeye basılırsa yani fonksiyon tetiklenirse e.key ile hangi tuşa basıldığını alıyoruz if blokları ile bu tuşların kontrolünü yaparak istediğimiz ses dosyasının çalışmasını sağlıyoruz

//ses dosyalarını çalıştırmak için ise Audio sınıfından bir nesne üretmek zorundayız

document.addEventListener("keydown", function (e) {
    console.log(e)
    if (e.key === 'w') {
        var audio = new Audio("sounds/tom-1.mp3")
        audio.play();
    } else if (e.key === 'a') {
        var audio = new Audio("sounds/tom-2.mp3")
        audio.play();
    } else if (e.key === 's') {
        var audio = new Audio("sounds/tom-3.mp3")
        audio.play();
    } else if (e.key === 'd') {
        var audio = new Audio("sounds/tom-4.mp3")
        audio.play();
    } else if (e.key === 'j') {
        var audio = new Audio("sounds/snare.mp3")
        audio.play();
    } else if (e.key === 'k') {
        var audio = new Audio("sounds/crash.mp3")
        audio.play();
    } else if (e.key === 'l') {
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play();
    }else{
        console.log("Wrong key")
    }
});

