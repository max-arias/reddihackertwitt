import _ from 'lodash'

function convertDataForList(data, type) {
  if(!_.isArray(data)) return false;
  let out = [];
  let host = '';

  switch(type) {
    case 'reddit':
      host = 'https://reddit.com';
      out = data.map(item => {
        let newItem = {
          'id': _.get(item, 'data.id', null),
          'title': _.get(item, 'data.title', null),
          'img': _.get(item, 'data.thumbnail', null),
          'img_url': _.get(item, 'data.url', null),
          'url': _.get(item, 'data.permalink', null),
          'host': host
        };
        return newItem;
      });
    break;
    default:
      out = [];
    break;
  }
  
  return out;
}

export { convertDataForList }