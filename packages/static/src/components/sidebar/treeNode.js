import * as React from 'react'
import config from '../../../config'
import ClosedSvg from '../images/closed'
import OpenedSvg from '../images/opened'
import Link from '../link'

const TreeNode = (node) => {
  // console.log('visiting', JSON.stringify(node, null, 2))
  const { className = '', setCollapsed, collapsed, url, title, items, label, ...rest } = node

  const [_title, _url] = (() => {
    if (!label) return [] // Empty node
    if (title) return [title, url] // Has its own title and URL
    // it's a folder

    {
      if (items.length === 0) return []
      const [item] = items
      // console.log('first child', JSON.stringify(item, null, 2))
      const { title, url } = item
      items.shift()
      return [title, url]
    }
  })()
  // console.log('final props', JSON.stringify({ _title, _url }, null, 2))
  const isCollapsed = collapsed[_url]

  // console.log('child items', JSON.stringify(items, null, 2))
  const collapse = () => {
    setCollapsed(_url)
  }

  const hasChildren = items.length > 1 || (items.length === 1 && items[0].label !== 'index')

  let location

  if (typeof document != 'undefined') {
    location = document.location
  }
  const active =
    location &&
    (location.pathname === _url || location.pathname === config.gatsby.pathPrefix + _url)

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`

  return (
    <li className={calculatedClassName}>
      {_title && (
        <Link to={_url}>
          {_title}
          {!config.sidebar.frontLine && _title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

export default TreeNode
