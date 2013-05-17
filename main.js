$('#loginButton').on('click', function(){
	$.mobile.changePage($('#buttonListPage'));
});

$('.index').on('pageinit', function(){
	$('<li><a href="#remoteData" data-role="button" id="viewRemoteDataPage">Remote Data Page</a></li>').appendTo('#buttonList');
	$('<li data-role="list-divider">View Saved Buttons by Theme</li>').appendTo('#buttonList');
	$('<li><a href="#" data-role="button" id="themeA">A themed Buttons</a></li>').appendTo('#buttonList');
	$('<li><a href="#" data-role="button" id="themeB">B themed Buttons</a></li>').appendTo('#buttonList');
	$('<li><a href="#" data-role="button" id="themeC">C themed Buttons</a></li>').appendTo('#buttonList');
	$('<li><a href="#" data-role="button" id="themeD">D themed Buttons</a></li>').appendTo('#buttonList');
	$('<li><a href="#" data-role="button" id="themeE">E themed Buttons</a></li>').appendTo('#buttonList');
		$('#buttonList').listview('refresh');
});	

$('#createButton').on('click', function(){
	$.mobile.changePage($('#main'));
});

$('#registrationButton').on('click', function(){
	$('#loginContent').empty();
		$('<a href="#main" id="login" data-role="button">Login</a>').appendTo('#loginContent');
});

$('#accountSettings').on('pageinit', function(){
	$('<li id="currentUsername">UserName: TestName007</li>'+
	'<br />'+
	'<li id="currentPassword">Password: testpassword</li>').appendTo('#userData');
	
	$('.ui-btn-right').on('click', function(){
		$('#currentUsername').empty();
		$('#currentPassword').empty();
		$('<label for="username">Username:</label>' +
     				'<input data-clear-btn="true" name="username" id="username" value="TestName007">').appendTo('#currentUsername');
		$('<label for="password">Password:</label>' +
     				'<input data-clear-btn="true" name="password" id="password" value="testPassword">').appendTo('#currentPassword');		
	});
});

$('#main').on('pageinit', function(){
	$('#availableAccounts').on('click', function(){
		$('.main').empty();
		$('<p>List of your current Accounts</p>').appendTo('.main');
});
});


	var themeArray = ['a','b','c','d','e'];
	var i = 0;

		$('#appTheme').click(function(){
         i++
         if(i>=themeArray.length)
              i=0;
         return $( "#appTheme" ).buttonMarkup({theme: themeArray[i] });;   
      })
$('#buttonIcon').change(function() {
    var myswitch = $(this);
    var show     = myswitch[0].selectedIndex == 1 ? true:false;
    if (this.value == "off"){
    	$('#selectedIcon').empty();
    	$('#iconExample').show();
    }
    $('#showIcons').toggle(show);
});

function reply_click(clicked_id)
{
    var icon = (clicked_id);
    $('#showIcons').hide();
    $('#iconExample').hide();
    $('#selectedIcon').empty();
    $('<p>You selected the <b>' + icon + '</b> icon.</p>').appendTo('#selectedIcon');
}

$('#submit').on('click', function(){
event.preventDefault();
$.mobile.changePage($('#buttonListPage'));
});

$('#logOut').on('click', function(){
	alert('You have been Logged Out.');
	$.mobile.changePage($('#login'));
});



$( '#remoteData' ).on('pageinit', function(){
		$( '#jsonButton' ).on( 'click', function () {
		$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.json',
            type: 'GET',
            dataType: 'json',
            success:function ( result ) {
	//console.log(result);
                for ( var i = 0, len = result.armors.length; i < len; i++ ) {
                    var item = result.armors[i];
	console.log(item);
                    $( ' ' +
						'<div class="contentJSON">' +
							'<ul>' +
								'<li>' + '<b>' + item.armorName[0] + " " + item.armorName[1] + '</b>' + '</li>' +
								'<li>' + item.selectColor[0] + " " + item.selectColor[1] + '</li>' +
								'<li>' + item.repaired[0]	+ " " + item.repaired[1] + '</li>' +
							'</ul>' +
						'</div>'
					).appendTo( '#viewData' );
					
                }
            }
        });
		return false;
    });

	$( '#xmlButton' ).on( 'click', function() {
		$('#viewData').empty();
			$.ajax( {
				url: 'xhr/data.xml',
				type: 'GET',
				dataType: 'xml',
				success:function ( result ) {
				//console.log(result);
				$(result).find('item').each(function(){
					var armorName = $(this).find('armorName').text();
                    var selectColor = $(this).find('selectColor').text();
                    var repaired = $(this).find('repaired').text();
                        $(' '+
                            '<div class="contentXML">' +
                                '<ul>' +
                                    '<li><b>Armor Name: ' + armorName + '</b></li>' +
                                    '<li> Color: ' + selectColor + '</li>' +
                                    '<li> Repaired: ' + repaired + '</li>' +
                                '</ul>' +
                            '</div>'
						).appendTo('#viewData');
						
					});
				}
			});
			return false;
    });


$( '#csvButton' ).on( 'click', function() {
$('#viewData').empty();
        $.ajax( {
            url: 'xhr/data.csv',
            type: 'GET',
            dataType: 'text',
            success:function ( result ) {
			//console.log(result);
			var lines = result.split("\n");
			//console.log(lines);
			var dataRow = lines[0];
			var dataCol = dataRow.split(",");
			for (var lineNum = 1; lineNum < lines.length; lineNum++) {
				var row = lines[lineNum];
				var columns = row.split(",");
				//console.log(columns);
			$(''+
		'<div class="contentCSV">'+
			'<ul>' +
				'<li><b>' + dataCol[0] + " " + columns[0] + '</b></li>' +
				'<li>'+ dataCol[1] + " " + columns[1] + '</li>' +
				'<li>'+ dataCol[2] + " " + columns[2] + '</li>' +
				'<li>'+ dataCol[3] + " " + columns[3] + '</li>' +
			'</ul>' +
		'</div>'
				).appendTo('#viewData');
				
		}
            }
        });
    });
return false;
});

