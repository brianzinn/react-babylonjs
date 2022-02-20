import { css } from '@emotion/core'
import { Link } from 'gatsby'
import * as queryString from 'query-string'
import React, { useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import styled from 'styled-components'
import sortPages from '../../../content/nav'

const isBrowser = typeof window !== 'undefined'

const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  width: 100%;
  height: 3rem;
  background: #fdfdfd;
  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }
  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`

const SearchedResults = ({ results }) =>
  results.length > 0 ? (
    results.map((result) => {
      // console.log('rendering result', result);
      const node = {
        node: {
          fields: {
            title: result.title,
            slug: result.slug,
          },
        },
      }
      return <SidebarItem node={node} />
    })
  ) : (
    <p style={{ textAlign: 'center' }}>Sorry, couldn't find any posts matching this search.</p>
  )

// node: {
//   fields: {
//     slug: string
//     title: string
//   }
// }
const SidebarItem = ({ node }) => {
  const { fields } = node.node
  const { slug, title } = fields
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
  const isSlugActive = isBrowser && window.location.href.endsWith(slug)
  return (
    <Link
      to={slug}
      css={css`
        color: ${isSlugActive ? '#6c6cdd' : '#4a3636'};
        /* font-weight: ${isSlugActive ? 'bold' : ''}; */
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

const FlexSearch = ({ localSearchPages: { index, store }, location, allMdx }) => {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search || '')

  const results = useFlexSearch(query, index, store)

  sortPages(allMdx)

  return (
    <>
      <SearchBar>
        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          id="search"
          type="search"
          placeholder="Search all content"
          value={query}
          onChange={(e) => {
            // navigate(
            //   e.target.value ? `/blog/?search=${e.target.value}` : "/blog/"
            // )
            setQuery(e.target.value)
          }}
        />
      </SearchBar>
      {query ? <SearchedResults results={results} /> : <SidebarList nodes={allMdx.edges} />}
    </>
  )
}

export default FlexSearch
