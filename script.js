var os = 0;			//keeps track of offset 
var html = '';		//appends to existing table in index.html
var curResponse;	//so response can be viewed by multiple functions
var audio;			//one audio running at a time

//when user hits enter after typing in search
$("#mainSearch").keypress(function(e) {
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if (keycode == '13') {
		e.preventDefault();
		searchSong();
	}
});

function searchSong(offset){

	if (offset === undefined) {
		offset = 0;
	}	

	var searchingFor = document.getElementById("mainSearch").value;
	var q = searchingFor.replace(/\s/g, '+');
	var l = 10;
	var o = offset;

	
	$.ajax({
		url: 'https://api.spotify.com/v1/search',
		data: {
			q: q,
			type: 'track',
			limit: l,
			offset: o
		},

		'success': function(response) {
			console.log(response);
			curResponse = response;

			//items = response;
			console.log(response['tracks']['items']);
			
			var arrayOfTracks = response['tracks']['items'];
			html = '';

			//adds to html
			for (var i = 0; i < arrayOfTracks.length; i++) {
				var url = arrayOfTracks[i]['preview_url'];

				html += '<tr class="song" id="song' + i + '" onclick="playMusic(\'' + url + '\');"><td>'
					+ arrayOfTracks[i]['name'] +'</td><td>';

				for (var j = 0; j < arrayOfTracks[i]['artists'].length; j++) {
					html += arrayOfTracks[i]['artists'][j]['name'];
					
					//in the case that there is more than one artist
					if (j < arrayOfTracks[i]['artists'].length - 1){
						html += ', ';
					}
					else {
						html += '</td>';
						break;
					}
				}

				html += '<td>' + arrayOfTracks[i]['album']['name'] + '</td></tr>';
			}

			//closes table
			html +='</table>';

			//appends html to table tagged #results 
			$('#results').empty();
			$('#results').append(html);

			openDrawer();

			if (curResponse['tracks']['next']) {
				showNext();
			}
		}

	});

};

function searchNext(){

	html = '';
	if (curResponse['tracks']['next']) {
		os += 10;
		searchSong(os);
	}
};

function openDrawer(){
	$('#results').slideDown('fast');
	$('#headers').slideDown('fast');
};

function showNext(){
	$('#nextButton').show();
}

function playMusic(prevURL){

	if(!audio){
		audio = new Audio(prevURL);
		audio.play();
	}

	else if(!audio.paused && audio.currentSrc == prevURL){
		audio.pause();
	}

	else if(audio.paused && audio.currentSrc == prevURL){
		audio.play();
	}

	else {
		audio.pause();
		audio = new Audio(prevURL);
		audio.play();
	}

};
