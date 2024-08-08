import "./App.css";
import Navbar from "./Navbar.js";
import Form from "./Form.js";
import BlogPost from "./Post.js";
import Footer from "./Footer.js";

const posts = [
  {
    id: 1,
    title: "My first post",
    content: "test post",
    date: "August 8th 2024",
  },
  {
    id: 2,
    title: "My second post",
    content: "test post",
    date: "August 8th 2024",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <h1>My pieces of work</h1>
      {posts.map((post) => (
        <BlogPost
          key={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
