const newman = require('newman');
 
newman.run({
    collection: require('./Collection/collection.json'),
    //collection: 'https://api.postman.com/collections/25361243-e69ad689-ff2a-4e12-b02c-b467fb287d68?access_key=PMAT-01GQWMH7AR09DP3MY0S5MNJ19G'
    // environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});