import React from "react";
import { Button, Menu, Segment, Sidebar } from "semantic-ui-react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import ClientList from "../components/ClientList/ClientList";
import { closeSidebar, openSidebar } from "../redux/actions/sidebar.actions";
import styles from "./MobileLayout.module.css";

const MobileLayout = (props) => {
  const sidebar = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        onHide={() => dispatch(closeSidebar())}
        visible={sidebar.mobileMenu}
        width="wide"
      >
        <div className="clientList_container">
          <div className={styles.closeSidebarBtn}>
            <Button
              icon="close"
              circular
              onClick={() => dispatch(closeSidebar())}
            />
          </div>
          <ClientList />
        </div>
      </Sidebar>
      <div className="mobile-wrapper">
        <div className={styles.showSidebarBtn}>
          <Button icon="bars" onClick={() => dispatch(openSidebar())} />
        </div>

        <Sidebar.Pusher>{props.children}</Sidebar.Pusher>
      </div>
    </Sidebar.Pushable>
  );
};

MobileLayout.propTypes = {
  children: PropTypes.object,
};
export default MobileLayout;
