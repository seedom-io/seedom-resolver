const logoUrlTemplate = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/causes/logos/{image}.png';
const badgeUrlTemplate = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/causes/badges/{image}.png';
const jsonUrlTemplate = 'https://raw.githubusercontent.com/seedom-io/seedom-assets/master/causes/{cause}.json';

module.exports.getLogoUrl = (image) => logoUrlTemplate.replace('{image}', image);
module.exports.getBadgeUrl = (image) => badgeUrlTemplate.replace('{image}', image);
module.exports.getJsonUrl = (cause) => jsonUrlTemplate.replace('{cause}', cause);
