/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import { useCurrentUser } from "../contexts/UserContext";

const withCurrentUser = (WrappedComponent) => (props) => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  return (
    <WrappedComponent
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
      {...props}
    ></WrappedComponent>
  );
};

export default withCurrentUser;