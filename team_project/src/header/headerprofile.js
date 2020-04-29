import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default class HeaderProfile extends React.Component {
  a() {
    console.log("click");
  }
  render() {
    return (
      <Dropdown className="header-profile" >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <i className="fas fa-user"></i>
          <img src="" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu" >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">개인프로필 수정</Dropdown.Item>
          <Dropdown.Item href="#/action-3">로그아웃</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
