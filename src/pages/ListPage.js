import React from 'react';
import Post from './Post';

const ListPage = ({toolsInfo, searchTerm}) => {

// let content = []
// // conts results = searchResults.filter
// if (searchTerm) {
//   const results = searchResults.filter((val) => val.toolname.toLowerCase().includes(searchTerm.toLowerCase())).map((post) => <Post key={post.id} post={post} />);
//   let content = results.length ? results : <article></article>
// }
console.log(searchTerm);
console.log(toolsInfo);

return (

    <>
    {searchTerm ? toolsInfo.filter((val) => val.toolname.toLowerCase().includes(searchTerm.toLowerCase())).map((post) => <Post key={post.id} post={post} />): <div></div>}
    </>
  )
}

export default ListPage