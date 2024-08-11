import "./App.css";
import Form from "./Form.js";
import MainLayout from "./layout/MainLayout.js";
import BlogContainer from "./Blog.js";

function App() {
  return (
    <MainLayout>
      <div className="App">
        <Form />
        <BlogContainer />
      </div>
    </MainLayout>
  );
}

export default App;
