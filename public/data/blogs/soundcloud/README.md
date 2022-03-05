# SoundCloud

I've written a nice audio module for my website, it has ID3v1 integration, when I uploaded a song, it automatically read the ID3 data into the database through a cronjob. Still, I needed to upload an MP3 file as well as an OGG file, to make it work cross browser, I meant to make something for that too, so that I only needed to upload an MP3 file and an OGG file was automatically created. I never came to this point, not fully without considering the fact that first converting to MP3 and then converting the MP3 to OGG always means a loss of quality. I guess FFmpeg would have been the right tool to do this.

The client side part of the module was never fully operational either, you could click on a song to play it, but I wanted to embed a playlist and when you clicked a second song, it should have been automatically added to this playlist. This involved four things:

1. The second song is added, when the first one is still playing;
2. If the first one stopped playing, the second one should start automatically when clicked;
3. If the same song is clicked twice, it has to be added only the first time;
4. A song is identified by a hashtag, so if a specific URL is shared, say with [#tracks_whim](https://swimmer.zone/#tracks_whim), then the track Whim will automatically start to play, when this URL is visited.

I had some trouble making all four of these things to work together.

With SoundCloud gaining market share and most of my tracks already there, I decided to embed their player, I can still skip through the albums as I used to, I don't have to convert to OGG and I only have to upload my tracks once. I can review all statistics on one platform and the tracks are automatically shared on Facebook.

I'm planning to use the API, I guess it would look a lot better and maybe I can reinstate the hashtags. And I guess I won't develop the yDisplayer any further.

Update: I got the API working with [SoundCloud Custom Plugin](https://github.com/soundcloud/soundcloud-custom-player).
