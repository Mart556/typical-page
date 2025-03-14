import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/">Users</a>
                </li>
                <li>
                    <a href="/new-meetup">Admin</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;