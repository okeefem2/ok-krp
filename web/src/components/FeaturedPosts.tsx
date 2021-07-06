import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import ImageGrid from './ImageGrid/ImageGrid';

function FeaturedPosts() {
  const data = useStaticQuery(graphql`
    query FeaturedPostsQuery {
        featuredPosts: allSanityAlbum(limit: 3, filter: {featured: {eq: true}}) {
          nodes {
            title
            category {
              title
            }
            mainImage {
              asset {
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
        }
    }
  `);

  console.log('featured posts', data?.featuredPosts);

  const featuredPosts = data?.featuredPosts?.nodes;
  // Needs an h2 Featured Posts
  // A 1x3 grid
  // and a View More Button
  return featuredPosts?.length ?
    <ImageGrid gridItems={featuredPosts.map(f => ({ title: f.title, url: '', image: f.mainImage.asset.gatsbyImageData, category: f.category.title }))} /> :
    <></>;
}

export default FeaturedPosts;
