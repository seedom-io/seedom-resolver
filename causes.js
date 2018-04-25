const imageUrlTemplate = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/causes/{cause}.png';
const jsonUrlTemplate = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/causes/{cause}.json';

module.exports.getImageUrl = (cause) => imageUrlTemplate.replace('{cause}', cause);
module.exports.getJsonUrl = (cause) => jsonUrlTemplate.replace('{cause}', cause);
