export function mapWHORssItem(item) {
  return {
    id: item && Array.isArray(item.guid) && item.guid[0] && item.guid[0]._,
    link: item && Array.isArray(item.link) && item.link[0],
    title: item && Array.isArray(item.title) && item.title[0],
    description: item && Array.isArray(item.description) && item.description[0],
    publishDate: item && Array.isArray(item.pubDate) && item.pubDate[0],
    content: item && Array.isArray(item['a10:content']) && item['a10:content']
  }
}