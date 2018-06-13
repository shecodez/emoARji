import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Preview } from "./components/Preview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Preview />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
