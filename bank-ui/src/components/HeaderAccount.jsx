import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const HeaderAccount = () => {
    return(
        <header className='app-header'>
                <div className="app-header-logo">
                    <div className="logo">
                        <span className="logo-icon"></span>
                            <form id='login-name'>
                                <span className="withLine" id='loginName'></span>
                            </form>
                    </div>
                </div>
            <div className="app-header-navigation">
                <div className="tabs">
                <Navbar className="tabs" bg="dark" data-bs-theme="dark">
                        <Container className='your-account'>
                            <p>Your Account</p>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </header>
    )
}