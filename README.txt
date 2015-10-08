===README===

LAUREN TOM
LMT2172
COMS W4170: HOMEWORK 1, PART 2: SPOTIFY SEARCH

==TO RUN:==
No dependencies to be downloaded. Type in to the search bar and hit enter or click on the arrow to send in the search query. The first ten results will show up in the drawer below the search bar, searched by track. To play a song, the user clicks on it. If a song is playing, the user can either click on another song (and the previously playing song will pause so the new song can play) or click on the song again (so there will be silence). To retrieve the next ten results, the user clicks the button on the bottom left corner that says "next."


==MY PROCESS:==
I wanted to create a very simple and clean user interface. The large search bar draws the attention and is easy to use: clicking the arrow or hitting ENTER both work to send in a search query. This experience was the first time I've ever actually used HTML, CSS, and JavaScript, so it has been a huge learning process. With that being said, I was unable to include a lot of the features I would have liked to in the time allotted. For example, I struggled with showing the song currently playing. I wanted to make the font of the current song bold, but could only figure out how to bold the entire table. In addition, I wanted to figure out a way to use the arrow keys to go through different pages of results rather than making the user drag the mouse all the way to the lower leftmost corner of the screen. I would have also like to be able to have the user search for artists/albums/playlists, but I was unable to (maybe in 2.0!).

Since the design is very minimal, the chance of error is slim, but one error prevention I incorporated was I made sure the "next" button was hidden 1) before the user sent a query and 2) if there are less than 10 results. I also kept the interface very colloquial, as the search bar asks "what do you want to hear?" rather than giving any technical instructions. 