[![Netlify Status](https://api.netlify.com/api/v1/badges/0cb96c66-4baa-4eb2-bc20-ae8616ac584d/deploy-status)](https://app.netlify.com/sites/fangallery/deploys)
![Build production bundles (using cache)](<https://github.com/avimehenwal/fan-gallery/workflows/Build%20production%20bundles%20(using%20cache)/badge.svg>)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# :neckbeard: fan-gallery

Personal showcase of my favourite anime collection

## :sparkles: Live [Link][url]

## :sparkles: Live [Link Next][next]

[url]: https://fangallery.netlify.app/
[next]: https://avimehenwal.github.io/fan-gallery/

## :movie_camera: Demo

Click on image below to play demo video:

[![Project demo video](http://img.youtube.com/vi/j6mWyxlNC-Q/0.jpg)](https://youtu.be/j6mWyxlNC-Q)

Images:

![Webpack Analyze](/demo/analyze.png)
![Demo homepage](/demo/homescreen.png)
![Dashboard View](/demo/dashboard.png)
![Google Tag Manager](/demo/Screenshot_20200410_004900.png)

---

- What is an [anime]?
  - Its a form of art
- What is a [manga]?
  - Japanese name for a comics, [zine], [webtoons], fanzine
- [Types of animations?](https://youtu.be/NZbrdCAsYqU)

[manga]: https://en.wikipedia.org/wiki/Manga
[anime]: https://en.wikipedia.org/wiki/Anime
[webtoon]: https://en.wikipedia.org/wiki/Webtoon
[zine]: https://en.wikipedia.org/wiki/Zine

## :ledger: ToDO

- [x] Add anime list
- [x] Add manga details
- [x] Add google analytics
- [x] Card and image skeleton placeholders for upcoming content
- https://www.gamevix.com/games/browse/best-rated
- [x] Use @nuxt/Components
- [x] Use [chart.js](https://github.com/chartjs/Chart.js/releases/tag/v2.9.3)
  - No need anymore to manually import them in the script section
- [ ] Use @nuxt/Content
  - write in a `content/` directory
- [ ] Add character details
- [ ] Add data transform Mixin
- [ ] Pass information from index page to description page using URL

## :closed_book: Learning

- Image lazy loading
- force client side rendering
- Google blocks CORS requests
  - Who can access what resource from whome

```
# Update yarn packages
yarn upgrade nuxt@^2.13.3
yarn outdated
```

## :beetle: Issues

- https://stackoverflow.com/questions/5881139/how-to-block-iframe-call
- https://stackoverflow.com/questions/44297803/what-is-the-role-of-the-package-lock-json

### :tractor: Parsing data from google sheets

- The JSON retrieves data from each cell starting from the top-left most and then pushes the data one by one into an array.
- [Find the formula for all index belonging to a certain table column](https://medium.com/dali-lab/google-sheets-and-json-easy-backend-e29e9ef3df2)
- [self authored npm package vue-gsheets](https://www.npmjs.com/package/vue-gsheets)

```
table_header = 1
table_total_records = 5 (4 + 1 header)
table_total_columns = 6
items_1 = 1 + [0..] table_total_columns
1, 7, 13, 19
```

## :boat: Resources

- https://www.grapecity.com/blogs/adding-excel-import-and-export-to-your-vue-app
- https://stackoverflow.com/questions/44312494/how-to-create-per-workspace-snippets-in-vscode

## :monkey: Project Links

:link: [Link to release](https://github.com/avimehenwal/fan-gallery/releases)

:link: [Link to changelog](./CHANGELOG.md)

:star: [Suggest improvements or share ideas or start a conversation][issue]

[issue]: https://github.com/avimehenwal/fan-gallery/issues

## :herb: License

MIT

---

## TODO

- [ ] use webP images

```bash
for file in *
do
  cwebp -progress -q 80 "$file" -o "$file.webp"
done

for file in *; do cwebp -progress "$file" -o "./webp/$file.webp"; done

```

#### :pray: Get in touch with me

I am looking for Jobs ... :sunglasses:

- [Github](https://github.com/avimehenwal/)
- [My Website](https://avimehenwal.in)
- [Twitter Handle](https://twitter.com/avimehenwal)
- [LinkedIn](https://in.linkedin.com/in/avimehenwal)
- [Stackoverflow](https://stackoverflow.com/users/1915935/avi-mehenwal)

<a href="https://www.buymeacoffee.com/F1j07cV" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

Spread Love :hearts: and not :no_entry_sign: hatred [![Twitter Follow](https://img.shields.io/twitter/follow/avimehenwal.svg?style=social)](https://twitter.com/avimehenwal)

![Full page dashboard view](/demo/fill-page-stats.png)
![Full Home page](/demo/full-home-page.png)
