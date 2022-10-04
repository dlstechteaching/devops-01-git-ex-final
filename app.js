var express = require('express');
var app = express();
var path = require('path');
var hbs = require('hbs');
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const date = new Date();
const currentMonth = monthNames[date.getMonth()];

app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

app.get('/', function (req, res) {
	res.render('./views/Home', {
		title: currentMonth,
		cards: [
			{
				title: 'Our Changing Planet',
				author: 'Kurt Wagner',
				desc: 'Visit ten places on our planet that are undergoing the biggest changes today',
				imageUrl: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg'
			},
			{
				title: 'Our Changing Planet',
				author: 'Kurt Wagner',
				desc: 'Visit ten places on our planet that are undergoing the biggest changes today',
				imageUrl: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/3.jpg'
			},
			{
				title: 'Our Changing Planet',
				author: 'Kurt Wagner',
				desc: 'Visit ten places on our planet that are undergoing the biggest changes today',
				imageUrl: 'https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/1.jpg'
			}
		]
	 })
	 
});
app.get('/about', function(req, res){
	let aboutList = [{name:"Independent", description : "One of the characteristics of Agile Methodologies such as Scrum, Kanban or XP is the ability to move PBIs around, taking into account, amongst other criteria, their relative priority. When PBIs are tightly dependent, it might be possible to combine them into a single PBI."},
	{name: "Negotiable", description : "According to Agile methodology, while the PBI lies in the product backlog it can be rewritten or even discarded, depending on business, market, technical or any other type of requirement by team members."},
	{name: "Valuable", description : "The aim of Agile Methodology being to continuously deliver valuable software, the PBI should bring value to the stakeholder.[2]"},
	{name: "Estimable", description : `If a PBI size cannot be estimated, it will never be planned or tasked; thus, it will never become part of an iteration. So, there's actually no point in keeping this kind of PBI in the Product Backlog at all. Most of the time, estimation cannot be executed due to the lack of supporting information either in the story description itself or directly from the Product Owner. (Language note- "Estimable" as 'the capability to be estimated' is an American English definition. The British English definition 'of high esteem' may confuse some readers. Some versions of the model use the reference "Estimate-able" which also is not a defined dictionary entry.)`},
	{name: "Small", description:`Try to keep your PBI sizes to typically a few person-days and at most a few person-weeks (a good rule of thumb is that any single Product Backlog Item does not take more than 50% of an iteration; for example a single item won't take more than 5 days for a 2-week / 10 day sprint). Anything beyond that range should be considered too large to be estimated with a good level of certainty - these large PBIs may be called "Epics", where an Epic will take more than one iteration to deliver and, necessarily, will need to be broken down into smaller PBIs that can fit comfortably within Iterations. There's no problem in starting with epic PBIs, as long as they are broken down when the time to place them in an iteration backlog comes closer. This implements Lean software development's Just In Time analysis concept.`},
	{name:`A PBI should only be considered DONE, among other things, if it was tested successfully. If one cannot test a PBI due to lack of information or access (see "Estimable" above), the PBI should not be considered a good candidate to be part of an iteration Backlog. This is especially true for teams employing TDD - Test Driven Development.`}]

	res.render('./views/About.hbs', {aboutList});
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});