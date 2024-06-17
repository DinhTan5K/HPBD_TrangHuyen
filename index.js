const contentLetterSrart_actived = "Gửi đến bạn đồng hành của anhhhh,Nguyễn Ngọc Trang Huyền" //Lời mở đầu cho bức thư
const mainContentLetter = "Chúc bé một sinh nhật thật dui dẻ(dù anh biết em đi học cả ngày - thương em ) , tuổi mới nhiều thứ mới mẻ hơn , chúc bé thật nhiều may mắn trong tương lai , :)) với lại +1 tuổi lớn rồi hong có bùn hong có tủi thân rồi khoc một mình nữa nha :)) mặc dù anh bít em khóc là do anh nma anh vẫn mún em chia sẻ câu chuyện của em với anh , anh chúc bé có được tất cả những gì bé muốn , mong bé vẫn sẽ đồng hành cùng anh trên đoạn đường này, snhat này của em , anh khum có ở bên em để dắt em đi chơi đi đây đó  :( nma ko lần này thì lần khác ha anh có dịp anh sẽ ra dẫn em đi chơi bù ha ,anh cũm khum bít nói dì với em hơn là những lời iuu emmm hé hé . Anh yêu Trang Huyền của anh nhèo :3 Chúc em sinh nhật vui vẻ nha bé iu. Dưới đây là bài hát :)) trong cả chục bài anh tập hát cho em và bài này đỡ dở nhất :3 mong em khom chê, à còn nữa lời bài hát thay lời anh gửi đến em :3 "

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/TH.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/cun.png"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        const splitMainContentLetter = mainContentLetter.split("");

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 5) + 15;
        var moveTime = Math.floor(Math.random() * 4) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 5)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}