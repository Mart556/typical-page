import './Navigation.css';

import Button from '../UI/Button';

import AuthContext from '../../store/auth.context';

const Navigation = (props) => {
    return (
        <AuthContext.Consumer>

            {ctx => (
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/">Users</a>
                        </li>
                        <li>
                            <a href="/new-meetup">Admin</a>
                        </li>
                        {
                            ctx.isLoggedIn && (
                                <li>
                                    <Button onClick={ctx.onLogout}> Logout </Button>
                                </li>
                            )
                        }
                    </ul>
                </nav>
            )}
        </AuthContext.Consumer>
    );
}

export default Navigation;