import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Clearfix } from 'react-bootstrap'

import Thumb from '../thumb/thumb.jsx'

class ThumbList extends Component {
  componentDidMount() {
    const { fetcher, dispatch } = this.props
    dispatch(fetcher())
  }

  render() {
    const { isFetching, items } = this.props
    return (
      <div>
        {items.map((thumb, idx) => {
          if (!(idx%3)) {
            return (<div key={idx}>
              <Clearfix visibleSmBlock visibleMdBlock visibleLgBlock></Clearfix>
              <Thumb
              key={thumb.id}
              {...thumb}
            /></div>)
          } else {
            return (<Thumb
              key={thumb.id}
              {...thumb}
            />)
          }
        })}
      </div>
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