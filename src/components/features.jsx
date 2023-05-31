import React from "react";

export const Features = (props) => {
  function increase(data) {
    props.data.forEach(element => {
      if (data.currentTarget.id == (element.title + "-" + element.id)) {
        var q = Number(document.getElementById(data.currentTarget.id + "-quantity").innerHTML);
        q += 1;
        document.getElementById(data.currentTarget.id + "-quantity").innerHTML = q;
        document.getElementById(data.currentTarget.id + "-quantityinprice").innerHTML = q * element.price;
      }
    });
  }

  function decrease(data) {
    props.data.forEach(element => {
      if (data.currentTarget.id == (element.title + "-" + element.id)) {
        var q = Number(document.getElementById(data.currentTarget.id + "-quantity").innerHTML);
        if (q > 0) {
          q -= 1;
          document.getElementById(data.currentTarget.id + "-quantity").innerHTML = q;
          document.getElementById(data.currentTarget.id + "-quantityinprice").innerHTML = q * element.price;
        }
      }
    });
  }

  function reset(data) {
    props.data.forEach(element => {
      if (data.currentTarget.id == (element.title + "-" + element.id)) {
        document.getElementById(data.currentTarget.id + "-quantity").innerHTML = 0;
        document.getElementById(data.currentTarget.id + "-quantityinprice").innerHTML = 0;
      }
    });
  }

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 className="mt-5">اکانت ها</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-xs-8 col-md-4">
                <i className={d.icon}></i>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
                <p className="account-price">
                  <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>

                    <div>
                      <span id={`${d.title}-${i}-quantityinprice`}>0</span>
                      $ =
                      <span id={`${d.title}-${i}-quantity`}>0</span>
                      * {d.price}$
                    </div>

                    <div>
                      <button id={`${d.title}-${i}`} onClick={increase} className="incrase-button">
                        <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
                      </button>
                      <button id={`${d.title}-${i}`} onClick={reset} className="reset-button">
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                      </button>
                      <button id={`${d.title}-${i}`} onClick={decrease} className="decrase-button">
                        <i class="fa fa-arrow-circle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </p>
              </div>
            ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};