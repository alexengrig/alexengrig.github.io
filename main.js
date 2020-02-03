console.debug('main.js running');
fetch('https://github-contributions-api.now.sh/v1/alexengrig')
  .then(response => response.json())
  .then(json => json.contributions)
  .then(contributions => {
    const now = new Date().toISOString().substring(0, 10);
    return contributions.find(contribution => contribution.date === now);
  })
	.then(contribution => {
		console.debug('contribution', contribution);
    document.body.style.background = contribution.color;
    document.getElementById('info').innerHTML = contribution.count + ' contributions on ' + contribution.date;
	})
  .catch(e => {
    document.getElementById('info').innerHTML = 'Error! ' + e.message;
    console.error(e)
  });
