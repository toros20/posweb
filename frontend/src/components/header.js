import React, { Component } from 'react'

export default class header extends Component {

    componentDidMount(){
        
        /*const script = document.createElement("script");

        script.src = 'js/nav.js';
        script.async = true;

        document.body.appendChild('script');*/
    }

    render() {
        return (
            <div>
                {/* Menu header start */}
                <div id="pcoded" className="pcoded">
                    <div className="pcoded-overlay-box" />
                    <div className="pcoded-container navbar-wrapper">
                    <nav className="navbar header-navbar pcoded-header">
                        <div className="navbar-wrapper">
                        <div className="navbar-logo" data-navbar-theme="theme4">
                            <a className="mobile-menu" id="mobile-collapse" href="#!">
                            <i className="ti-menu" />
                            </a>
                            <a className="mobile-search morphsearch-search" href="#">
                            <i className="ti-search" />
                            </a>
                            <a href="index.html">
                            <img className="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" />
                            </a>
                            <a className="mobile-options">
                            <i className="ti-more" />
                            </a>
                        </div>
                        <div className="navbar-container container-fluid">
                            <div>
                            <ul className="nav-left">
                                <li>
                                <div className="sidebar_toggle"><a href="javascript:void(0)"><i className="ti-menu" /></a></div>
                                </li>
                                <li>
                                <a className="main-search morphsearch-search" href="#">
                                    {/* themify icon */}
                                    <i className="ti-search" />
                                </a>
                                </li>
                                <li>
                                <a href="#!" onclick="javascript:toggleFullScreen()">
                                    <i className="ti-fullscreen" />
                                </a>
                                </li>
                                <li className="mega-menu-top">
                                <a href="#">
                                    Mega
                                    <i className="ti-angle-down" />
                                </a>
                                <ul className="show-notification row">
                                    <li className="col-sm-3">
                                    <h6 className="mega-menu-title">Popular Links</h6>
                                    <ul className="mega-menu-links">
                                        <li><a href="form-elements-component.html">Form Elements</a></li>
                                        <li><a href="button.html">Buttons</a></li>
                                        <li><a href="map-google.html">Maps</a></li>
                                        <li><a href="user-card.html">Contact Cards</a></li>
                                        <li><a href="user-profile.html">User Information</a></li>
                                        <li><a href="auth-lock-screen.html">Lock Screen</a></li>
                                    </ul>
                                    </li>
                                    <li className="col-sm-3">
                                    <h6 className="mega-menu-title">Mailbox</h6>
                                    <ul className="mega-mailbox">
                                        <li>
                                        <a href="#" className="media">
                                            <div className="media-left">
                                            <i className="ti-folder" />
                                            </div>
                                            <div className="media-body">
                                            <h5>Data Backup</h5>
                                            <small className="text-muted">Store your data</small>
                                            </div>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="media">
                                            <div className="media-left">
                                            <i className="ti-headphone-alt" />
                                            </div>
                                            <div className="media-body">
                                            <h5>Support</h5>
                                            <small className="text-muted">24-hour support</small>
                                            </div>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="media">
                                            <div className="media-left">
                                            <i className="ti-dropbox" />
                                            </div>
                                            <div className="media-body">
                                            <h5>Drop-box</h5>
                                            <small className="text-muted">Store large amount of data in one-box only
                                            </small>
                                            </div>
                                        </a>
                                        </li>
                                        <li>
                                        <a href="#" className="media">
                                            <div className="media-left">
                                            <i className="ti-location-pin" />
                                            </div>
                                            <div className="media-body">
                                            <h5>Location</h5>
                                            <small className="text-muted">Find Your Location with ease of use</small>
                                            </div>
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="col-sm-3">
                                    <h6 className="mega-menu-title">Gallery</h6>
                                    <div className="row m-b-20">
                                        <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/01.jpg" alt="Gallery-1" />
                                        </div>
                                        <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/02.jpg" alt="Gallery-2" />
                                        </div>
                                        <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/03.jpg" alt="Gallery-3" />
                                        </div>
                                    </div>
                                    <div className="row m-b-20">
                                        <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/04.jpg" alt="Gallery-4" />
                                        </div>
                                        <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/05.jpg" alt="Gallery-5" />
                                        </div>
                                        <div className="col-sm-4"><img className="img-fluid img-thumbnail" src="assets/images/mega-menu/06.jpg" alt="Gallery-6" />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-sm btn-block">Browse Gallery</button>
                                    </li>
                                    <li className="col-sm-3">
                                    <h6 className="mega-menu-title">Contact Us</h6>
                                    <div className="mega-menu-contact">
                                        <div className="form-group row">
                                        <label htmlFor="example-text-input" className="col-3 col-form-label">Name</label>
                                        <div className="col-9">
                                            <input className="form-control" type="text" placeholder="Artisanal kale" id="example-text-input" />
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label htmlFor="example-search-input" className="col-3 col-form-label">Email</label>
                                        <div className="col-9">
                                            <input className="form-control" type="email" placeholder="Enter your E-mail Id" id="example-search-input" />
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label htmlFor="example-search-input" className="col-3 col-form-label">Contact</label>
                                        <div className="col-9">
                                            <input className="form-control" type="number" placeholder="+91-9898989898" id="example-search-input-2" />
                                        </div>
                                        </div>
                                        <div className="form-group row">
                                        <label htmlFor="exampleTextarea" className="col-3 col-form-label">Message</label>
                                        <div className="col-9">
                                            <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
                                        </div>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <ul className="nav-right">
                                <li className="header-notification lng-dropdown">
                                <a href="#" id="dropdown-active-item">
                                    <i className="flag-icon flag-icon-gb m-r-5" /> English
                                </a>
                                <ul className="show-notification">
                                    <li>
                                    <a href="#" data-lng="en">
                                        <i className="flag-icon flag-icon-gb m-r-5" /> English
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" data-lng="es">
                                        <i className="flag-icon flag-icon-es m-r-5" /> Spanish
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" data-lng="pt">
                                        <i className="flag-icon flag-icon-pt m-r-5" /> Portuguese
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#" data-lng="fr">
                                        <i className="flag-icon flag-icon-fr m-r-5" /> French
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="header-notification">
                                <a href="#!">
                                    <i className="ti-bell" />
                                    <span className="badge">5</span>
                                </a>
                                <ul className="show-notification">
                                    <li>
                                    <h6>Notifications</h6>
                                    <label className="label label-danger">New</label>
                                    </li>
                                    <li>
                                    <div className="media">
                                        <img className="d-flex align-self-center" src="assets/images/user.png" alt="Generic placeholder image" />
                                        <div className="media-body">
                                        <h5 className="notification-user">John Doe</h5>
                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span className="notification-time">30 minutes ago</span>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="media">
                                        <img className="d-flex align-self-center" src="assets/images/user.png" alt="Generic placeholder image" />
                                        <div className="media-body">
                                        <h5 className="notification-user">Joseph William</h5>
                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span className="notification-time">30 minutes ago</span>
                                        </div>
                                    </div>
                                    </li>
                                    <li>
                                    <div className="media">
                                        <img className="d-flex align-self-center" src="assets/images/user.png" alt="Generic placeholder image" />
                                        <div className="media-body">
                                        <h5 className="notification-user">Sara Soudein</h5>
                                        <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                                        <span className="notification-time">30 minutes ago</span>
                                        </div>
                                    </div>
                                    </li>
                                </ul>
                                </li>
                                <li className="header-notification">
                                <a href="#!" className="displayChatbox">
                                    <i className="ti-comments" />
                                    <span className="badge">9</span>
                                </a>
                                </li>
                                <li className="user-profile header-notification">
                                <a href="#!">
                                    <img src="assets/images/user.png" alt="User-Profile-Image" />
                                    <span>John Doe</span>
                                    <i className="ti-angle-down" />
                                </a>
                                <ul className="show-notification profile-notification">
                                    <li>
                                    <a href="#!">
                                        <i className="ti-settings" /> Settings
                                    </a>
                                    </li>
                                    <li>
                                    <a href="user-profile.html">
                                        <i className="ti-user" /> Profile
                                    </a>
                                    </li>
                                    <li>
                                    <a href="email-inbox.html">
                                        <i className="ti-email" /> My Messages
                                    </a>
                                    </li>
                                    <li>
                                    <a href="auth-lock-screen.html">
                                        <i className="ti-lock" /> Lock Screen
                                    </a>
                                    </li>
                                    <li>
                                    <a href="#!">
                                        <i className="ti-layout-sidebar-left" /> Logout
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            {/* search */}
                            <div id="morphsearch" className="morphsearch">
                                <form className="morphsearch-form">
                                <input className="morphsearch-input" type="search" placeholder="Search..." />
                                <button className="morphsearch-submit" type="submit">Search</button>
                                </form>
                                <div className="morphsearch-content">
                                <div className="dummy-column">
                                    <h2>People</h2>
                                    <a className="dummy-media-object" href="#!">
                                    <img className="round" src="http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G" alt="Sara Soueidan" />
                                    <h3>Sara Soueidan</h3>
                                    </a>
                                    <a className="dummy-media-object" href="#!">
                                    <img className="round" src="http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G" alt="Shaun Dona" />
                                    <h3>Shaun Dona</h3>
                                    </a>
                                </div>
                                <div className="dummy-column">
                                    <h2>Popular</h2>
                                    <a className="dummy-media-object" href="#!">
                                    <img src="assets/images/avatar-1.png" alt="PagePreloadingEffect" />
                                    <h3>Page Preloading Effect</h3>
                                    </a>
                                    <a className="dummy-media-object" href="#!">
                                    <img src="assets/images/avatar-1.png" alt="DraggableDualViewSlideshow" />
                                    <h3>Draggable Dual-View Slideshow</h3>
                                    </a>
                                </div>
                                <div className="dummy-column">
                                    <h2>Recent</h2>
                                    <a className="dummy-media-object" href="#!">
                                    <img src="assets/images/avatar-1.png" alt="TooltipStylesInspiration" />
                                    <h3>Tooltip Styles Inspiration</h3>
                                    </a>
                                    <a className="dummy-media-object" href="#!">
                                    <img src="assets/images/avatar-1.png" alt="NotificationStyles" />
                                    <h3>Notification Styles Inspiration</h3>
                                    </a>
                                </div>
                                </div>
                                {/* /morphsearch-content */}
                                <span className="morphsearch-close"><i className="icofont icofont-search-alt-1" /></span>
                            </div>
                            {/* search end */}
                            </div>
                        </div>
                        </div>
                    </nav>
                    {/* Sidebar chat start */}
                    <div id="sidebar" className="users p-chat-user showChat">
                        <div className="had-container">
                        <div className="card card_main p-fixed users-main">
                            <div className="user-box">
                            <div className="card-block">
                                <div className="right-icon-control">
                                <input type="text" className="form-control  search-text" placeholder="Search Friend" id="search-friends" />
                                <div className="form-icon">
                                    <i className="icofont icofont-search" />
                                </div>
                                </div>
                            </div>
                            <div className="main-friend-list">
                                <div className="media userlist-box" data-id={1} data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-1.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Josephin Doe</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={2} data-status="online" data-username="Lary Doe" data-toggle="tooltip" data-placement="left" title="Lary Doe">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/task/task-u1.jpg" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Lary Doe</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={3} data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-2.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Alice</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={4} data-status="online" data-username="Alia" data-toggle="tooltip" data-placement="left" title="Alia">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/task/task-u2.jpg" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Alia</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={5} data-status="online" data-username="Suzen" data-toggle="tooltip" data-placement="left" title="Suzen">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/task/task-u3.jpg" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Suzen</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={6} data-status="offline" data-username="Michael Scofield" data-toggle="tooltip" data-placement="left" title="Michael Scofield">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-3.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-danger" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Michael Scofield</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={7} data-status="online" data-username="Irina Shayk" data-toggle="tooltip" data-placement="left" title="Irina Shayk">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-4.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Irina Shayk</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={8} data-status="offline" data-username="Sara Tancredi" data-toggle="tooltip" data-placement="left" title="Sara Tancredi">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-5.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-danger" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Sara Tancredi</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={9} data-status="online" data-username="Samon" data-toggle="tooltip" data-placement="left" title="Samon">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-1.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Samon</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={10} data-status="online" data-username="Daizy Mendize" data-toggle="tooltip" data-placement="left" title="Daizy Mendize">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/task/task-u3.jpg" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Daizy Mendize</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={11} data-status="offline" data-username="Loren Scofield" data-toggle="tooltip" data-placement="left" title="Loren Scofield">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-3.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-danger" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Loren Scofield</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={12} data-status="online" data-username="Shayk" data-toggle="tooltip" data-placement="left" title="Shayk">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-4.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Shayk</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={13} data-status="offline" data-username="Sara" data-toggle="tooltip" data-placement="left" title="Sara">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/task/task-u3.jpg" alt="Generic placeholder image" />
                                    <div className="live-status bg-danger" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Sara</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={14} data-status="online" data-username="Doe" data-toggle="tooltip" data-placement="left" title="Doe">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/avatar-1.png" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Doe</div>
                                </div>
                                </div>
                                <div className="media userlist-box" data-id={15} data-status="online" data-username="Lary" data-toggle="tooltip" data-placement="left" title="Lary">
                                <a className="media-left" href="#!">
                                    <img className="media-object img-circle" src="assets/images/task/task-u1.jpg" alt="Generic placeholder image" />
                                    <div className="live-status bg-success" />
                                </a>
                                <div className="media-body">
                                    <div className="f-13 chat-header">Lary</div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Sidebar inner chat start*/}
                    <div className="showChat_inner">
                        <div className="media chat-inner-header">
                        <a className="back_chatBox">
                            <i className="icofont icofont-rounded-left" /> Josephin Doe
                        </a>
                        </div>
                        <div className="media chat-messages">
                        <a className="media-left photo-table" href="#!">
                            <img className="media-object img-circle m-t-5" src="assets/images/avatar-1.png" alt="Generic placeholder image" />
                        </a>
                        <div className="media-body chat-menu-content">
                            <div className>
                            <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                            <p className="chat-time">8:20 a.m.</p>
                            </div>
                        </div>
                        </div>
                        <div className="media chat-messages">
                        <div className="media-body chat-menu-reply">
                            <div className>
                            <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                            <p className="chat-time">8:20 a.m.</p>
                            </div>
                        </div>
                        <div className="media-right photo-table">
                            <a href="#!">
                            <img className="media-object img-circle m-t-5" src="assets/images/avatar-2.png" alt="Generic placeholder image" />
                            </a>
                        </div>
                        </div>
                        <div className="chat-reply-box p-b-20">
                        <div className="right-icon-control">
                            <input type="text" className="form-control search-text" placeholder="Share Your Thoughts" />
                            <div className="form-icon">
                            <i className="icofont icofont-paper-plane" />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Sidebar inner chat end*/}
                    <div className="pcoded-main-container">
                        <div className="pcoded-wrapper">
                        <nav className="pcoded-navbar">
                            <div className="sidebar_toggle"><a href="#"><i className="icon-close icons" /></a></div>
                            <div className="pcoded-inner-navbar main-menu">
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.navigation">Navigation</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu active pcoded-trigger">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-home" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.main">Dashboard</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className="active">
                                    <a href="index.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.dash.default">Default</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dashboard-ecommerce.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.dash.ecommerce">Ecommerce</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dashboard-crm.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.dash.crm">CRM</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dashboard-analytics.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.dash.analytics">Analytics</span>
                                        <span className="pcoded-badge label label-info ">NEW</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dashboard-project.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.dash.project">Project</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-layout" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.page_layout.main">Page layouts</span>
                                    <span className="pcoded-badge label label-warning">NEW</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" pcoded-hasmenu">
                                    <a href="javascript:void(0)">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext">Vertical</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className=" ">
                                        <a href="menu-static.html" data-i18n="nav.page_layout.vertical.static-layout">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Static Layout</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-header-fixed.html" data-i18n="nav.page_layout.vertical.header-fixed">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Header Fixed</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-compact.html" data-i18n="nav.page_layout.vertical.compact">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Compact</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-sidebar.html" data-i18n="nav.page_layout.vertical.sidebar-fixed">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Sidebar Fixed</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className=" pcoded-hasmenu">
                                    <a href="javascript:void(0)" data-i18n="nav.page_layout.horizontal.main">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext">Horizontal</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className=" ">
                                        <a href="menu-horizontal-static.html" target="_blank" data-i18n="nav.page_layout.horizontal.static-layout">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Static Layout</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-horizontal-fixed.html" target="_blank" data-i18n="nav.page_layout.horizontal.fixed-layout">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Fixed layout</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-horizontal-icon.html" target="_blank" data-i18n="nav.page_layout.horizontal.static-with-icon">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Static With Icon</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-horizontal-icon-fixed.html" target="_blank" data-i18n="nav.page_layout.horizontal.fixed-with-icon">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext">Fixed With Icon</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className=" ">
                                    <a href="menu-bottom.html" data-i18n="nav.page_layout.bottom-menu">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext">Bottom Menu</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="box-layout.html" target="_blank" data-i18n="nav.page_layout.box-layout">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext">Box Layout</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="menu-rtl.html" target="_blank" data-i18n="nav.page_layout.rtl">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext">RTL</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.navigate.main">
                                    <span className="pcoded-micon"><i className="ti-layout-cta-right" /></span>
                                    <span className="pcoded-mtext">Navigation</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="navbar-light.html" data-i18n="nav.navigate.navbar">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Navbar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="navbar-dark.html" data-i18n="nav.navigate.navbar-inverse">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Navbar Inverse</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="navbar-elements.html" data-i18n="nav.navigate.navbar-with-elements">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Navbar With Elements</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="widget.html" data-i18n="nav.widget.main">
                                    <span className="pcoded-micon"><i className="ti-view-grid" /></span>
                                    <span className="pcoded-mtext">Widget</span>
                                    <span className="pcoded-badge label label-danger">100+</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.ui-element">UI Element</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-layout-grid2-alt" /></span>
                                    <span className="pcoded-mtext">Basic Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="alert.html" data-i18n="nav.basic-components.alert">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Alert</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="breadcrumb.html" data-i18n="nav.basic-components.breadcrumbs">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Breadcrumbs</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="button.html" data-i18n="nav.basic-components.button">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Button</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="box-shadow.html" data-i18n="nav.basic-components.box-shadow">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Box-Shadow</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="accordion.html" data-i18n="nav.basic-components.collapse–accordion">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Accordion</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="generic-class.html" data-i18n="nav.basic-components.generic-class">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Generic Class</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="tabs.html" data-i18n="nav.basic-components.tabs">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Tabs</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="color.html" data-i18n="nav.basic-components.color">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Color</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="label-badge.html" data-i18n="nav.basic-components.label-badge">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Label Badge</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="progress-bar.html" data-i18n="nav.basic-components.progress-bar">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Progress Bar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="preloader.html" data-i18n="nav.basic-components.pre-loader">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Pre-Loader</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="list.html" data-i18n="nav.basic-components.list">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="tooltip.html" data-i18n="nav.basic-components.tooltip-popover">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Tooltip And Popover</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="typography.html" data-i18n="nav.basic-components.typography">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Typography</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="other.html" data-i18n="nav.basic-components.other">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Other</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.advance-components.main">
                                    <span className="pcoded-micon"><i className="ti-crown" /></span>
                                    <span className="pcoded-mtext">Advance Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="draggable.html" data-i18n="nav.advance-components.draggable">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Draggable</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-grid.html" data-i18n="nav.advance-components.grid-stack">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Grid Stack</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="light-box.html" data-i18n="nav.advance-components.light-box">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Light Box</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="modal.html" data-i18n="nav.advance-components.modal">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Modal</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="modal-form.html" data-i18n="nav.advance-components.modal-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Modal Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="notification.html" data-i18n="nav.advance-components.notifications">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Notifications</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="notify.html" data-i18n="nav.advance-components.pnotify">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">PNOTIFY</span>
                                        <span className="pcoded-badge label label-info">NEW</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="rating.html" data-i18n="nav.advance-components.rating">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Rating</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="range-slider.html" data-i18n="nav.advance-components.range-slider">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Range Slider</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="slider.html" data-i18n="nav.advance-components.slider">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Slider</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="syntax-highlighter.html" data-i18n="nav.advance-components.syntax-highlighter">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Syntax Highlighter</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="tour.html" data-i18n="nav.advance-components.tour">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Tour</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="treeview.html" data-i18n="nav.advance-components.tree-view">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Tree View</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="nestable.html" data-i18n="nav.advance-components.nestable">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Nestable</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="toolbar.html" data-i18n="nav.advance-components.toolbar">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Toolbar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="x-editable.html" data-i18n="nav.advance-components.x-editable">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">X-Editable</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.extra-components.main">
                                    <span className="pcoded-micon"><i className="ti-gift" /></span>
                                    <span className="pcoded-mtext">Extra Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="session-timeout.html" data-i18n="nav.extra-components.session-timeout">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Session Timeout</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="session-idle-timeout.html" data-i18n="nav.extra-components.session-idle-timeout">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Session Idle Timeout</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="offline.html" data-i18n="nav.extra-components.offline">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Offline</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="animation.html" data-i18n="nav.animations.main">
                                    <span className="pcoded-micon"><i className="ti-reload rotate-refresh" /></span>
                                    <span className="pcoded-mtext">Animations</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="sticky.html" data-i18n="nav.sticky-notes.main">
                                    <span className="pcoded-micon"><i className="ti-layers-alt" /></span>
                                    <span className="pcoded-mtext">Sticky Notes</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.icons.main">
                                    <span className="pcoded-micon"><i className="ti-star" /></span>
                                    <span className="pcoded-mtext">Icons</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="icon-font-awesome.html" data-i18n="nav.icons.font-awesome">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Font Awesome</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-themify.html" data-i18n="nav.icons.themify">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Themify</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-simple-line.html" data-i18n="nav.icons.simple-line-icon">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Simple Line Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-ion.html" data-i18n="nav.icons.ion-icon">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Ion Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-material-design.html" data-i18n="nav.icons.material-design">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Material Design</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-icofonts.html" data-i18n="nav.icons.ico-fonts">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Ico Fonts</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-weather.html" data-i18n="nav.icons.weather-icon">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Weather Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-typicons.html" data-i18n="nav.icons.typicons">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Typicons</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-flags.html" data-i18n="nav.icons.flags">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Flags</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.forms">Forms</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.form-components.main">
                                    <span className="pcoded-micon"><i className="ti-layers" /></span>
                                    <span className="pcoded-mtext">Form Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="form-elements-component.html" data-i18n="nav.form-components.form-components">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Form Components</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="form-elements-add-on.html" data-i18n="nav.form-components.form-elements-add-on">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Form-Elements-Add-On</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="form-elements-advance.html" data-i18n="nav.form-components.form-elements-advance">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Form-Elements-Advance</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="form-validation.html" data-i18n="nav.form-components.form-validation">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Form Validation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="form-picker.html" data-i18n="nav.form-pickers.main">
                                    <span className="pcoded-micon"><i className="ti-pencil-alt" /></span>
                                    <span className="pcoded-mtext">Form Picker</span>
                                    <span className="pcoded-badge label label-warning">NEW</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.json-form.main">
                                    <span className="pcoded-micon"><i className="ti-layout-cta-btn-right" /></span>
                                    <span className="pcoded-mtext">JSON Form</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="json-forms/simple-form.html" data-i18n="nav.json-form.simple-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Simple Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/clubs.html" data-i18n="nav.json-form.clubs-view">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Clubs(View Selector)</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-form.html" data-i18n="nav.json-form.customer-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Customer Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-profile-display-form.html" data-i18n="nav.json-form.profile-display">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Profile Display</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-profile-edit-form.html" data-i18n="nav.json-form.profile-edit">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Profile Edit</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-profile-read-only.html" data-i18n="nav.json-form.profile-ready-only">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Profile Ready Only</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/json-form-fields.html" data-i18n="nav.json-form.form-fields">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Form Fields</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/registration-click-validation.html" data-i18n="nav.json-form.registration-validation">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Registration Validation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/registration-automatic-validation.html" data-i18n="nav.json-form.automatic-validation">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Automatic Validation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/localized-login.html" data-i18n="nav.json-form.localized-login">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Localized Login</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="form-select.html" data-i18n="nav.form-select.main">
                                    <span className="pcoded-micon"><i className="ti-shortcode" /></span>
                                    <span className="pcoded-mtext">Form Select</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="form-masking.html" data-i18n="nav.form-masking.main">
                                    <span className="pcoded-micon"><i className="ti-write" /></span>
                                    <span className="pcoded-mtext">Form Masking</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="form-wizard.html" data-i18n="nav.form-wizard.main">
                                    <span className="pcoded-micon"><i className="ti-archive" /></span>
                                    <span className="pcoded-mtext">Form Wizard</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.ready-to-use.main">
                                    <span className="pcoded-micon"><i className="ti-receipt" /></span>
                                    <span className="pcoded-mtext">Ready To Use</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="ready-cloned-elements-form.html" data-i18n="nav.ready-to-use.cloned-elements-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Cloned Elements Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-currency-form.html" data-i18n="nav.ready-to-use.currency-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Currency Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-booking.html" data-i18n="nav.ready-to-use.booking-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Booking Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-booking-multi-steps.html" data-i18n="nav.ready-to-use.booking-multi-steps-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Booking Multi Steps Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-comment.html" data-i18n="nav.ready-to-use.comment-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Comment Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-contact.html" data-i18n="nav.ready-to-use.contact-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Contact Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-job-application-form.html" data-i18n="nav.ready-to-use.job-application-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Job Application Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-js-addition-form.html" data-i18n="nav.ready-to-use.jS-addition-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">JS Addition Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-login-form.html" data-i18n="nav.ready-to-use.login-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Login Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-popup-modal-form.html" target="_blank" data-i18n="nav.ready-to-use.popup-modal-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Popup Modal Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-registration-form.html" data-i18n="nav.ready-to-use.registration-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Registration Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-review-form.html" data-i18n="nav.ready-to-use.review-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Review Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-subscribe-form.html" data-i18n="nav.ready-to-use.subscribe-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Subscribe Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-suggestion-form.html" data-i18n="nav.ready-to-use.suggestion-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Suggestion Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-tabs-form.html" data-i18n="nav.ready-to-use.tabs-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Tabs Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.tables">Tables</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.bootstrap-table.main">
                                    <span className="pcoded-micon"><i className="ti-receipt" /></span>
                                    <span className="pcoded-mtext">Bootstrap Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="bs-basic-table.html" data-i18n="nav.bootstrap-table.basic-table">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Basic Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-table-sizing.html" data-i18n="nav.bootstrap-table.sizing-table">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Sizing Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-table-border.html" data-i18n="nav.bootstrap-table.border-table">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Border Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-table-styling.html" data-i18n="nav.bootstrap-table.styling-table">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Styling Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.data-table.main">
                                    <span className="pcoded-micon"><i className="ti-widgetized" /></span>
                                    <span className="pcoded-mtext">Data Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="bs-basic-table.html" data-i18n="nav.bootstrap-table.basic-table">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Basic Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-basic.html" data-i18n="nav.data-table.basic-initialization">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Basic Initialization</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-advance.html" data-i18n="nav.data-table.advance-initialization">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Advance Initialization</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-styling.html" data-i18n="nav.data-table.styling">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Styling</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-api.html" data-i18n="nav.data-table.api">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">API</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ajax.html" data-i18n="nav.data-table.ajax">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Ajax</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-server-side.html" data-i18n="nav.data-table.server-side">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Server Side</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-plugin.html" data-i18n="nav.data-table.plug-in">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Plug-In</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-data-sources.html" data-i18n="nav.data-table.data-sources">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Data Sources</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)" data-i18n="nav.data-table-extensions.main">
                                    <span className="pcoded-micon"><i className="ti-loop" /></span>
                                    <span className="pcoded-mtext">Data Table Extensions</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="dt-ext-autofill.html" data-i18n="nav.data-table-extensions.autofill">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">AutoFill</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className="pcoded-hasmenu">
                                    <a href="javascript:void(0)" data-i18n="nav.data-table-extensions.button.main">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Button</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className=" ">
                                        <a href="dt-ext-basic-buttons.html" data-i18n="nav.data-table-extensions.button.basic-button">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Basic Button</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="dt-ext-buttons-flash.html" data-i18n="nav.data-table-extensions.button.flash-button">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Flash Button</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="dt-ext-buttons-html-5-data-export.html" data-i18n="nav.data-table-extensions.button.html-data-export">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Html-5 Data Export</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="dt-ext-buttons-print.html" data-i18n="nav.data-table-extensions.button.print-button">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Print Button</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-col-reorder.html" data-i18n="nav.data-table-extensions.col-reorder">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Col Reorder</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-fixed-columns.html" data-i18n="nav.data-table-extensions.fixed-columns">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Fixed Columns</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-fixed-header.html" data-i18n="nav.data-table-extensions.fixed-header">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Fixed Header</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-key-table.html" data-i18n="nav.data-table-extensions.key-table">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Key Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-responsive.html" data-i18n="nav.data-table-extensions.responsive">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Responsive</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-row-reorder.html" data-i18n="nav.data-table-extensions.row-recorder">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Row Recorder</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-scroller.html" data-i18n="nav.data-table-extensions.scroller">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Scroller</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-select.html" data-i18n="nav.data-table-extensions.select-tbl">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Select Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="foo-table.html" data-i18n="nav.foo-table.main">
                                    <span className="pcoded-micon"><i className="ti-view-list-alt" /></span>
                                    <span className="pcoded-mtext">FooTable</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.handson-table.main">
                                    <span className="pcoded-micon"><i className="ti-view-list" /></span>
                                    <span className="pcoded-mtext">Handson Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="handson-appearance.html" data-i18n="nav.handson-table.appearance">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Appearance</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-data-operation.html" data-i18n="nav.handson-table.data-operation">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Data Operation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-rows-cols.html" data-i18n="nav.handson-table.rows-columns">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Rows Columns</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-columns-only.html" data-i18n="nav.handson-table.columns-Only">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Columns Only</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-cell-features.html" data-i18n="nav.handson-table.cell-features">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Cell Features</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-cell-types.html" data-i18n="nav.handson-table.cell-types">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Cell Types</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-integrations.html" data-i18n="nav.handson-table.integrations">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Integrations</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-rows-only.html" data-i18n="nav.handson-table.rows-Only">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Rows Only</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-utilities.html" data-i18n="nav.handson-table.utilities">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Utilities</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="editable-table.html" data-i18n="nav.editable-table.main">
                                    <span className="pcoded-micon"><i className="ti-write" /></span>
                                    <span className="pcoded-mtext">Editable Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.chart-and-maps">Chart And Maps</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.charts.main"> <span className="pcoded-micon"><i className="ti-bar-chart-alt" /></span> <span className="pcoded-mtext">Charts</span> <span className="pcoded-mcaret" /> </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="chart-google.html" data-i18n="nav.charts.google-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Google Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-echart.html" data-i18n="nav.charts.echarts"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Echarts</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-chartjs.html" data-i18n="nav.charts.chartjs"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">ChartJs</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-list.html" data-i18n="nav.charts.list-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">List Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-float.html" data-i18n="nav.charts.float-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Float Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-knob.html" data-i18n="nav.charts.know-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Know chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-morris.html" data-i18n="nav.charts.morris-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Morris Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-nvd3.html" data-i18n="nav.charts.nvd3-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Nvd3 Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-peity.html" data-i18n="nav.charts.peity-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Peity Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-radial.html" data-i18n="nav.charts.radial chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Radial Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-rickshaw.html" data-i18n="nav.charts.rickshaw-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Rickshaw Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-sparkline.html" data-i18n="nav.charts.sparkline-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Sparkline Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="chart-c3.html" data-i18n="nav.charts.c3-chart"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">C3 Chart</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.maps.main"> <span className="pcoded-micon"><i className="ti-map-alt" /></span> <span className="pcoded-mtext">Maps</span> <span className="pcoded-mcaret" /> </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="map-google.html" data-i18n="nav.maps.google-maps"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Google Maps</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="map-vector.html" data-i18n="nav.maps.vector-map"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Vector Maps</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="map-api.html" data-i18n="nav.maps.google-map-api"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Google Map Search API</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                    <li className>
                                    <a href="location.html" data-i18n="nav.maps.location"> <span className="pcoded-micon"><i className="ti-angle-right" /></span> <span className="pcoded-mtext">Location</span> <span className="pcoded-mcaret" /> </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="landingpage/index.html" target="_blank" data-i18n="nav.landing-page.main"> <span className="pcoded-micon"><i className="ti-mobile" /></span> <span className="pcoded-mtext">Landing Page</span> <span className="pcoded-mcaret" /> </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.pages">Pages</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.authentication.main">
                                    <span className="pcoded-micon"><i className="ti-id-badge" /></span>
                                    <span className="pcoded-mtext">Authentication</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="auth-normal-sign-in.html" target="_blank" data-i18n="nav.authentication.login-bg-image">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Login With BG Image</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-in-social.html" target="_blank" data-i18n="nav.authentication.login-soc-icon">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Login With Social Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-in-social-header-footer.html" target="_blank" data-i18n="nav.authentication.login-soc-h-f">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Login Social With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-normal-sign-in-header-footer.html" target="_blank" data-i18n="nav.authentication.login-h-f">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Login With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up.html" target="_blank" data-i18n="nav.authentication.registration-bg-image">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Registration BG Image</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up-social.html" target="_blank" data-i18n="nav.authentication.registration-soc-icon">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Registration Social Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up-social-header-footer.html" target="_blank" data-i18n="nav.authentication.registration-soc-h-f">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Registration Social With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up-header-footer.html" target="_blank" data-i18n="nav.authentication.registration-h-f">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Registration With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-multi-step-sign-up.html" target="_blank" data-i18n="nav.authentication.multi-step-registration">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Multi Step Registration</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-reset-password.html" target="_blank" data-i18n="nav.authentication.forgot-password">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Forgot Password</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-lock-screen.html" target="_blank" data-i18n="nav.authentication.lock-screen">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Lock Screen</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-modal.html" target="_blank" data-i18n="nav.authentication.modal">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Modal</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.maintenance.main">
                                    <span className="pcoded-micon"><i className="ti-settings" /></span>
                                    <span className="pcoded-mtext">Maintenance</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="error.html" data-i18n="nav.maintenance.error">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Error</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="comming-soon.html" data-i18n="nav.maintenance.comming-soon">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Comming Soon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="offline-ui.html" data-i18n="nav.maintenance.offline-ui">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Offline UI</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.user-profile.main">
                                    <span className="pcoded-micon"><i className="ti-user" /></span>
                                    <span className="pcoded-mtext">User Profile</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="timeline.html" data-i18n="nav.user-profile.timeline">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Timeline</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="timeline-social.html" data-i18n="nav.user-profile.timeline-social">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Timeline Social</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="user-profile.html" data-i18n="nav.user-profile.user-profile">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">User Profile</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="user-card.html" data-i18n="nav.user-profile.user-card">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">User Card</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.blog.main">
                                    <span className="pcoded-micon"><i className="ti-comment-alt" /></span>
                                    <span className="pcoded-mtext">Blog</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="blog.html" data-i18n="nav.blog.blog">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Blog</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="blog-detail.html" data-i18n="nav.blog.blog-detail">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Blog Detail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="blog-detail-left.html" data-i18n="nav.blog.blog-left-side">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Blog With Left Sidebar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="blog-detail-right.html" data-i18n="nav.blog.blog-right-sidebar">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Blog With Right Sidebar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.e-commerce.main">
                                    <span className="pcoded-micon"><i className="ti-shopping-cart" /></span>
                                    <span className="pcoded-mtext">E-Commerce</span>
                                    <span className="pcoded-badge label label-danger">NEW</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="product.html" data-i18n="nav.e-commerce.product">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Product</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-list.html" data-i18n="nav.e-commerce.product-list">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Product List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-edit.html" data-i18n="nav.e-commerce.product-edit">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Product Edit</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-detail.html" data-i18n="nav.e-commerce.product-detail">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Product Detail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-cart.html" data-i18n="nav.e-commerce.product-card">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Product Card</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-payment.html" data-i18n="nav.e-commerce.credit-card-form">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Credit Card Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.email.main">
                                    <span className="pcoded-micon"><i className="ti-email" /></span>
                                    <span className="pcoded-mtext">E-Email</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="email-compose.html" data-i18n="nav.email.compose-mail">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Compose Email</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="email-inbox.html" data-i18n="nav.email.inbox">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Inbox</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="email-read.html" data-i18n="nav.email.read-read-mail">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Read Mail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className="pcoded-hasmenu ">
                                    <a href="javascript:void(0)" data-i18n="nav.email.email-template.main">
                                        <span className="pcoded-micon"><i className="ti-email" /></span>
                                        <span className="pcoded-mtext">Email Template</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className>
                                        <a href="email-templates/email-welcome.html" data-i18n="nav.email.email-template.welcome-email">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Welcome Email</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-password.html" data-i18n="nav.email.email-template.reset-password">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Reset Password</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-newsletter.html" data-i18n="nav.email.email-template.newsletter-email">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Newsletter Email</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-launch.html" data-i18n="nav.email.email-template.app-launch">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">App Launch</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-activation.html" data-i18n="nav.email.email-template.activation-code">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Activation Code</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.app">App</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className=" ">
                                <a href="chat.html" data-i18n="nav.chat.main">
                                    <span className="pcoded-micon"><i className="ti-comments" /></span>
                                    <span className="pcoded-mtext">Chat</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="crm-contact.html" data-i18n="nav.crm-contact.main">
                                    <span className="pcoded-micon"><i className="ti-layout-list-thumb" /></span>
                                    <span className="pcoded-mtext">CRM Contact</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.social.main">
                                    <span className="pcoded-micon"><i className="ti-dribbble" /></span>
                                    <span className="pcoded-mtext">Social</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="fb-wall.html" data-i18n="nav.social.fb-wall">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Fb Wall</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="message.html" data-i18n="nav.social.messages">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Messages</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.task.main">
                                    <span className="pcoded-micon"><i className="ti-check-box" /></span>
                                    <span className="pcoded-mtext">Task</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="task-list.html" data-i18n="nav.task.task-list">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Task List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="task-board.html" data-i18n="nav.task.task-board">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Task Board</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="task-detail.html" data-i18n="nav.task.task-detail">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Task Detail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="issue-list.html" data-i18n="nav.task.issue list">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Issue List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.to-do.main">
                                    <span className="pcoded-micon"><i className="ti-notepad" /></span>
                                    <span className="pcoded-mtext">To-Do</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="todo.html" data-i18n="nav.to-do.todo">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">To-Do</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="notes.html" data-i18n="nav.to-do.notes">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Notes</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.gallery.main">
                                    <span className="pcoded-micon"><i className="ti-gallery" /></span>
                                    <span className="pcoded-mtext">Gallery</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="gallery-grid.html" data-i18n="nav.gallery.gallery-grid">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Gallery-Grid</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="gallery-masonry.html" data-i18n="nav.gallery.masonry-gallery">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Masonry Gallery</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="gallery-advance.html" data-i18n="nav.gallery.advance-gallery">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Advance Gallery</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.search.main">
                                    <span className="pcoded-micon"><i className="ti-search" /></span>
                                    <span className="pcoded-mtext">Search</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="search-result.html" data-i18n="nav.search.simple-search">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Simple Search</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="search-result2.html" data-i18n="nav.search.grouping-search">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Grouping Search</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.job-search.main">
                                    <span className="pcoded-micon"><i className="ti-medall-alt" /></span>
                                    <span className="pcoded-mtext">Job Search</span>
                                    <span className="pcoded-badge label label-danger">NEW</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="job-card-view.html" data-i18n="nav.job-search.card-view">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Card View</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="job-details.html" data-i18n="nav.job-search.job-detailed">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Job Detailed</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="job-find.html" data-i18n="nav.job-search.job-find">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Job Find</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="job-panel-view.html" data-i18n="nav.job-search.job-panel-view">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Job Panel View</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.extension">Extension</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.editor.main">
                                    <span className="pcoded-micon"><i className="ti-pencil-alt" /></span>
                                    <span className="pcoded-mtext">Editor</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="ck-editor.html" data-i18n="nav.editor.ck-editor">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">CK-Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="wysiwyg-editor.html" data-i18n="nav.editor.wysiwyg-editor">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">WYSIWYG Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="ace-editor.html" data-i18n="nav.editor.ace-editor">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Ace Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="summernote.html" data-i18n="nav.editor.summer-note-editor">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Summer Note Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="long-press-editor.html" data-i18n="nav.editor.long-press-editor">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Long Press Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.invoice.main">
                                    <span className="pcoded-micon"><i className="ti-layout-media-right" /></span>
                                    <span className="pcoded-mtext">Invoice</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="invoice.html" data-i18n="nav.invoice.invoice">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Invoice</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="invoice-summary.html" data-i18n="nav.invoice.invoice-summery">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Invoice Summary</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="invoice-list.html" data-i18n="nav.invoice.invoice-list">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Invoice List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.event-calendar.main">
                                    <span className="pcoded-micon"><i className="ti-calendar" /></span>
                                    <span className="pcoded-mtext">Event Calendar</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="event-full-calender.html" data-i18n="nav.full-calendar.full-calendar">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Full Calendar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="event-clndr.html" data-i18n="nav.clnder.clnder">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">CLNDER</span>
                                        <span className="pcoded-badge label label-info">NEW</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="image-crop.html" data-i18n="nav.image-cropper.main">
                                    <span className="pcoded-micon"><i className="ti-cut" /></span>
                                    <span className="pcoded-mtext">Image Cropper</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className>
                                <a href="file-upload.html" data-i18n="nav.file-upload.main">
                                    <span className="pcoded-micon"><i className="ti-cloud-up" /></span>
                                    <span className="pcoded-mtext">File Upload</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.internationalize.main">
                                    <span className="pcoded-micon"><i className="ti-world" /></span>
                                    <span className="pcoded-mtext">Internationalize</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="internationalization/internationalization-after-init.html" data-i18n="nav.internationalize.after-init">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">After Init</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-fallback.html" data-i18n="nav.internationalize.fallback">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Fallback</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-on-init.html" data-i18n="nav.internationalize.on-int">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">On Init</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-resources.html" data-i18n="nav.internationalize.resources">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Resources</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-xhr-backend.html" data-i18n="nav.internationalize.xhr-backend">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">XHR Backend</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="change-loges.html" data-i18n="nav.change-loges.main">
                                    <span className="pcoded-micon"><i className="ti-list" /></span>
                                    <span className="pcoded-mtext">Change Loges</span>
                                    <span className="pcoded-badge label label-warning">1.0</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.other">Other</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)" data-i18n="nav.menu-levels.main">
                                    <span className="pcoded-micon"><i className="ti-direction-alt" /></span>
                                    <span className="pcoded-mtext">Menu Levels</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="javascript:void(0)" data-i18n="nav.menu-levels.menu-level-21">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Menu Level 2.1</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className="pcoded-hasmenu ">
                                    <a href="javascript:void(0)" data-i18n="nav.menu-levels.menu-level-22.main">
                                        <span className="pcoded-micon"><i className="ti-direction-alt" /></span>
                                        <span className="pcoded-mtext">Menu Level 2.2</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className>
                                        <a href="javascript:void(0)" data-i18n="nav.menu-levels.menu-level-22.menu-level-31">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext">Menu Level 3.1</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className>
                                    <a href="javascript:void(0)" data-i18n="nav.menu-levels.menu-level-23">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext">Menu Level 2.3</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="javascript:void(0)" data-i18n="nav.disabled-menu.main" className="disabled">
                                    <span className="pcoded-micon"><i className="ti-na" /></span>
                                    <span className="pcoded-mtext">Disabled Menu</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className>
                                <a href="sample-page.html" data-i18n="nav.sample-page.main">
                                    <span className="pcoded-micon"><i className="ti-layout-sidebar-left" /></span>
                                    <span className="pcoded-mtext">Sample Page</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.support">Support</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className>
                                <a href="#" data-i18n="nav.documentation.main" target="_blank">
                                    <span className="pcoded-micon"><i className="ti-file" /></span>
                                    <span className="pcoded-mtext">Documentation</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className>
                                <a href="#" target="_blank" data-i18n="nav.submit-issue.main">
                                    <span className="pcoded-micon"><i className="ti-layout-list-post" /></span>
                                    <span className="pcoded-mtext">Submit Issue</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </nav>
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                            <div className="main-body">
                                <div className="page-wrapper">
                                <div className="page-header">
                                    <div className="page-header-title">
                                    <h4>Dashboard</h4>
                                    </div>
                                    <div className="page-header-breadcrumb">
                                    <ul className="breadcrumb-title">
                                        <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="icofont icofont-home" />
                                        </a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#!">Pages</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#!">Dashboard</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                <div className="page-body">
                                    <div className="row">
                                    {/* statstic card start */}
                                    <div className="col-md-12 col-xl-4">
                                        <div className="card widget-statstic-card borderless-card">
                                        <div className="card-header">
                                            <div className="card-header-left">
                                            <h5>Statistics</h5>
                                            <p className="p-t-10 m-b-0 text-muted">Compared to last week</p>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <i className="icofont icofont-presentation-alt st-icon bg-primary" />
                                            <div className="text-left">
                                            <h3 className="d-inline-block">5,456</h3>
                                            <i className="icofont icofont-long-arrow-up f-30 text-success" />
                                            <span className="f-right bg-success">23%</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* statstic card end */}
                                    {/* statstic card start */}
                                    <div className="col-md-6 col-xl-4">
                                        <div className="card widget-statstic-card borderless-card">
                                        <div className="card-header">
                                            <div className="card-header-left">
                                            <h5>Daily order</h5>
                                            <p className="p-t-10 m-b-0 text-muted">Compare to yesterday</p>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <i className="icofont icofont-users-social st-icon bg-warning txt-lite-color" />
                                            <div className="text-left">
                                            <h3 className="d-inline-block">600</h3>
                                            <i className="icofont icofont-long-arrow-down text-danger f-30 " />
                                            <span className="f-right bg-danger">-5%</span>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* statstic card end */}
                                    {/* statstic card start */}
                                    <div className="col-md-6 col-xl-4">
                                        <div className="card widget-statstic-card borderless-card">
                                        <div className="card-header">
                                            <div className="card-header-left">
                                            <h5>Revenue 2017</h5>
                                            <p className="p-t-10 m-b-0 text-muted">This year revenue</p>
                                            </div>
                                        </div>
                                        <div className="card-block">
                                            <i className="icofont icofont-chart-line st-icon bg-success" />
                                            <div className="text-left">
                                            <h3 className="d-inline-block">$2,65,500</h3>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* statstic card end */}
                                    {/* Start */}
                                    {/* Analytics Start */}
                                    <div className="col-xl-8 col-md-6">
                                        <div className="card">
                                        <div className="card-block">
                                            <h5>Analytics</h5>
                                        </div>
                                        <div className="card-block">
                                            <div id="analythics-graph" style={{height: 365}} />
                                        </div>
                                        </div>
                                    </div>
                                    {/* Analytics End */}
                                    <div className="col-xl-4 col-md-6">
                                        <div className="user-card-block card">
                                        <div className="card-block">
                                            <div className="top-card text-center">
                                            <img src="assets/images/widget/user1.png" className="img-responsive" alt />
                                            </div>
                                            <div className="card-contain text-center p-t-40">
                                            <h5 className="text-capitalize p-b-10">Gregory Johnes</h5>
                                            <p className="text-muted">Califonia, USA</p>
                                            </div>
                                            <div className="card-data m-t-40">
                                            <div className="row">
                                                <div className="col-3 b-r-default text-center">
                                                <p className="text-muted">Followers</p>
                                                <span>345</span>
                                                </div>
                                                <div className="col-3 b-r-default text-center">
                                                <p className="text-muted">Following</p>
                                                <span>40</span>
                                                </div>
                                                <div className="col-3 b-r-default text-center">
                                                <p className="text-muted">Questions</p>
                                                <span>12</span>
                                                </div>
                                                <div className="col-3 text-center">
                                                <p className="text-muted">Answers</p>
                                                <span>40</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div className="card-button p-t-50">
                                            <div className="row">
                                                <div className="col-6 text-right">
                                                <button className="btn btn-primary btn-round">Follow</button>
                                                </div>
                                                <div className="col-6 text-left">
                                                <button className="btn btn-success btn-round">Message</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* Reset Order Start */}
                                    <div className="col-md-12">
                                        <div className="card">
                                        <div className="card-block">
                                            <h5>Reset Order</h5>
                                        </div>
                                        <div className="card-block reset-table p-t-0">
                                            <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                <tr className="text-uppercase">
                                                    <th>Image</th>
                                                    <th>Product Name</th>
                                                    <th>Product Code</th>
                                                    <th>Status</th>
                                                    <th>Purchased on</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><a href="#!"><img className="img-responsive" src="assets/images/widget/prod1.jpg" alt="chat-user" /></a>
                                                    </td>
                                                    <td>Leisure Suit Casual</td>
                                                    <td>3BSD59</td>
                                                    <td><button type="button" className="btn btn-success btn-round">Pending</button></td>
                                                    <td>27 Sep 2015</td>
                                                    <td>$99.00</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#!"><img className="img-responsive" src="assets/images/widget/prod4.jpg" alt="chat-user" /></a>
                                                    </td>
                                                    <td>Leisure Suit Casual</td>
                                                    <td>3BSD59</td>
                                                    <td><button type="button" className="btn btn-primary btn-round">Process</button></td>
                                                    <td>27 Sep 2015</td>
                                                    <td>$99.00</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#!"><img className="img-responsive" src="assets/images/widget/prod2.jpg" alt="chat-user" /></a>
                                                    </td>
                                                    <td>Leisure Suit Casual</td>
                                                    <td>3BSD59</td>
                                                    <td><button type="button" className="btn btn-warning btn-round">Failed</button></td>
                                                    <td>27 Sep 2015</td>
                                                    <td>$99.00</td>
                                                    <td>2</td>
                                                </tr>
                                                <tr>
                                                    <td><a href="#!"><img className="img-responsive" src="assets/images/widget/prod3.jpg" alt="chat-user" /></a>
                                                    </td>
                                                    <td>Leisure Suit Casual</td>
                                                    <td>3BSD59</td>
                                                    <td><button type="button" className="btn btn-primary btn-round">Process</button></td>
                                                    <td>27 Sep 2015</td>
                                                    <td>$99.00</td>
                                                    <td>2</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* Reset Order End */}
                                    {/* facebook Start */}
                                    <div className="col-md-12 col-xl-8">
                                        <div className="row">
                                        <div className="col-sm-12">
                                            <div className="news-card m-b-30 color-success card-block">
                                            <h6>Awesome News Title</h6>
                                            <span>22/12/2015</span>
                                            <p className="p-t-20">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                                                of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <div className="card borderless-card">
                                            <div className="row">
                                                <div className="col-sm-5 weather-card-1  text-center">
                                                <div className="mob-bg-calender bg-primary">
                                                    <div className="row p-t-20 p-b-20">
                                                    <div className="col-sm-12">
                                                        <h4>Sunday</h4>
                                                        <div className="row">
                                                        <div className="col-6 text-right">
                                                            <svg version="1.1" id="sun" className="climacon climacon_sun" viewBox="15 15 70 70">
                                                            <clipPath id="sunFillClip">
                                                                <path d="M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z" />
                                                            </clipPath>
                                                            <g className="climacon_iconWrap climacon_iconWrap-sun">
                                                                <g className="climacon_componentWrap climacon_componentWrap-sun">
                                                                <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east" d="M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z" />
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast" d="M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z" />
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z" />
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest" d="M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z" />
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west" d="M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z" />
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southWest" d="M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z" />
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-south" d="M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z" />
                                                                    <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-southEast" d="M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z" />
                                                                </g>
                                                                <g className="climacon_componentWrap climacon_componentWrap_sunBody" clipPath="url(#sunFillClip)">
                                                                    <circle className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" cx="50.034" cy={50} r="11.999" />
                                                                </g>
                                                                </g>
                                                            </g>
                                                            </svg>
                                                        </div>
                                                        <div className="col-6 text-left">
                                                            <span className="weather-temp">72°</span>
                                                        </div>
                                                        </div>
                                                        <h5>Wingston, D.C.</h5>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="col-sm-7 p-l-0">
                                                <div className="text-center p-20">
                                                    <div className="row text-center daily-whether">
                                                    <div className="col-sm-3">
                                                        <h5>SUN</h5>
                                                        <svg version="1.1" id="w-svg-1" className="climacon climacon_cloudSnow" viewBox="15 15 70 70">
                                                        <g className="climacon_iconWrap climacon_iconWrap-cloudSnow">
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-snow" clipPath="url(#snowFillClip)">
                                                            <circle className="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-left" cx="42.001" cy="59.641" r={2} />
                                                            <circle className="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-middle" cx="50.001" cy="59.641" r={2} />
                                                            <circle className="climacon_component climacon_component-stroke climacon_component-stroke_snow climacon_component-stroke_snow-right" cx="57.999" cy="59.641" r={2} />
                                                            </g>
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.943v-4.381c2.39-1.386,3.999-3.963,3.999-6.922c0-4.417-3.581-7.999-7.999-7.999c-1.601,0-3.083,0.48-4.333,1.291c-1.23-5.317-5.974-9.291-11.665-9.291c-6.627,0-11.998,5.373-11.998,12c0,3.549,1.55,6.729,4,8.924v4.916c-4.777-2.769-8-7.922-8-13.84c0-8.836,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c6.627,0,11.999,5.373,11.999,11.999C71.998,58.863,68.654,63.293,63.999,64.943z" />
                                                            </g>
                                                        </g>
                                                        </svg>
                                                        <span>18°</span>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h5>MON</h5>
                                                        <svg version="1.1" id="w-svg-2" className="climacon climacon_cloudDrizzleSunAlt" viewBox="15 15 70 70">
                                                        <clipPath id="sunCloudFillClip-2">
                                                            <path d="M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z" />
                                                        </clipPath>
                                                        <clipPath id="cloudSunFillClip-1">
                                                            <path d="M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z" />
                                                        </clipPath>
                                                        <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzleSunAlt">
                                                            <g clipPath="url(#cloudSunFillClip)">
                                                            <g className="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                                                                <g className="climacon_componentWrap climacon_componentWrap_sunSpoke">
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z" />
                                                                </g>
                                                                <g className="climacon_wrapperComponent climacon_wrapperComponent-sunBody" clipPath="url(#sunCloudFillClip)">
                                                                <circle className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999" />
                                                                </g>
                                                            </g>
                                                            </g>
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" id="Drizzle-Left_1_" d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z" />
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z" />
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z" />
                                                            </g>
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud" clipPath="url(#cloudFillClip)">
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z" />
                                                            </g>
                                                        </g>
                                                        </svg>
                                                        <span>16°</span>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h5>TUE</h5>
                                                        <svg version="1.1" id="w-svg-3" className="climacon climacon_cloudRain" viewBox="15 15 70 70">
                                                        <clipPath id="cloudFillClip-4">
                                                            <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z" />
                                                        </clipPath>
                                                        <g className="climacon_iconWrap climacon_iconWrap-cloudRain">
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-rain">
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z" />
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z" />
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z" />
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z" />
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z" />
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z" />
                                                            </g>
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent_cloud" clipPath="url(#cloudFillClip)">
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.943,64.941v-4.381c2.389-1.384,4-3.961,4-6.92c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.48-4.334,1.291c-1.23-5.317-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.551,6.728,4,8.924v4.916c-4.777-2.768-8-7.922-8-13.84c0-8.835,7.163-15.997,15.998-15.997c6.004,0,11.229,3.311,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.372,11.998,12C71.941,58.863,68.602,63.293,63.943,64.941z" />
                                                            </g>
                                                        </g>
                                                        </svg>
                                                        <span>11°</span>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <h5>WED</h5>
                                                        <svg version="1.1" id="w-svg-4" className="climacon climacon_cloudSnowSunAlt" viewBox="15 15 70 70">
                                                        <clipPath id="cloudFillClip-2">
                                                            <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z" />
                                                        </clipPath>
                                                        <clipPath id="sunCloudFillClip">
                                                            <path d="M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z" />
                                                        </clipPath>
                                                        <clipPath id="cloudSunFillClip">
                                                            <path d="M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z" />
                                                        </clipPath>
                                                        <clipPath id="snowFillClip">
                                                            <path d="M15,15v70h70V15H15z M50,65.641c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2S51.104,65.641,50,65.641z" />
                                                        </clipPath>
                                                        <g className="climacon_iconWrap climacon_iconWrap-cloudSnowSunAlt">
                                                            <g clipPath="url(#cloudSunFillClip)">
                                                            <g className="climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud">
                                                                <g className="climacon_componentWrap climacon_componentWrap_sunSpoke">
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z" />
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north" d="M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z" />
                                                                </g>
                                                                <g className="climacon_wrapperComponent climacon_wrapperComponent-sunBody" clipPath="url(#sunCloudFillClip)">
                                                                <circle className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" cx="58.033" cy="41.612" r="11.999" />
                                                                </g>
                                                            </g>
                                                            </g>
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-snowAlt">
                                                            <g className="climacon_component climacon_component climacon_component-snowAlt" clipPath="url(#snowFillClip)">
                                                                <path className="climacon_component climacon_component-stroke climacon_component-stroke_snowAlt" d="M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z" />
                                                            </g>
                                                            </g>
                                                            <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                                                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M61.998,65.461v-4.082c3.447-0.891,6-4.012,6-7.738c0-4.417-3.582-7.999-7.999-7.999c-1.601,0-3.084,0.48-4.334,1.291c-1.231-5.317-5.973-9.291-11.664-9.291c-6.627,0-11.999,5.373-11.999,12c0,4.438,2.417,8.305,5.999,10.379v4.444c-5.86-2.375-9.998-8.112-9.998-14.825c0-8.835,7.162-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.373,11.998,11.998C71.997,59.586,67.671,64.506,61.998,65.461z" />
                                                            </g>
                                                        </g>
                                                        </svg>
                                                        <span>21°</span>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* facebook End */}
                                    {/* Start*/}
                                    <div className="col-md-12 col-xl-4">
                                        {/* Overdue Task Start*/}
                                        <div className="row">
                                        <div className="col-xl-12 col-md-6">
                                            <div className="card">
                                            <div className="card-block-big card-status">
                                                <h5>Income Status</h5>
                                                <div className="card-block text-center">
                                                <h2 className="text-primary">$4,612</h2>
                                                </div>
                                                <div className="row">
                                                <div className="col-6">
                                                    <p className="f-16 text-muted m-0">Totale Income : $4,679</p>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-muted f-16 text-right">
                                                    <span>20.56%</span>
                                                    <i className="icofont icofont-caret-up text-success" />
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-md-6">
                                            <div className="card">
                                            <div className="card-block-big card-status">
                                                <h5>Sale Status</h5>
                                                <div className="card-block text-center">
                                                <h2 className="text-warning">425</h2>
                                                </div>
                                                <div className="row">
                                                <div className="col-6">
                                                    <p className="f-16 text-muted m-0">Totale Income : 3,712</p>
                                                </div>
                                                <div className="col-6">
                                                    <div className="text-muted f-16 text-right">
                                                    <span>20.56%</span>
                                                    <i className="icofont icofont-caret-down text-primary" />
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* End*/}
                                    {/* Start */}
                                    {/* Last Task Start*/}
                                    <div className="col-md-12 col-xl-4">
                                        <div className="card">
                                        <div className="card-block">
                                            <h5>Last Task</h5>
                                        </div>
                                        <div className="card-block p-t-0">
                                            <div className="new-task">
                                            <div className="to-do-list">
                                                <div className="checkbox-fade fade-in-primary">
                                                <label className="check-task">
                                                    <input type="checkbox" defaultValue />
                                                    <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary" />
                                                    </span>
                                                    <span>Create Ecommerce Template</span>
                                                    <p className="text-muted">Woocommerce</p>
                                                </label>
                                                </div>
                                                <div className="f-right">
                                                <a href="#!" className="delete_todolist"><i className="icofont icofont-ui-delete" /></a>
                                                </div>
                                            </div>
                                            <div className="to-do-list">
                                                <div className="checkbox-fade fade-in-primary">
                                                <label className="check-task">
                                                    <input type="checkbox" defaultValue />
                                                    <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary" />
                                                    </span>
                                                    <span>Meeting with HOD and board</span>
                                                    <p className="text-muted">Woocommerce</p>
                                                </label>
                                                </div>
                                                <div className="f-right">
                                                <a href="#!" className="delete_todolist"><i className="icofont icofont-ui-delete" /></a>
                                                </div>
                                            </div>
                                            <div className="to-do-list">
                                                <div className="checkbox-fade fade-in-primary">
                                                <label className="check-task">
                                                    <input type="checkbox" defaultValue />
                                                    <span className="cr">
                                                    <i className="cr-icon icofont icofont-ui-check txt-primary" />
                                                    </span>
                                                    <span>Create Ecommerce Template</span>
                                                    <p className="text-muted">Woocommerce</p>
                                                </label>
                                                </div>
                                                <div className="f-right">
                                                <a href="#!" className="delete_todolist"><i className="icofont icofont-ui-delete" /></a>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-xl-8">
                                        <div className="card">
                                        <div className="card-block">
                                            <h5>Client Activity</h5>
                                        </div>
                                        <div className="card-block client-card table-1-card p-t-0">
                                            <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                <tr className="text-capitalize">
                                                    <th>User</th>
                                                    <th>Visits</th>
                                                    <th>Purchases</th>
                                                    <th>Call</th>
                                                    <th>Total Profit</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="photo-table img"><a href="#!"><img className="img-circle" src="assets/images/widget/user2.png" alt="chat-user" /></a>
                                                    <p>Angelina Vitale</p>
                                                    </td>
                                                    <td>287</td>
                                                    <td>34</td>
                                                    <td>52</td>
                                                    <td className="text-success">5,946 $</td>
                                                </tr>
                                                <tr>
                                                    <td className="photo-table img"><a href="#!"><img className="img-circle" src="assets/images/widget/user3.png" alt="chat-user" /></a>
                                                    <p>Angelina Vitale</p>
                                                    </td>
                                                    <td>102</td>
                                                    <td>346</td>
                                                    <td>52</td>
                                                    <td className="text-success">5,946 $</td>
                                                </tr>
                                                <tr>
                                                    <td className="photo-table img"><a href="#!"><img className="img-circle" src="assets/images/widget/user4.png" alt="chat-user" /></a>
                                                    <p>Angelina Vitale</p>
                                                    </td>
                                                    <td>287</td>
                                                    <td>123</td>
                                                    <td>52</td>
                                                    <td className="text-success">5,946 $</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    {/* Last Task End*/}
                                    </div>
                                </div>
                                </div>
                                <div id="styleSelector">
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}
