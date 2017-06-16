import React from 'react';

const RandomArticle = () => (
  <button
    className="button"
    onClick={() => window.open("https://en.wikipedia.org/wiki/Special:Random")}
  >Random Article</button>
);

export default RandomArticle;