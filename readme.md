# A grid system for building responsive emails 

Responsive emails are a pain in the ass, but that could be different. With Grunt and Sass to the rescue, it can even be a pleasure.

Grido is primarily a grid system written in Sass, so it comes with some grunt tasks to compile and watch it. If you just need a ready to use, standalone css file, just download `css/styles.css` and use it in your project.

### Features:

- An unbreakable responsive grid (see client support below).
- A base template to copy/paste your layouts from.
- Scss stylesheets with [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass).
- Styles inlining with [grunt-premailer](https://github.com/dwightjack/grunt-premailer).

### Client support:

| Client           | Supports  |
|------------------|:---------:|
| Apple mail iOS   |     ✓     |
| Apple mail OSX   |     ✓     |
| Outlook 2003     |     ~     |
| Outlook 2007     |     ✓     |
| Outlook 2010     |     ✓     |
| Outlook 2011     |     ✓     |
| Outlook 2013     |     ✓     |
| Thunderbird      |     ✓     |
| AOL Mail         |     ✓     |
| Gmail            |     ✓     |
| Outlook.com      |     ✓     |
| Yahoo! Mail      |     ✓     |
| Android 2.3      |     ✓     |
| Android 4.2      |     ✓     |
| Windows phone 8  |     ✓     |
| Gmail App        |     ✗     |

( __~__ _means that layout is working but with visual bugs._)

### Further ressources:

- For grunt haters, inline styles with [Campaign monitor inliner](http://inliner.cm/).
- You have to test your email. Consider using [Litmus](https://litmus.com/).
- Best club of the galaxy is [the Cantina](http://www.starwars.com/databank/mos-eisley-cantina).