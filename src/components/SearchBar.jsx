import React from 'react'

function SearchBar({ value, onChange, onSubmit, placeholder = "Search..." }) {
  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
      <button className="button" type="submit">Search</button>
    </form>
  )
}

export default SearchBar