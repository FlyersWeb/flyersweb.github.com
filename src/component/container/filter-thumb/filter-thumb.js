import { connect } from 'react-redux'
import ThumbList from '../../presentational/thumb-list/thumb-list.jsx'

const mapStateToProps = (state, ownProps) => {
  switch(ownProps.filter) {
    case "SHOW_PROJECT":
      return state.projects
    case "SHOW_BLOG":
      return state.posts
    case "SHOW_PORTFOLIO":
      return state.portfolios
    default:
      return state.homies  
  }
}

const FilterThumb = connect(
  mapStateToProps
)(ThumbList)

export default FilterThumb