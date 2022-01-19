import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { graphql, Link, StaticQuery } from 'gatsby'
import config from '../../../config'
import sortPages from '../../../content/nav'

// eslint-disable-next-line no-unused-vars
const ListItem = styled(({ className, active, level, ...props }) => {
  return (
    <li className={className}>
      <a href={props.to} {...props} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </li>
  )
})`
  list-style: none;

  a {
    color: #5c6975;
    text-decoration: none;
    font-weight: ${({ level }) => (level === 0 ? 700 : 400)};
    padding: 0.45rem 0 0.45rem ${(props) => 2 + (props.level || 0) * 1}rem;
    display: block;
    position: relative;

    &:hover {
      color: #1ed3c6 !important;
    }

    ${(props) =>
      props.active &&
      `
      // color: #663399;
      border-color: rgb(230,236,241) !important;
      border-style: solid none solid solid;
      border-width: 1px 0px 1px 1px;
      background-color: #fff;
    `} // external link icon
    svg {
      float: right;
      margin-right: 1rem;
    }
  }
`

const Sidebar = styled('aside')`
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }
`

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`

const SidebarItem = ({ node }) => {
  const { fields } = node.node
  const { label, slug, title } = fields
  if (slug === '/') return null
  const indent = (() => {
    const parts = slug.slice(1).split('/')
    // console.log(JSON.stringify(parts))
    let level = parts.length - 1
    // console.log(level)
    if (parts.pop() === 'index') level--
    // console.log(JSON.stringify(parts))
    // console.log(level)
    return level * 10
  })()
  return (
    <Link
      to={slug}
      css={css`
        color: ${window?.location?.href.endsWith(slug) ? '#6c6cdd' : '#4a3636'};
        /* font-weight: ${window?.location?.href.endsWith(slug) ? 'bold' : ''}; */
        text-decoration: none;
        display: block;
        padding: 5px;
        padding-left: ${indent}px;
        width: 235px;
        margin-left: 20px;
        padding-right: 10px;
        margin-bottom: 10px;
        &:hover {
          color: orange;
          cursor: pointer;
        }
      `}
      key={slug}
    >
      {title}
    </Link>
  )
}

const SidebarList = ({ nodes }) => {
  return nodes.map((node) => <SidebarItem node={node} />)
}

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      // console.log(2)
      sortPages(allMdx)
      // console.log('allMdx', JSON.stringify(allMdx, null, 2))

      return (
        <Sidebar>
          {config.sidebar.title ? (
            <div
              className={'sidebarTitle hiddenMobile'}
              dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
            />
          ) : null}
          <SidebarList nodes={allMdx.edges} />
        </Sidebar>
      )
    }}
  />
)

export default SidebarLayout
