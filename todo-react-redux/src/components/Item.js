import React from 'react'
import PropTypes from 'prop-types'

const Item = ({onClick, completed, text}) => {
    return (
        <div>
            <li className={'item'}
                onClick={onClick}
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                {text}
            </li>
        </div>
    )
}
Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Item