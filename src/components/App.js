import React from "react";
import blogData from "../data/blog"; 
import Header from "./Header";       
import About from "./About";         
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  console.log("App Data:", blogData); 
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}
<Header />;
<About />;
<ArticleList />

export default App;
