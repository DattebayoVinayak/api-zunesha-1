import * as cheerio from 'cheerio';

export const extractGenres = (html) => {
  const $ = cheerio.load(html);

  const response = {
    genres: [],
  };

  const $genres = $('.sb-genre-list');

  $($genres)
    .find('li')
    .each((i, el) => {
      const genre = $(el).find('a').attr('title').toLocaleLowerCase();
      response.genres.push(genre);
    });
  return response;
};
