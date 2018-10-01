const fs = require('fs');
const {users} = require('./mock-data');

// const rawTextData = fs.readFileSync('..path_to_data.json');

// const data = JSON.parse(rawTextData);

const update = (data) => {
    fs.writeFileSync('../magazine/utility/data.json', JSON.stringify(data));
};
const reset = () => {
    fs.writeFileSync('../magazine/utility/data.json', '');
};const show = () => {
    console.log(JSON.parse(fs.readFileSync('../magazine/utility/data.json', 'utf8')));
};

module.exports = { reset,update,show};