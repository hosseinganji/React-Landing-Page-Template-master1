import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container" >


        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <div className="navbar-header navbar-right">
            <a className="navbar-brand page-scroll" href="#page-top">
              JOBIT
            </a>
          </div>
          <ul className="nav navbar-nav navbar-right" style={{ marginRight: "70px", display: "inline-flex" }}>
            <li>
              <a href="#" className="page-scroll">
                بک اند
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                فرانت اند
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                دواپس
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                سئو
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                شبکه
              </a>
            </li>
            <li>
              <a href="#" className="page-scroll">
                هوش مصنوعی
              </a>
            </li>

          </ul>

          <form name="search">
            <div className="row">
              <div className="col-md-3">
                <div className="form-group" style={{ marginBottom: "-5px", marginTop: "5px", }}>
                  <input type="text" name="search" className="form-control user-information" placeholder="جستجو..." required />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};
