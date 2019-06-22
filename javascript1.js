 function checkLogin(username,password){
    username= document.getElementById("username").value;
    password= document.getElementById("password").value;
    if(username=="user123" && password=="123456"){
        alert("chao mung " +username);
    }
    else
    alert("dăng nhập thất bại")
}