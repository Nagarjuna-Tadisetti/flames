	function doAnotherFlames(){
			$('#firstName').val('');
			$('#secondName').val('');
			$('.first-name span').remove();
			$('.second-name span').remove();
			$('.flames-output').html('&nbsp;');
			$('.names-form').show();
			$('.flames-div').hide();
			$('.flames-letters span').css('color','white');
		}
		function doFlames(){
			var firstName = $('#firstName').val().toUpperCase();
			var secondName = $('#secondName').val().toUpperCase();
			if(firstName.length==0||secondName.length==0)
				return;
			var firstCount = 0 ;
			var secondCount = 0;
			$('.names-form').hide();
			$('.flames-div').show();
			
			firstCount = flameCount(firstName, secondName);
			secondCount = flameCount(secondName, firstName);
			
			showFlameName (firstName, secondName, 'first-name'  );
			showFlameName (secondName, firstName, 'second-name'  );
			$('.hide-char').animate({opacity:.4},1000);
			var flameTotal = firstCount+secondCount;
			showResult(flameTotal, 0, 0);
		}
		
		function showResult(flameCount, index, prevPos){
			if ( flameCount == 0){
				var finalResult = ["FRIENDS","LOVERS","AFFECTION","MARRIAGE","ENEMIES","SIBILINGS"];
				$('.flames-output').html(finalResult[prevPos]);
				return;
			}
			setTimeout(function() {
				$('.flames-'+prevPos).css('color','white');
				$('.flames-'+index).css('color','#017795');
				prevPos = index;
				index = ( index + 1 ) % 6;
				flameCount--;
				showResult(flameCount,index,prevPos)
			},200);
		}
		
		function flameCount(firstName, secondName)
		{
			var firstCount = 0;
			for ( var i = 0 ; i < firstName.length ; i++ )
			{
				var tempChar = firstName[i];
				if ( secondName.indexOf(tempChar) > -1 )
				{
					firstCount++;
				}
			}
			return firstName.length-firstCount;
		}
		
		function showFlameName (firstName, secondName, className  )
		{
			var firstCount = 0;
			for ( var i = 0 ; i < firstName.length ; i++ )
			{
				var tempChar = firstName[i];
				if ( secondName.indexOf(tempChar) > -1 )
				{
					$('.'+className+" .name").append('<span class="hide-char">'+tempChar+'</span>');
				}
				else 
				{
					$('.'+className+" .name").append('<span class="show-char">'+tempChar+'</span>');
				}
			}
		}