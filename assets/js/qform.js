 //  dev
	//const devUrl ='https://docs.google.com/forms/u/0/d/e/1FAIpQLSewwOgTXm_OJmyLwxXPY2C6YI6nax6xTdyAuplFr2AyfPXYRQ/formResponse'
		
// prd
const prdUrl
='https://docs.google.com/forms/u/0/d/e/1FAIpQLScBmSlyG6AsRYu326aAYDhHAn_KsmE9IRns2AsBlDHilRYfIg/formResponse'
//var f01="",f052="",f053="",f054="",f055="",f056="",f057=""
	
	
	// 获取复选框元素
	//let checkbox051 = document.getElementById('f05-1');
	
	    // 添加事件监听器，当复选框状态变化时触发
	    //checkbox051.addEventListener('change', function() {
			
	        // 检查复选框是否被选中
	        //if (checkbox051.checked) {
	            // 获取复选框的值
	             //f051 = checkbox051.value+"廣告投放,";
	           
	        //} else{
				//f051="";
			//}
	    //});
	//let checkbox052 = document.getElementById('f05-2');
	
	    // 添加事件监听器，当复选框状态变化时触发
	    //checkbox052.addEventListener('change', function() {
	        // 检查复选框是否被选中
	        //if (checkbox052.checked) {
	            // 获取复选框的值
	             //f052 = checkbox052.value+"社群服務,";
	           
	        //} else{
				//f052="";
			//}
	    //});
	//let checkbox053 = document.getElementById('f05-3');
	
	    // 添加事件监听器，当复选框状态变化时触发
	    //checkbox053.addEventListener('change', function() {
	        // 检查复选框是否被选中
	        //if (checkbox053.checked) {
	            // 获取复选框的值
	             //f053 = checkbox053.value+"ACOUSTIC,";
	           
	        //} else{
				//f053="";
			//}
	    //});
	//let checkbox054 = document.getElementById('f05-4');
	
	    // 添加事件监听器，当复选框状态变化时触发
	    //checkbox054.addEventListener('change', function() {
	        // 检查复选框是否被选中
	        //if (checkbox054.checked) {
	            // 获取复选框的值
	             //f054 = checkbox054.value+"CDP,";;
	           
	        //} else{
				//f054="";
			//}
	    //});
	//let checkbox055 = document.getElementById('f05-5');
	
	    // 添加事件监听器，当复选框状态变化时触发
	    //checkbox055.addEventListener('change', function() {
	        // 检查复选框是否被选中
	        //if (checkbox055.checked) {
	            // 获取复选框的值
	             //f055 = checkbox055.value+"HCL UNICA,";
	           
	        //}else{
				//f055="";
			//}
	    //});
	//let checkbox056 = document.getElementById('f05-6');
	
	    // 添加事件监听器，当复选框状态变化时触发
	    //checkbox056.addEventListener('change', function() {
	        // 检查复选框是否被选中
	        //if (checkbox056.checked) {
	            // 获取复选框的值
	             //f056 = checkbox056.value+"MAGNOLIA CMS,";
	           
	        //} else{
				//f056="";
			//}
	    //});
	//let checkbox057 = document.getElementById('f05-7');
	
	    // 添加事件监听器，当复选框状态变化时触发
	    //checkbox057.addEventListener('change', function() {
	        // 检查复选框是否被选中
	        //if (checkbox057.checked) {
	            // 获取复选框的值
	             //f057 = checkbox057.value+"其他";
	           
	        //} else{
				//f057="";
			//}
	    //});

document.getElementById("submitButton").addEventListener("click", function() {
	const name = document.getElementById("f01").value;
	const email = document.getElementById("f02").value;
	const message = document.getElementById("f03").value;

	if (name === "") {
		Swal.fire({
			icon: 'error',
			title: '請輸入姓名',

		})

		return;
	}

	if (email === "") {
		Swal.fire({
			icon: 'error',
			title: '請輸入電子郵件帳號',

		})

		return;
	}
	
	var formObj={
	  'entry.774967676': name,
	  'entry.532808100': email,
	  'entry.1228655812': message,
	};
	
	postForm(formObj)
});

function refreshPage() {
	// 使用 location.reload() 方法刷新页面
	location.reload();
}

function postForm(data) {
	
	
	  

	$.ajax({
		type: 'POST',
		url: prdUrl,
		data: data,
		contentType: 'application/json',

		dataType: 'jsonp',


		complete: function() {
			Swal.fire({
				showCloseButton: true,
				icon: 'success',
				title: '資料已送出',

			})
			setTimeout(function() {
				refreshPage()
			}, 4100);
		}
	});
	let userAgent = window.navigator.userAgent;
	if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
		setTimeout(function() {
			Swal.fire({
				showCloseButton: true,
				icon: 'success',
				title: '資料已送出',

			})
			
		}, 200);
		setTimeout(function() {
			refreshPage()
		}, 3800); // iPad or iPhone
	}

}
