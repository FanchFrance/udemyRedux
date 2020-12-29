import React from "react";
import { Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDetails from "./streams/StreamDetails";

const App = () => {
  return (
    <div>
      <Route path="/" component={StreamList} />
      <Route path="/streams/new" component={StreamCreate} />
      <Route path="/streams/edit" component={StreamEdit} />
      <Route path="/streams/delete" component={StreamDelete} />
      <Route path="/streams/show" component={StreamShow} />
      <Route path="/streams/detail" component={StreamDetails} />
    </div>
  );
};

export default App;
