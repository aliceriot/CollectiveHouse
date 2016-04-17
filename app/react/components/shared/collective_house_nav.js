import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content
} from 'react-mdl';
import { Link } from 'react-router';
import React from 'react';

class CollectiveHouseNav extends React.Component {
  render () {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
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

  routerLinks = () => ([
    <Link to="/hey">Hey</Link>,
    <Link to="/you">You</Link>
  ]);
}

export default CollectiveHouseNav;
