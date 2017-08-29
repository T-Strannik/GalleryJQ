(function($){ 
	var arr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];
	console.log(arr.length-6);
	var i = 0;
	$('.next').click(function(e){
		e.preventDefault();
		i = (i>=arr.length-1)?0:++i;//если i>=количества элементов массива-1, то переменная i записываеся 0, иначе увеличиваем на еденицу
		/*i=0;
		i=i++;//0 - в первый проход мы получим ноль, а во второй 1, в третий 2 и т.д
		i=++i;//1 - в первый проход мы сразу получаем 1, во второй 2, в третий 3 и т.д*/
		$('.img').fadeOut(500, function(){
			//вызывается после выполнения анимации. указывается последним параметром в toggle, animate, slide, up, down, out...
			$('.img').attr('src', 'images2/'+arr[i]);//attr-заменяем имя атибута, в первом параметре что меняем, во втором параметре на что меняем
			$('.img').fadeIn(500);
		});
	});

	
	$('.prev').click(function(e){
		e.preventDefault();
		
		// if(i<=0){
		// 	i = 6;
		// }
		// else{
		// 	i = --i;
		// }

		i = (i<=arr.length-7)?6:--i;

		$('.img').fadeOut(500, function(){
			$('.img').attr('src', 'images2/'+arr[i]);
			$('.img').fadeIn(500);
		});
	});

	//document.write('Картинка №: '+arr[i]);


})(jQuery)