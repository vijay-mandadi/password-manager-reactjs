import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class Passwords extends Component {
  state = {
    passwordList: [],
    isChecked: false,
    website: '',
    username: '',
    password: '',
    search: '',
  }

  onDeleteItem = id => {
    const {passwordList} = this.state
    const filtered = passwordList.filter(each => each.id !== id)
    this.setState({passwordList: filtered})
  }

  search = event => this.setState({search: event.target.value})

  onChangeCheckbox = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  submitDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const obj = {
      id: v4(),
      website,
      username,
      password,
    }

    this.setState(prev => ({
      passwordList: [...prev.passwordList, obj],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsite = event => this.setState({website: event.target.value})

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  render() {
    const {
      passwordList,
      isChecked,
      website,
      username,
      password,
      search,
    } = this.state
    const filteredList = passwordList.filter(each =>
      each.website.toLowerCase().includes(search.toLowerCase()),
    )
    const isZero = filteredList.length === 0
    const count = filteredList.length
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="card-1">
          <form className="form-container" onSubmit={this.submitDetails}>
            <h1 className="form-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <input
                type="text"
                value={website}
                className="input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website"
              />
              <input
                type="text"
                value={username}
                className="input"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website"
              />
              <input
                type="password"
                value={password}
                className="input"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
              />
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager"
          />
        </div>
        <div className="card-2">
          <div className="top-container">
            <div className="count-container">
              <h1 className="form-heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.search}
              />
            </div>
          </div>
          <hr className="line" />
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              onChange={this.onChangeCheckbox}
              id="checkbox"
            />
            <label htmlFor="checkbox" className="show-passwords">
              Show Passwords
            </label>
          </div>
          {isZero ? (
            <div className="nopasswords-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords"
              />
              <p className="show-passwords">No Passwords</p>
            </div>
          ) : (
            <ul className="list-container">
              {filteredList.map(each => (
                <PasswordItem
                  onDeleteItem={this.onDeleteItem}
                  key={each.id}
                  isChecked={isChecked}
                  item={each}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Passwords
