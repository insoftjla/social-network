import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ProfileContainer from "./components/Profile/ProfileContainer";
import AuthenticationContainer from "./components/Authentication/AuthenticationContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Col, Container, Row} from "react-bootstrap";
import {connect, Provider} from "react-redux";
import {initialized} from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./components/common/common";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/AllUsers/UsersContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initialized();
    }

    render() {
        if (!this.props.initialize) return <Preloader/>
        return (
            <BrowserRouter>
                <Container fluid>
                    <Row>
                        <Col className="p-0">
                            <HeaderContainer/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs lg={2} className="p-0">
                            <Sidebar/>
                        </Col>
                        <Col className="p-0">
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}
                            />
                            <Route path='/dialogs'
                                   render={withSuspense(DialogsContainer)}
                            />
                            <Route path='/allusers'
                                   render={withSuspense(UsersContainer)}
                            />
                            <Route path='/news' component={News}/>
                            <Route path='/music' component={Music}/>
                            <Route path='/login'
                                   render={() => <AuthenticationContainer/>}
                            />
                        </Col>
                    </Row>
                </Container>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = state => {
    return {
        initialize: state.app.initialize
    };
}

const AppContainer = connect(mapStateToProps, {initialized})(App);

let MyApp = () => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </React.StrictMode>
    )
}

export default MyApp;