var miniChat = document.getElementById("mini-chat")
var chat = document.getElementById("chat")
var myInp = document.getElementById("myInp")
var mainChat = document.querySelector("#chat main")
miniChat.onclick = function () {
    chat.classList.toggle("active")
}
// KEYPRESS,KEYDOWN,KEYUP
myInp.onkeyup = function (a) {
    if (a.keyCode == 13) {
        var MyinpVal = this.value;

        if (MyinpVal.trim() != "") {
            if (MyinpVal[0].toUpperCase() == MyinpVal[0]) {
                var messageDiv = document.createElement("div")
                messageDiv.className = "message admin"
                var pTag = document.createElement("p")
                pTag.innerText = MyinpVal
                messageDiv.appendChild(pTag)
                mainChat.appendChild(messageDiv)
                var myDate = new Date()
                var pTagDate = document.createElement("p")
                pTagDate.className = "time"
                pTagDate.innerText = myDate.getHours() + ":" + myDate.getMinutes()
                messageDiv.appendChild(pTagDate)
                myInp.value = ""
            }
            else {
                var messageDiv = document.createElement("div")
                messageDiv.className = "message user"
                var pTag = document.createElement("p")
                pTag.innerText = MyinpVal
                messageDiv.appendChild(pTag)
                mainChat.appendChild(messageDiv)
                var myDate = new Date()
                var pTagDate = document.createElement("p")
                pTagDate.className = "time"
                pTagDate.innerText = myDate.getHours() + ":" + myDate.getMinutes()
                messageDiv.appendChild(pTagDate)
                myInp.value = ""

            }
            mainChat.scrollTop = mainChat.scrollHeight


        }
        else {
            alert("ELTON NAGARIRSAN BOS QOYMA QAQA")
        }

    }



}