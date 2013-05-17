$('#loginButton').on('click', function(){
	$.mobile.changePage($('#buttonListPage'));
});

$('.index').on('pageinit', function(){
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