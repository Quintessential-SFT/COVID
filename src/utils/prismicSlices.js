export function mapCardSectionPrismicItem(items) {
  return items && items.map(item => (
      {
        title: item && item.card_title,
        link: item && item.card_url && item.card_url.url,
        description: item && item.card_description,
        source: item && item.card_source,
        image: item && item.card_image && item.card_image.url,
      }
  ));
}
