

let s = localStorage.getItem('session_id')

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

let r = getQueryVariable("r")

var session_id_input = document.getElementById('session-id');
session_id_input.value = s

var save_btn = document.getElementById('save-btn');
save_btn.addEventListener("click", myFunction);

function myFunction() {
   localStorage.setItem('session_id', session_id_input.value)
}


if( r == "program")
{
	let program_id = getQueryVariable("program_id")
	window.location.replace("https://register.capturepoint.com/reg_adm/program_view.cfm?s=" + s + "&activity_id=1799&season_id=14132&program_id=" + program_id + "&nextpage=catalog_display_group_view.cfm&return_catalog_display_group_id=1455");
}

//window.location.replace("https://register.capturepoint.com/reg_adm/home.cfm?s=" + s);