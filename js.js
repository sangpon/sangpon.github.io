function calculateAge(yearBorn) {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn ;
}



var name = prompt("Chào mừng bạn đã đến trang Web của mình. Có thể cho mình biết tên của bạn không ?");

var yearBorn = prompt("Giờ thì bạn cho mình biết năm sinh nữa nhé") ;
var age = calculateAge(yearBorn) ; 

console.log(name + " năm nay " + age + " tuổi ")

var message = "";
if (age < 18) {
	message += "Xin lỗi Bạn ";
	var i=0; 
	while (i<5){
		message += "chưa";
		i++;
	}
	message += " đủ tuổi";

	if ((age > 5) && (age < 10)) {
		message = " Bạn là trẻ con ";
	}
} else if (age < 50) {
	message = "Bạn đã đủ tuổi";
} else {
	message = "Bạn đã quá tuổi";
}

console.log(message);

var gender = prompt( " Giới tính của Bạn là gì ? (trai/gái)")
switch (gender) {
	case "trai":
		console.log(" Bạn là con Trai");
		break;
	case "gái":
		console.log(" Bạn là con Gái");
		break;
	default:
		console.log("Bạn đã nhập sai, vui lòng thử lại"); 
}

var isClose = confirm("Bạn có muốn thoát khỏi trang web không ?")

message= "";
if (isClose === true) {
	for (var i=0; i<10; i++) {
		message +=" bye";
	}
} else {
	message =("Cảm ơn vì đã ở lại")
}

console.log(message);