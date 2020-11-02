import React from "react";
import { Route, Link} from "react-router-dom";

const User = ({ match }) => <p>{match.params.name}</p>;

class Users extends React.Component {
    render() {
    return (
        <div>
            <h1 align="center">Users</h1>
          <h2>Select a user</h2>
          <ul>
            <li>
              <Link to="/users/usha">User 1 </Link>
            </li>
            <li>
              <Link to="/users/anitha">User 2 </Link>
            </li>
            <li>
              <Link to="/users/brunda">User 3 </Link>
            </li>
          </ul>
          <Route path="/users/:name" component={User} />
        </div>

    );
  }
}

export default Users;
