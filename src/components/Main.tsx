import { Header } from "./Header";
import { ResultList } from "./ResultList";
import "./Styles.css"

export default function Main() {

  return (
    <div className="Main">
      
      <div className="ResultListContainer">
        <ResultList />
      </div>
    </div>
  );
}
