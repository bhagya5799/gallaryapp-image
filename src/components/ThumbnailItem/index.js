// Write your code here.
const ThumbnailItem = props => {
  const {details, clickImageItem} = props
  const {thumbnailUrl, imageUrl, thumbnailAltText, imageAltText} = details
  const clickThumbnailItem = () => {
    clickImageItem(imageUrl, imageAltText)
  }
  return (
    <li>
      <button>
        <img
          src={thumbnailUrl}
          onClick={clickThumbnailItem}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
