import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl';
import { Link } from 'react-router';
import React from 'react';
import { findDOMNode } from 'react-dom';

class CollectiveHouseNav extends React.Component {
  render () {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader ref="layout">
          <Header title="Collective House">
            <Navigation className="mdl-layout--large-screen-only">
              {this.routerLinks()}
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              {this.routerLinks()}
            </Navigation>
          </Drawer>
          <Content>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    );
  }

  closeDrawer = () => (
    findDOMNode(this.refs.layout).MaterialLayout.toggleDrawer()
  );

  routerLinks = () => ([
    <Link to="/calendar" key={1} onClick={this.closeDrawer}>
      Calendar
    </Link>,
    <Link to="/groceries" key={2} onClick={this.closeDrawer}>
      Groceries
    </Link>
  ]);
}

export default CollectiveHouseNav;
