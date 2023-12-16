import "bootstrap/dist/css/bootstrap.min.css";
import SlidingMenu from "./sidebar";
import ChatBox from "./ChatBox";
import "../css/chat.css";

const pruebachat = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <SlidingMenu />
        </div>
        <div className="col-md-9">
          <div className="custom-form10">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default pruebachat;
