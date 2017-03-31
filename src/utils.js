import _ from 'lodash'
import moment from 'moment'

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
          'host': host,
          'date_created': moment.unix(_.get(item, 'data.created', null)).toNow()
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