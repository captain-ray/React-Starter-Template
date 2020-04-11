import React, { PureComponent } from 'react';
import { Layout as LayoutAnt } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import MainBody from '../../components/MainBody';
import SideMenu from '../../components/SideMenu';
import Dashboard from '../../containers/Dashboard';
import Application from '../../containers/Application';
import Registration from '../../containers/Registration';
import Query from '../../containers/Query';

class Layout extends PureComponent {
    state = {}
    render() {

        return (
            <LayoutAnt>
                <Header
                    logout={this.props.onLogout}
                />
                <MainBody>
                    <SideMenu />
                    <Switch>
                        <Route path={"/dashboard"} component={Dashboard} />
                        <Route path={"/application"} component={Application} />
                        <Route path="/registration" component={Registration} />
                        <Route path="/query" component={Query} />

                        <Route path={"/"} component={Dashboard}/>


                        <Redirect to="/dashboard" />

                    </Switch>
                </MainBody>
            </LayoutAnt>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.logout()),
    }
}

export default connect(null, mapDispatchToProps)(Layout);