document.addEventListener("deviceready", onDeviceReady, false);		
function onDeviceReady() {
	//バックボタン押下時
	$(document).on("backbutton", function() {
		alert("backbuttonが押された");
	});
	//メニューボタン押下時
	$(document).on("menubutton", function() {
		alert("menubuttonが押された");
	});
	//検索ボタン押下時
	$(document).on("searchbutton", function() {
		alert("searchbuttonが押された");
	});
};
