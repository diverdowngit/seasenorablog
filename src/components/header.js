import { Link } from "gatsby";
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                {data.logo.file.url ? (
                  <img src={data.logo.file.url} alt="logo" />
                ) : (
                  <span>{data.siteName}</span>
                )}
              </Link>
            </div>
            
            <div
            aria-hidden="true"
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
            {header === "home" ? (
              <div className="menu">
                <ul
                aria-hidden="true"
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li key="home">
                    <Link to="/">Home</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "About")
                    .map(t => {
                      return (
                        <li key="About">
                          <Link to={`/about`}>About</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Service")
                    .map(t => {
                      return (
                        <li key="Service">
                          <Link to={`/#Service`}>Service</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li key="Blogs">
                          <Link to={`/blogs`}>Blogs</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Work")
                    .map(t => {
                      return (
                        <li key="Work">
                          <Link to={`/#Work`}>Work</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Testimonials")
                    .map(t => {
                      return (
                        <li key="Testimonials">
                          <Link to={`/#Testimonials`}>Testimonials</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li key="Photos">
                          <Link to={`/photos`}>Photos</Link>
                        </li>
                      );
                    })} <li key="Keepafloat">
                    <Link to={`/Keepafloat`}>Keepafloat</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li key="Contact">
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            ) : (
              <div className="menu">
                <ul
                aria-hidden="true"
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li key="home">
                    <Link to="/">Home</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "About")
                    .map(t => {
                      return (
                        <li key="About">
                          <Link to={`/about`}>About</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li key="blogs">
                          <Link to="/blogs">Blogs</Link>
                        </li>
                      );
                    })}
                    
                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li key="photos">
                          <Link to="/photos">Photos</Link>
                        </li>
                      );
                    })}
                    <li key="Keepafloat">
                    <Link to={`/Keepafloat`}>Keepafloat</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    );
  }
}
