import React, { Fragment, useEffect } from 'react'
import ReactDOM from 'react-dom'

import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import GithubCorner from './GithubCorner'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';


export default ({ children, meta, title }) => {

  useEffect(() => {
      async function loader() {
          try {
              const deckdeckgoHighlightCodeLoader = require("@deckdeckgo/highlight-code/dist/loader")
              await deckdeckgoHighlightCodeLoader.defineCustomElements(window);
          } catch (err) {
              console.error(err);
          }
      }
      loader();
  }, [])

  return (
    
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
          }
          allPosts: allMarkdownRemark(
            filter: { fields: { contentType: { eq: "postCategories" } } }
            sort: { order: DESC, fields: [frontmatter___date] }
          ) {
            edges {
              node {
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { siteTitle, socialMediaCard, googleTrackingId } =
            data.settingsYaml || {},
          subNav = {
            posts: data.allPosts.hasOwnProperty('edges')
              ? data.allPosts.edges.map(post => {
                  return { ...post.node.fields, ...post.node.frontmatter }
                })
              : false
          }

          

        return (
          
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />

            <GithubCorner url="https://github.com/thriveweb/yellowcake" />

            <Nav subNav={subNav} />

            <Fragment>{children}</Fragment>
            <Footer />
          </Fragment>
        )
      }}
    />
  )
}
