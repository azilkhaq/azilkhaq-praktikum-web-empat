function PostLogin() {
    var username = document.forms["formLogin"]["username"].value;
    var password = document.forms["formLogin"]["password"].value;
    if (username == "azilkhaq" && password == "123") {
        location.href = 'redirect.html';
    } else if (username == "" || password == "") {
        alert("username dan password tidak boleh kosong!");
    } else {
        alert("username atau password yang anda masukan salah!");
    }
}