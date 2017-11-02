import React from 'react';

export default ({data}) => {
  return (
    <div>
      <h1>Project Files</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Extension</th>
          <th>Path</th>
          <th>Created</th>
          <th>Size</th>
        </tr>
        {data.allFile.edges.map(({node}) => (
          <tr key={node.relativePath}>
            <td>{node.name}</td>
            <td>{node.extension}</td>
            <td>{node.relativePath}</td>
            <td>{node.birthTime}</td>
            <td>{node.prettySize}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
// probably sends the query to gatsby and it handles putting it into props
export const query = graphql`
  query MyFilesQuery {
    allFile(sort: {fields: [birthTime], order: DESC}) {
      edges {
        node {
          name
          extension
          relativePath
          birthTime(fromNow: true)
          prettySize
        }
      }
    }
  }
`;
