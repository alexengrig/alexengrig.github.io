console.debug('main.js running');
fetch('https://github-contributions-api.now.sh/v1/alexengrig')
  .then(response => response.json())
  .then(json => json.contributions)
  .then(contributions => {
    const now = new Date().toISOString().substring(0, 10);
    const contribution = contributions.find(contribution => contribution.date === now);
    console.debug('contribution', contribution);
    return contribution.color;
  })
  .then(color => document.body.style.background = color)
  .catch(e => console.error(e));
