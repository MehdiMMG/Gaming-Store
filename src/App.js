import "../src/styles/main.scss"
import { Accounts, Main, RecentlyPlayed, Sidebar, Slider } from "../src/components/index";

function App() {
  return (
    <body className="container">
      <Sidebar>

      </Sidebar>
      
      <Main></Main>
      
      <Slider></Slider>

      <Accounts></Accounts>
      
      <RecentlyPlayed></RecentlyPlayed>
    </body>
  );
}

export default App;
