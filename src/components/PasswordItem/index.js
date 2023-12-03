import './index.css'

const PasswordItem = props => {
  const {item, isChecked, onDeleteItem} = props
  const {id, website, username, password} = item

  const onDelete = () => {
    onDeleteItem(id)
  }

  return (
    <li className="listitem">
      <p className="profile">{website.slice(0, 1)}</p>
      <div className="details-container">
        <p className="details">{website}</p>
        <p className="details">{username}</p>
        {isChecked ? (
          <p className="details">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars"
          />
        )}
      </div>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default PasswordItem
