# CodeIgniter

I guess the start of a new year is always a reason to do some updates. First off, again a new design, I'm already at the twelfth version. This time I delegated some of the content to be saved on SoundCloud, so only the blog and the gallery remain. I translated most of my blog and while I was at it, converted it to Markdown (previously I stored HTML in the database). This will make it easier to edit the contents of the blog, I don't have to write HTML or use a WYWIWYG editor to generate the HTML. Instead I can use an inline editor, writing the Markdown code myself. In the appendix you can find some of this Markdown syntax that I'm using.

The same Markdown syntax is used on Github, with some additions. Like 'YT' followed by a space and the Youtube ID of a movie, to embed it. This way, every Youtube movie will have the same predefined dimensions. I still have to do the same thing to images. Some other attributes I would like to add are `<sup></sup>`, `<sub></sub>` and.`<small></small>` Also I would like to add a table of contents. Textile uses `TOC` to automatically generate a table of contents, based on the headings in the blog post. I edited the class with the addition of Youtube, but of course it will be better if I write my own extension separately.


> I got the table of contents working sooner than I thought, I just have to place the `TOC` placeholder whereever I want the table of contents to reside and it will find all headings in the article and place it accordingly, including hierarchy. Surprisingly, the other tags I wanted to parse are a lot more difficult then they seemed, I decided to drop this functionality, because the HTML tags are also supported.


With this conversion I got rid of a lot of old blogs. There were so many blogs with "finally again an update" or "finally I got a new phone", so I tried to revise them all, hoping to preserve some of their nostalgic purposes. Because there were so many, the translation can be off sometimes. It's a lot harder to translate pieces of text than to write something new. The structure of sentences may be the same as in Dutch here and there. I merged two blogs and chances are that I will merge some more. At this moment there's only one blog left to be translated, the one about my journey through Europe, which is quite a long story. I guess I'll keep the Dutch version somewhere too.

Lately, I've been using CodeIgniter as a framework for my website. I don't have a lot of time, so my MVC is discontinued. Because the content is moved to other media, my MVC became overkill. Same goes for CodeIgniter of course, but I use it as a framework to host multiple websites on a single codebase. I put some other libraries in there, like GeSHi (for syntax highlighting); GetID3v (to interpret id3v tags within mp3 files, like title, artist, genre and bpm); Exif (to interpret EXIF data from images, like the camera, shutter speed, ISO settings and so on); PHPMailer (for sending e-mail with a simplified interface), Parsedown (to parse the content written in Markdown) and PHPExcel (to read the content of Excel files into an array). These libraries are instantly avavilable for all other websites hosted on this codebase. I began to use this framework at work too, so it's nice for the knowledge to be transfered back and forth.

I've been busy producing music as well, at first a couple of albums to train myself and I believe I can say that I made quite some progress. I started with FastTracker many years ago, then I tried Fruity Loops for a short while. Then for quite some time I used Reason and now I've switched to Ableton. After almost 20 years of producing, I finally released some tracks that I'm proud of. You can listen to these tracks on the album 'Torii'.

You can use the menu on the left to browse my blogs, galleries and to listen to my music. If you click a track, this won't interfere with browsing the rest of the website. A player will show op at the top-right of the window. Of course, the browsing won't interfere with playing tracks either.

[x] I still have to make internal links work, using the hashtag, also I still have to modify the SoundCloud interface to play the next song in the list automatically.


> Finally the internal links work, but I do have to have the syntax of them exactly right. There's still a bug when someone uses the back button though, which is a bit strange, because when the page is refreshed after that, it does work. Also, it does work when the link is typed in the address bar. I guess I still have to put some work in that. I also added an edit button underneath my blogs, with of course the functionality behind it.
  I decided to drop the dedicated edit page for my blog, the code got bloated with a lot of Javascript when essentially the only upside was a preview button. I now have a more generic solution, that gives me the ability to edit all tables in the database, including the adding (which previously didn't work) and editing of blogs. It's now also possible to add new SoundCloud playlists in the menu.
  The browser's back button is now working, an user can travel his history and the content on the page will change accordingly. However, the menu will remain its current state. I don't know if I'm going to solve that problem, because chances are that other problems will appear. With this update I think I can say that the twelfth version is finished!


---

## Appendix

The complete Markdown syntax can be found on [Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). There are three ways to make a text bold, but because my preference is determined, I will only put that one in my summary:

### Headers

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

### Emphasis

```markdown
*italic*
**bold**
~~strikethrough~~
```

### Lists

In this example, leading and trailing spaces are shown with with dots: ⋅

```markdown
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.
```

To have a line break without a paragraph, you will need to use two trailing spaces.

### Links

There are two ways to create links.

```markdown
[I'm an inline-style link](https://www.google.com)
[I'm an inline-style link with title](https://www.google.com "Google's Homepage")
```

URLs and URLs in angle brackets will automatically get turned into links. `https://www.example.com`.

### Images

```markdown
![alt text](https://www.example.com/image.png "Logo Title Text 1")
```

### Code blocks

```
Inline `code` has `back-ticks around` it.
```

Blocks of code are either fenced by lines with three back-ticks, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```markdown
``javascript
var s = "JavaScript syntax highlighting";
alert(s);
``
```

```markdown
``python
s = "Python syntax highlighting"
print s
``
```

```markdown
``
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
``
```

To display the codeblocks in this article without parsing, I had to use two backticks where normally three are needed.

### Tables

Colons can be used to align columns.

```markdown
| Tables | Are | Cool |
| ------------- |:-------------:| -----:|
| col 3 is | right-aligned | $1600 |
| col 2 is | centered | $12 |
| zebra stripes | are neat | $1 |
```

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

### Blockquotes

```markdown
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
```

### Horizontal Rule

Three or more `---`

### Youtube videos

```markdown
YT YOUTUBE_VIDEO_ID_HERE
```
