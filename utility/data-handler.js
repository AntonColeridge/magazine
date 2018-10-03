const fs = require('fs');


// const rawTextData = fs.readFileSync('..path_to_data.json');

// const data = JSON.parse(rawTextData);

const update = (data) => {
    fs.writeFileSync('../magazine/utility/data.json', JSON.stringify(data));
};
const reset = () => {
    fs.writeFileSync('../magazine/utility/data.json', '');
}; const show = () => {
    // console.log(
    JSON.parse(
        fs.readFileSync('../magazine/utility/data.json', 'utf8')
    );

    const fileCOntents = JSON.parse(
        fs.readFileSync('../magazine/utility/data.json')
    );



    const dbReport = fileCOntents.map(element => {
        element.password = '********';
        return element;
    });
    return JSON.stringify(dbReport);
};

module.exports = { reset, update, show };