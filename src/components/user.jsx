import { useState } from "react";
import React from "react";

export const User = (props) => {
  const [state , setState] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const username = e.target.elements.username.value;
    const url = await fetch(`https://jsonplaceholder.typicode.com/users?name=${name}&&username=${username}`);
    const url_json = await url.json();

    console.log(url_json[0]);
    
    if (name && username) {
      setState({
        id: url_json[0].id,
        name: url_json[0].name,
        username: url_json[0].username,
        phone: url_json[0].phone,
        website: url_json[0].website,
        email: url_json[0].email,
        address_city: url_json[0].address.city,
        address_street: url_json[0].address.street,
        address_suite: url_json[0].address.suite,
        address_zipcode: url_json[0].address.zipcode,
      });

    }else{
  
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
        <div className="col-md-3 contact-info">
            <div className="contact-item">
              <h3>اطلاعات کاربری</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> آدرس
                </span>
                  <span>شهر: {state.address_city}</span>
                  <span>خیابان: {state.address_street}</span>
                  <span>سوئیت: {state.address_suite}</span>
                  <span>کد پستی: {state.address_zipcode}</span>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> تلفن
                </span>
                  {state.phone}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> ایمیل
                </span>{" "}
                {state.email}
              </p>
            </div>
          </div>
          <div className="col-md-8 col-md-offset-1">
            <div className="row">
              <div className="section-title">
                <h2>
                  گرفتن اطلاعات
                </h2>
                <p>
                  برای یافتن اطلاعات نام و نام کاربری را وارد کنید. (API از این <a href="https://jsonplaceholder.typicode.com/users" style={{ color: "black", }}>لینک</a> گرفته شده)
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control user-information" placeholder="نام" required />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="username" className="form-control user-information" placeholder="نام کاربری" required />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  ارسال اطلاعات
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
