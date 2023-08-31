import Repos from '../../components/Repos';

const UserReposPage = ({params: {user}}) =>

{ return <div><Repos user={user}></Repos></div> }

export default UserReposPage;