import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Useritem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        {/* 라우터에서는 a href -> Link to를 사용해야 함
        a 태그는 기본적인 속성은 페이지를 이동시키면서, 페이지를 새로 불러옴
        Link to 태그는 브라우저의 주소만 바꿀뿐, 페이지를 새로 불러오지 않음 */}
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
