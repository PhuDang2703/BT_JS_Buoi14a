//Bài 1
document.getElementById('btnTangDan').onclick = function() {
    // Input
    var so1 = document.getElementById('so1').value;
    var so2 = document.getElementById('so2').value;
    var so3 = document.getElementById('so3').value*1;
    //Xử lý 
    ketQua = "";
    if (so1>so2 && so1>so3 && so2>so3){
        ketQua ="Thứ tự tăng dần là: "+ so3 + " " + so2 + " " + so1;
    } else if(so1>so2 && so1>so3 && so3>so2){
        ketQua ="Thứ tự tăng dần là: "+ so2 + " " + so3 + " " + so1;
    } else if(so2>so1 && so2>so3 && so3>so1){
        ketQua ="Thứ tự tăng dần là: "+ so1 + " " + so3 + " " + so2;
    } else if(so2>so1 && so2>so3 && so1>so3){
        ketQua ="Thứ tự tăng dần là: "+ so3 + " " + so1 + " " + so2;
    }else if(so3>so1 && so3>so2 && so1>so2){
        ketQua ="Thứ tự tăng dần là: "+ so2 + " " + so1 + " " + so3;
    }else if(so3>so1 && so3>so2 && so2>so1){
        ketQua ="Thứ tự tăng dần là: "+ so1 + " " + so2 + " " + so3;
    } else {ketQua = "Có số bằng nhau sẽ không xếp được"}
    // Output
    document.getElementById('ketQuaBai1').innerHTML = ketQua;
}


//Bài 2
document.getElementById('btnChaoHoi').onclick = function () {
    //Input
    var chaoHoi = document.getElementById('chaoHoi').value;
    //Process
    if (chaoHoi == "B" || chaoHoi == "Bố") {
        rs = "Dạ con chào Bố";}
    else if (chaoHoi == "M" || chaoHoi == "Mẹ"){
        rs = "Dạ con chào mẹ";
    } else if (chaoHoi == "A" || chaoHoi == "anh Trai") {
        rs = "Em chào anh";
    } else {
        rs = "Chào em gái";
    }
    //Output
    document.getElementById('ketQuaBai2').innerHTML = rs;
    
}

// Bài 3
document.getElementById('btnChanLe').onclick = function() {
    //input
    var soNguyen1 = document.getElementById('soNguyen1').value*1;
    var soNguyen2 = document.getElementById('soNguyen2').value*1;
    var soNguyen3 = document.getElementById('soNguyen3').value*1;
    
    // Output
    tong = soNguyen1 + soNguyen2 + soNguyen3;

    if (soNguyen1 % 2 === 0 && soNguyen2 % 2 ===0 && soNguyen3 % 2 === 0) {ketQua = "Có 3 số chẵn";} 
    else if(soNguyen1 % 2 !== 0 && soNguyen2 % 2 !==0 && soNguyen3 % 2 !==0 )
    {ketQua = "Có 3 số lẻ";}
    else if (tong % 2 === 0){
        ketQua = "Có 2 số lẻ và 1 số chẵn";
    } else {
        ketQua = "Có 2 số chẵn và 1 số lẻ";
    }
    
    // Output
    document.getElementById('ketQuaBai3').innerHTML = ketQua;
}

// Bài 4
document.getElementById('tamGiac').onclick = function(){
    // input
    var canh1 = document.getElementById('canh1').value*1;   
    var canh2 = document.getElementById('canh2').value*1;   
    var canh3 = document.getElementById('canh3').value*1;   
    //Process
    var a = Math.sqrt(canh1*canh1+canh2*canh2);
    var b = Math.sqrt(canh1*canh1+canh3*canh3);
    var c = Math.sqrt(canh2*canh2+canh3*canh3);
    
    if (canh1===canh2&&canh1===canh3) {
        reSult = "Tam giác đều";
    } else if(canh1===canh2 && canh1!==canh3 || canh1===canh3 &&canh1!==canh2 || canh2===canh3 && canh2!=canh1){
        reSult = "Tam giác cân";
    } else if (canh3===a||canh2===b||canh1===c){
        reSult = "Tam giác vuông";
    } else {
        reSult = "Tam giác khác 3 loại tam giác trên";
    }
    //Output
    document.getElementById('ketQuaBai4').innerHTML=reSult;

}