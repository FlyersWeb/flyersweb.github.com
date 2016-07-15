import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Row } from 'react-bootstrap'

import Thumb from '../thumb/thumb.jsx'

class ThumbList extends Component {
  componentDidMount() {
    const { fetcher, dispatch } = this.props
    dispatch(fetcher())
  }

  render() {
    const { isFetching, items } = this.props
    return (
      <Row>
        {items.map((thumb, idx) => {
          if (!(idx%3)) {
            return (<div><Row></Row><Thumb
              key={thumb.id}
              {...thumb}
            /></div>)
          } else {
            return (<div><Thumb
              key={thumb.id}
              {...thumb}
            /></div>)
          }
        })}
      </Row>
    )
  }
}

ThumbList.propTypes = {
  fetcher: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    anchor: PropTypes.shape({
      href: PropTypes.string.isRequired
    }).isRequired
  })).isRequired,
}

export default ThumbList