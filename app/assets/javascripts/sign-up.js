
//新規登録時  例外処理

$(function(){
	$(".main__box__contents__eight__middle").on('click',function(e){
    e.preventDefault();                      //エラー文消さない
    if(input_check()){                        //
			return false;                           //親要素のイベントを発生させない
		}
	});
});

// 入力内容チェックのための関数
function input_check(){
	let result = true;

	// エラー用装飾のためのクラスリセット
	$('.main__box__contents__one__form').removeClass("inp_error");
	$('.main__box__contents__two__form').removeClass("inp_error");
	$('.main__box__contents__three__form').removeClass("inp_error");
	$('.main__box__contents__five__form__family').removeClass("inp_error");
	$('.main__box__contents__five__form__last').removeClass("inp_error");
	$('.main__box__contents__six__form__j-family').removeClass("inp_error");
	$('.main__box__contents__six__form__j-last').removeClass("inp_error");
	$('.main__box__contents__seven__middle__year-box').removeClass("inp_error");
	$('.main__box__contents__seven__middle__month-box').removeClass("inp_error");
	$('.main__box__contents__seven__middle__date-box').removeClass("inp_error");
  
	// 入力エラー文をリセット
	$("#nickname_error").empty();
	$("#email_error").empty();
	$("#password_error").empty();
	$(".main__box__contents__five__name-error__family").empty();
	$(".main__box__contents__five__name-error__last").empty();
	$(".main__box__contents__six__name-error__j-family").empty();
	$(".main__box__contents__six__name-error__j-last").empty();
	$('#b_year_error').empty();
	// $('#b_month_error').empty();
	// $('#b_day_error').empty();

	// 入力内容セット
	let nickname      =$(".main__box__contents__one__form").val();
	let email         =$(".main__box__contents__two__form").val();
	let password      =$(".main__box__contents__three__form").val();
	let nameseikanzi  =$(".main__box__contents__five__form__family").val();
	let namemeikanzi  =$(".main__box__contents__five__form__last").val();
	let nameseikana   =$(".main__box__contents__six__form__j-family").val();
	let namemeikana   =$(".main__box__contents__six__form__j-last").val();
	let b_year        =$(".main__box__contents__seven__middle__year-box").val();
	let b_month       =$(".main__box__contents__seven__middle__month-box").val();
	let b_day         =$(".main__box__contents__seven__middle__date-box").val();


	// 入力内容チェック

	//ニックネーム
	if(nickname == ""){
		$("#nickname_error").html(" ニックネームを入力してください");
		$(".main__box__contents__one__form").addClass("inp_error");
		result = false;
	}
	
	// メールアドレス
	if(email == ""){
		$("#email_error").html(" メールアドレスを入力してください。");
		$(".main__box__contents__two__form").addClass("inp_error");
		result = false;
	}else if(!email.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)){
		$('#email_error').html("フォーマットが不適切です");
		$(".main__box__contents__two__form").addClass("inp_error");
		result = false;
	}

	// パスワード
  if(password == ""){
		$("#password_error").html(" パスワードを入力してください");
		$(".main__box__contents__three__form").addClass("inp_error");
		result = false;
	}else if(password.length < 7 || password.length > 128 ){
		$("#password_error").html(" パスワードは7文字以上 128文字以下で入力してください。");
		$("#.main__box__contents__three__form").addClass("inp_error");
		result = false;
	}

	// name sei kanzi
	if(nameseikanzi == ""){
		$(".main__box__contents__five__name-error__family").html("姓を入力してください");
		$(".main__box__contents__five__form__family").addClass("inp_error");
		result = false;
	}

	//name mei kanzi
	if(namemeikanzi == ""){
		$(".main__box__contents__five__name-error__last").html("名を入力してください");
		$(".main__box__contents__five__form__last").addClass("inp_error");
		result = false;
	}

	// name sei kana
	if(nameseikana == ""){
		$(".main__box__contents__six__name-error__j-family").html("姓カナを入力してください");
		$(".main__box__contents__six__form__j-family").addClass("inp_error");
		result = false;
	}

	// name mei kana
	if(namemeikana == ""){
		$(".main__box__contents__six__name-error__j-last").html("名カナを入力してください");
		$(".main__box__contents__six__form__j-last").addClass("inp_error");
		result = false;
	}

	//b_year, b_month, b_day
	if(b_year == "" && b_month == "" && b_day == ""){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__seven__middle__year-box").addClass("inp_error");
		$(".main__box__contents__seven__middle__month-box").addClass("inp_error");
		$(".main__box__contents__seven__middle__date-box").addClass("inp_error");
		result = false;
	}

	if(b_year == "" ){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__seven__middle__year-box").addClass("inp_error");
		result = false;
	}

	if(b_month == "" ){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__seven__middle__month-box").addClass("inp_error");
		result = false;
	}

	if( b_day == ""){
		$("#b_year_error").html("生年月日を入力してください");
		$(".main__box__contents__seven__middle__date-box").addClass("inp_error");
		result = false;
	}
  
	return result;
}