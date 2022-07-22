import PropTypes from "prop-types"

function Checkbox({ type = "checkbox", handleClick }) {

  const style = {
    padding: "2rem",
    border: "none",
    display: "flex",
    flexDirection: "column",
  }

  const checkboxStyle = {
    width: "1rem",
    height: "1rem"
  }
  return (
    <div style={style}>
      <label className="container">Fill Me 1
        <input type={type} id="one" name="checkbox" onClick={handleClick} style={checkboxStyle} />
        <span className="checkmark"></span>
      </label>

      <label className="container">Fill Me 2
        <input type={type} id="two" name="checkbox" onClick={handleClick} style={checkboxStyle} />
        <span className="checkmark"></span>
      </label>

      <label className="container">Fill Me 3
        <input type={type} id="three" name="checkbox" onClick={handleClick} style={checkboxStyle} />
        <span className="checkmark"></span>
      </label>

      <label className="container">Fill Me 4
        <input type={type} id="four" name="checkbox" onClick={handleClick} style={checkboxStyle} />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
}

export default Checkbox