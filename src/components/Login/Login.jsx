import './Login.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const Login = () => {
    return (
        <Card className="login">
            <form>
                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>
                <div className="control">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </Card>
    )
}

export default Login;