import { Header } from "./Header";
import { SearchForm } from "./SearchForm";
import { ResultList } from "./ResultList";
import "./Styles.css"

export default function Main() {

  return (
    <div className="Main">
      <div className="topNav">
        <Header />
      </div>
      <div className="ResultListContainer">
        <ResultList />
      </div>
    </div>
  );
}
