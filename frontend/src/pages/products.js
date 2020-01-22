import React, { Component } from 'react'

export default class products extends Component {
    render() {
        return (
         <div>
                <div id="pcoded" className="pcoded">
                    <div className="pcoded-overlay-box" />
                    <div className="pcoded-container navbar-wrapper">
                    <nav className="navbar header-navbar pcoded-header">
                        <div className="navbar-wrapper">
                        <div className="navbar-logo">
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
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-home" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.dash.main">Dashboard</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
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
                                        <a href="menu-static.html">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.vertical.static-layout">Static Layout</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-header-fixed.html">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.vertical.header-fixed">Header Fixed</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-compact.html">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.vertical.compact">Compact</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-sidebar.html">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.vertical.sidebar-fixed">Sidebar Fixed</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className=" pcoded-hasmenu">
                                    <a href="javascript:void(0)">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.page_layout.horizontal.main">Horizontal</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className=" ">
                                        <a href="menu-horizontal-static.html" target="_blank">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.horizontal.static-layout">Static Layout</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-horizontal-fixed.html" target="_blank">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.horizontal.fixed-layout">Fixed layout</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-horizontal-icon.html" target="_blank">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.horizontal.static-with-icon">Static With Icon</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="menu-horizontal-icon-fixed.html" target="_blank">
                                            <span className="pcoded-micon"><i className="icon-chart" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.page_layout.horizontal.fixed-with-icon">Fixed With Icon</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className=" ">
                                    <a href="menu-bottom.html">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.page_layout.bottom-menu">Bottom Menu</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="box-layout.html" target="_blank">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.page_layout.box-layout">Box Layout</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="menu-rtl.html" target="_blank">
                                        <span className="pcoded-micon"><i className="icon-pie-chart" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.page_layout.rtl">RTL</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-layout-cta-right" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.navigate.main">Navigation</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="navbar-light.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.navigate.navbar">Navbar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="navbar-dark.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.navigate.navbar-inverse">Navbar Inverse</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="navbar-elements.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.navigate.navbar-with-elements">Navbar With Elements</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="widget.html">
                                    <span className="pcoded-micon"><i className="ti-view-grid" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.widget.main">Widget</span>
                                    <span className="pcoded-badge label label-danger">100+</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.ui-element">UI Element</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu  active pcoded-trigger">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-layout-grid2-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.basic-components.main">Basic Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="alert.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.alert">Alert</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="breadcrumb.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.breadcrumbs">Breadcrumbs</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="button.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.button">Button</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="box-shadow.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.box-shadow">Box-Shadow</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="accordion.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.collapse–accordion">Accordion</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="generic-class.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.generic-class">Generic Class</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className="active">
                                    <a href="tabs.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.tabs">Tabs</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="color.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.color">Color</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="label-badge.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.label-badge">Label Badge</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="progress-bar.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.progress-bar">Progress Bar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="preloader.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.pre-loader">Pre-Loader</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="list.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.list">List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="tooltip.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.tooltip-popover">Tooltip And Popover</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="typography.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.typography">Typography</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="other.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.basic-components.other">Other</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-crown" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.advance-components.main">Advance Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="draggable.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.draggable">Draggable</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-grid.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.grid-stack">Grid Stack</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="light-box.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.light-box">Light Box</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="modal.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.modal">Modal</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="modal-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.modal-form">Modal Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="notification.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.notifications">Notifications</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="notify.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.pnotify">PNOTIFY</span>
                                        <span className="pcoded-badge label label-info">NEW</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="rating.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.rating">Rating</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="range-slider.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.range-slider">Range Slider</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="slider.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.slider">Slider</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="syntax-highlighter.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.syntax-highlighter">Syntax Highlighter</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="tour.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.tour">Tour</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="treeview.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.tree-view">Tree View</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="nestable.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.nestable">Nestable</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="toolbar.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.toolbar">Toolbar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="x-editable.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.advance-components.x-editable">X-Editable</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-gift" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.extra-components.main">Extra Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="session-timeout.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.extra-components.session-timeout">Session Timeout</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="session-idle-timeout.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.extra-components.session-idle-timeout">Session Idle Timeout</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="offline.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.extra-components.offline">Offline</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="animation.html">
                                    <span className="pcoded-micon"><i className="ti-reload rotate-refresh" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.animations.main">Animations</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="sticky.html">
                                    <span className="pcoded-micon"><i className="ti-layers-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.sticky-notes.main">Sticky Notes</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-star" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.icons.main">Icons</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="icon-font-awesome.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.font-awesome">Font Awesome</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-themify.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.themify">Themify</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-simple-line.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.simple-line-icon">Simple Line Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-ion.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.ion-icon">Ion Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-material-design.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.material-design">Material Design</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-icofonts.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.ico-fonts">Ico Fonts</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-weather.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.weather-icon">Weather Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-typicons.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.typicons">Typicons</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="icon-flags.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.icons.flags">Flags</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.forms">Forms</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-layers" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.form-components.main">Form Components</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="form-elements-component.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.form-components">Form Components</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="form-elements-add-on.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.form-elements-add-on">Form-Elements-Add-On</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="form-elements-advance.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.form-elements-advance">Form-Elements-Advance</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="form-validation.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.form-components.form-validation">Form Validation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="form-picker.html">
                                    <span className="pcoded-micon"><i className="ti-pencil-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.form-pickers.main">Form Picker</span>
                                    <span className="pcoded-badge label label-warning">NEW</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-layout-cta-btn-right" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.json-form.main">JSON Form</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="json-forms/simple-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.simple-form">Simple Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/clubs.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.clubs-view">Clubs(View Selector)</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.customer-form">Customer Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-profile-display-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.profile-display">Profile Display</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-profile-edit-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.profile-edit">Profile Edit</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/customer-profile-read-only.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.profile-ready-only">Profile Ready Only</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/json-form-fields.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.form-fields">Form Fields</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/registration-click-validation.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.registration-validation">Registration Validation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/registration-automatic-validation.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.automatic-validation">Automatic Validation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="json-forms/localized-login.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.json-form.localized-login">Localized Login</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="form-select.html">
                                    <span className="pcoded-micon"><i className="ti-shortcode" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.form-select.main">Form Select</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="form-masking.html">
                                    <span className="pcoded-micon"><i className="ti-write" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.form-masking.main">Form Masking</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="form-wizard.html">
                                    <span className="pcoded-micon"><i className="ti-archive" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.form-wizard.main">Form Wizard</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-receipt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.ready-to-use.main">Ready To Use</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="ready-cloned-elements-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.cloned-elements-form">Cloned Elements Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-currency-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.currency-form">Currency Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-booking.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.booking-form">Booking Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-booking-multi-steps.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.booking-multi-steps-form">Booking Multi Steps Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-comment.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.comment-form">Comment Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-form-contact.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.contact-form">Contact Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-job-application-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.job-application-form">Job Application Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-js-addition-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.jS-addition-form">JS Addition Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-login-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.login-form">Login Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-popup-modal-form.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.popup-modal-form">Popup Modal Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-registration-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.registration-form">Registration Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-review-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.review-form">Review Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-subscribe-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.subscribe-form">Subscribe Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-suggestion-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.suggestion-form">Suggestion Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="ready-tabs-form.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.ready-to-use.tabs-form">Tabs Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.tables">Tables</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-receipt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.bootstrap-table.main">Bootstrap Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="bs-basic-table.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.bootstrap-table.basic-table">Basic Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-table-sizing.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.bootstrap-table.sizing-table">Sizing Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-table-border.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.bootstrap-table.border-table">Border Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="bs-table-styling.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.bootstrap-table.styling-table">Styling Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-widgetized" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.data-table.main">Data Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="dt-basic.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.basic-initialization">Basic Initialization</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-advance.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.advance-initialization">Advance Initialization</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-styling.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.styling">Styling</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-api.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.api">API</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ajax.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.ajax">Ajax</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-server-side.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.server-side">Server Side</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-plugin.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.plug-in">Plug-In</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-data-sources.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table.data-sources">Data Sources</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-loop" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.main">Data Table Extensions</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className=" ">
                                    <a href="dt-ext-autofill.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.autofill">AutoFill</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className="pcoded-hasmenu">
                                    <a href="javascript:void(0)">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.button.main">Button</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className=" ">
                                        <a href="dt-ext-basic-buttons.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.button.basic-button">Basic Button</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="dt-ext-buttons-flash.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.button.flash-button">Flash Button</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="dt-ext-buttons-html-5-data-export.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.button.html-data-export">Html-5 Data Export</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className=" ">
                                        <a href="dt-ext-buttons-print.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.button.print-button">Print Button</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-col-reorder.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.col-reorder">Col Reorder</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-fixed-columns.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.fixed-columns">Fixed Columns</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-fixed-header.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.fixed-header">Fixed Header</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-key-table.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.key-table">Key Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-responsive.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.responsive">Responsive</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-row-reorder.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.row-recorder">Row Recorder</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-scroller.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.scroller">Scroller</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className=" ">
                                    <a href="dt-ext-select.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.data-table-extensions.select-tbl">Select Table</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className=" ">
                                <a href="foo-table.html">
                                    <span className="pcoded-micon"><i className="ti-view-list-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.foo-table.main">FooTable</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-view-list" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.handson-table.main">Handson Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="handson-appearance.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.appearance">Appearance</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-data-operation.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.data-operation">Data Operation</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-rows-cols.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.rows-columns">Rows Columns</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-columns-only.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.columns-Only">Columns Only</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-cell-features.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.cell-features">Cell Features</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-cell-types.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.cell-types">Cell Types</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-integrations.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.integrations">Integrations</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-rows-only.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.rows-Only">Rows Only</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="handson-utilities.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.handson-table.utilities">Utilities</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="editable-table.html">
                                    <span className="pcoded-micon"><i className="ti-write" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.editable-table.main">Editable Table</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.chart-and-maps">Chart And Maps</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-bar-chart-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.charts.main">Charts</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="chart-google.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.google-chart">Google Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-echart.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.echarts">Echarts</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-chartjs.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.chartjs">ChartJs</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-list.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.list-chart">List Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-float.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.float-chart">Float Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-knob.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.know-chart">Know chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-morris.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.morris-chart">Morris Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-nvd3.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.nvd3-chart">Nvd3 Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-peity.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.peity-chart">Peity Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-radial.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.radial chart">Radial Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-rickshaw.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.rickshaw-chart">Rickshaw Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-sparkline.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.sparkline-chart">Sparkline Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="chart-c3.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.charts.c3-chart">C3 Chart</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-map-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.maps.main">Maps</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="map-google.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.maps.google-maps">Google Maps</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="map-vector.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.maps.vector-map">Vector Maps</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="map-api.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.maps.google-map-api">Google Map Search API</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="location.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.maps.location">Location</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="landingpage/index.html" target="_blank">
                                    <span className="pcoded-micon"><i className="ti-mobile" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.landing-page.main">Landing Page</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.pages">Pages</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-id-badge" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.authentication.main">Authentication</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="auth-normal-sign-in.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.login-bg-image">Login With BG Image</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-in-social.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.login-soc-icon">Login With Social Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-in-social-header-footer.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.login-soc-h-f">Login Social With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-normal-sign-in-header-footer.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.login-h-f">Login With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.registration-bg-image">Registration BG Image</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up-social.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.registration-soc-icon">Registration Social Icon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up-social-header-footer.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.registration-soc-h-f">Registration Social With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-sign-up-header-footer.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.registration-h-f">Registration With Header And Footer</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-multi-step-sign-up.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.multi-step-registration">Multi Step Registration</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-reset-password.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.forgot-password">Forgot Password</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-lock-screen.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.lock-screen">Lock Screen</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="auth-modal.html" target="_blank">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.authentication.modal">Modal</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-settings" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.maintenance.main">Maintenance</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="error.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.maintenance.error">Error</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="comming-soon.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.maintenance.comming-soon">Comming Soon</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="offline-ui.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.maintenance.offline-ui">Offline UI</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-user" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.user-profile.main">User Profile</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="timeline.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.user-profile.timeline">Timeline</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="timeline-social.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.user-profile.timeline-social">Timeline Social</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="user-profile.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.user-profile.user-profile">User Profile</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="user-card.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.user-profile.user-card">User Card</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-comment-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.blog.main">Blog</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="blog.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.blog.blog">Blog</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="blog-detail.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.blog.blog-detail">Blog Detail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="blog-detail-left.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.blog.blog-left-side">Blog With Left Sidebar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="blog-detail-right.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.blog.blog-right-sidebar">Blog With Right Sidebar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-shopping-cart" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.e-commerce.main">E-Commerce</span>
                                    <span className="pcoded-badge label label-danger">NEW</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="product.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.e-commerce.product">Product</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-list.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.e-commerce.product-list">Product List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-edit.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.e-commerce.product-edit">Product Edit</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-detail.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.e-commerce.product-detail">Product Detail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-cart.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.e-commerce.product-card">Product Card</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="product-payment.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.e-commerce.credit-card-form">Credit Card Form</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-email" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.email.main">E-Email</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="email-compose.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.email.compose-mail">Compose Email</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="email-inbox.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.email.inbox">Inbox</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="email-read.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.email.read-read-mail">Read Mail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className="pcoded-hasmenu ">
                                    <a href="javascript:void(0)">
                                        <span className="pcoded-micon"><i className="ti-email" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.email.email-template.main">Email Template</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className>
                                        <a href="email-templates/email-welcome.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.email.email-template.welcome-email">Welcome Email</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-password.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.email.email-template.reset-password">Reset Password</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-newsletter.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.email.email-template.newsletter-email">Newsletter Email</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-launch.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.email.email-template.app-launch">App Launch</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                        <li className>
                                        <a href="email-templates/email-activation.html">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.email.email-template.activation-code">Activation Code</span>
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
                                <a href="chat.html">
                                    <span className="pcoded-micon"><i className="ti-comments" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.chat.main">Chat</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className=" ">
                                <a href="crm-contact.html">
                                    <span className="pcoded-micon"><i className="ti-layout-list-thumb" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.crm-contact.main">CRM Contact</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-dribbble" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.social.main">Social</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="fb-wall.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.social.fb-wall">Fb Wall</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="message.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.social.messages">Messages</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-check-box" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.task.main">Task</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="task-list.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.task.task-list">Task List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="task-board.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.task.task-board">Task Board</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="task-detail.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.task.task-detail">Task Detail</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="issue-list.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.task.issue list">Issue List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-notepad" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.to-do.main">To-Do</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="todo.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.to-do.todo">To-Do</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="notes.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.to-do.notes">Notes</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-gallery" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.gallery.main">Gallery</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="gallery-grid.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.gallery.gallery-grid">Gallery-Grid</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="gallery-masonry.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.gallery.masonry-gallery">Masonry Gallery</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="gallery-advance.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.gallery.advance-gallery">Advance Gallery</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-search" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.search.main">Search</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="search-result.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.search.simple-search">Simple Search</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="search-result2.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.search.grouping-search">Grouping Search</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-medall-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.job-search.main">Job Search</span>
                                    <span className="pcoded-badge label label-danger">NEW</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="job-card-view.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.job-search.card-view">Card View</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="job-details.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.job-search.job-detailed">Job Detailed</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="job-find.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.job-search.job-find">Job Find</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="job-panel-view.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.job-search.job-panel-view">Job Panel View</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.extension">Extension</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-pencil-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.editor.main">Editor</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="ck-editor.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.editor.ck-editor">CK-Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="wysiwyg-editor.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.editor.wysiwyg-editor">WYSIWYG Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="ace-editor.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.editor.ace-editor">Ace Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="summernote.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.editor.summer-note-editor">Summer Note Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="long-press-editor.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.editor.long-press-editor">Long Press Editor</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                            </ul>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-layout-media-right" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.invoice.main">Invoice</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="invoice.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.invoice.invoice">Invoice</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="invoice-summary.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.invoice.invoice-summery">Invoice Summary</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="invoice-list.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.invoice.invoice-list">Invoice List</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-calendar" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.event-calendar.main">Event Calendar</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="event-full-calender.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.full-calendar.full-calendar">Full Calendar</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="event-clndr.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.clnder.clnder">CLNDER</span>
                                        <span className="pcoded-badge label label-info">NEW</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="image-crop.html">
                                    <span className="pcoded-micon"><i className="ti-cut" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.image-cropper.main">Image Cropper</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className>
                                <a href="file-upload.html">
                                    <span className="pcoded-micon"><i className="ti-cloud-up" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.file-upload.main">File Upload</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-world" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.internationalize.main">Internationalize</span>
                                    <span className="pcoded-badge label label-danger">HOT</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="internationalization/internationalization-after-init.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.internationalize.after-init">After Init</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-fallback.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.internationalize.fallback">Fallback</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-on-init.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.internationalize.on-int">On Init</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-resources.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.internationalize.resources">Resources</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className>
                                    <a href="internationalization/internationalization-xhr-backend.html">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.internationalize.xhr-backend">XHR Backend</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="change-loges.html">
                                    <span className="pcoded-micon"><i className="ti-list" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.change-loges.main">Change Loges</span>
                                    <span className="pcoded-badge label label-warning">1.0</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.other">Other</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className="pcoded-hasmenu ">
                                <a href="javascript:void(0)">
                                    <span className="pcoded-micon"><i className="ti-direction-alt" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.menu-levels.main">Menu Levels</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                <ul className="pcoded-submenu">
                                    <li className>
                                    <a href="javascript:void(0)">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.menu-level-21">Menu Level 2.1</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                    <li className="pcoded-hasmenu ">
                                    <a href="javascript:void(0)">
                                        <span className="pcoded-micon"><i className="ti-direction-alt" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.menu-level-22.main">Menu Level 2.2</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li className>
                                        <a href="javascript:void(0)">
                                            <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                            <span className="pcoded-mtext" data-i18n="nav.menu-levels.menu-level-22.menu-level-31">Menu Level 3.1</span>
                                            <span className="pcoded-mcaret" />
                                        </a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className>
                                    <a href="javascript:void(0)">
                                        <span className="pcoded-micon"><i className="ti-angle-right" /></span>
                                        <span className="pcoded-mtext" data-i18n="nav.menu-levels.menu-level-23">Menu Level 2.3</span>
                                        <span className="pcoded-mcaret" />
                                    </a>
                                    </li>
                                </ul>
                                </li>
                                <li className>
                                <a href="javascript:void(0)" className="disabled">
                                    <span className="pcoded-micon"><i className="ti-na" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.disabled-menu.main">Disabled Menu</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className>
                                <a href="sample-page.html">
                                    <span className="pcoded-micon"><i className="ti-layout-sidebar-left" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.sample-page.main">Sample Page</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            <div className="pcoded-navigatio-lavel" data-i18n="nav.category.support">Support</div>
                            <ul className="pcoded-item pcoded-left-item">
                                <li className>
                                <a href="#" target="_blank">
                                    <span className="pcoded-micon"><i className="ti-file" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.documentation.main">Documentation</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                                <li className>
                                <a href="#" target="_blank">
                                    <span className="pcoded-micon"><i className="ti-layout-list-post" /></span>
                                    <span className="pcoded-mtext" data-i18n="nav.submit-issue.main">Submit Issue</span>
                                    <span className="pcoded-mcaret" />
                                </a>
                                </li>
                            </ul>
                            </div>
                        </nav>
                        <div className="pcoded-content">
                            <div className="pcoded-inner-content">
                            {/* Main-body start */}
                            <div className="main-body">
                                <div className="page-wrapper">
                                {/* Page header start */}
                                <div className="page-header">
                                    <div className="page-header-title">
                                    <h4>Gestión de Productos</h4>
                                    <span>Área para admistrar todos los productos del sistema.</span>
                                    </div>
                                    <div className="page-header-breadcrumb">
                                    <ul className="breadcrumb-title">
                                        <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="icofont icofont-home" />
                                        </a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#!">Productos</a>
                                        </li>
                                        <li className="breadcrumb-item"><a href="#!">Gestión</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                {/* Page header end */}
                                {/* Page body start */}
                                <div className="page-body">

                                    <div className="row">
                                            <div className="col-sm-12">
                                            {/* Bootstrap tab card start */}
                                            <div className="card">
                                            <div className="card-header">
                                                <h5>Creación de Productos</h5>
                                                <span>Creación de nuevos Productos</span>
                                                <div className="card-header-right">
                                                <i className="icofont icofont-rounded-down" />
                                                <i className="icofont icofont-refresh" />
                                            
                                                </div>
                                            </div>
                                            <div className="card-block">
                                                {/* Row start */}
                                                <div className="row">
                                                <div className="col-lg-12 col-xl-12">                                       
                                                    {/* Nav tabs */}
                                                    <ul className="nav nav-tabs  tabs" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" data-toggle="tab" href="#home1" role="tab">Principal</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#profile1" role="tab">Datos 1</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#messages1" role="tab">Datos 2</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" data-toggle="tab" href="#settings1" role="tab">Datos 3</a>
                                                        </li>
                                                    </ul>
                                                    {/* Tab panes */}
                                                    <div className="tab-content tabs card-block">
                                                    <div className="tab-pane active" id="home1" role="tabpanel">
                                                        <p className="m-0">1. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                    </div>
                                                    <div className="tab-pane" id="profile1" role="tabpanel">
                                                        <p className="m-0">2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>
                                                    </div>
                                                    <div className="tab-pane" id="messages1" role="tabpanel">
                                                        <p className="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                    </div>
                                                    <div className="tab-pane" id="settings1" role="tabpanel">
                                                        <p className="m-0">4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>
                                                    </div>
                                                    </div>
                                                </div>
                                                
                                                </div>
                                                {/* Row end */}
                                            </div>
                                            </div>
                                            {/* Bootstrap tab card end */}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            {/* Material tab card start */}
                                            <div className="card">
                                            <div className="card-header">
                                                <h5>Búsqueda de Productos</h5>
                                                <span>Búsqueda de productos por filtros</span>
                                                <div className="card-header-right">
                                                <i className="icofont icofont-rounded-down" />
                                                <i className="icofont icofont-refresh" />
                                            
                                                </div>
                                            </div>
                                            <div className="card-block">
                                                {/* Row start */}
                                                <div className="row m-b-30">
                                                <div className="col-lg-12 col-xl-12">

                                                    <input className="form-control" type="text" placeholder="Búsqueda de Productos" />                      
                                                
                                                </div>
                                            
                                                </div>
                                                {/* Row end */}
                                                {/* Row start */}
                                                <div className="row">
                                                <div className="col-lg-12 col-xl-6">
                                                
                                                
                                                
                                                </div>
                                            
                                                </div>
                                                {/* Row end */}
                                            </div>
                                            </div>
                                            {/* Material tab card end */}
                                        </div>
                                        </div>

                                    <div className="row">
                                        <div className="col-sm-12">
                                            {/* Material tab card start */}
                                            <div className="card">
                                            <div className="card-header">
                                                <h5>Listado de Productos</h5>
                                                <span>Listado de todos los Productos</span>
                                                <div className="card-header-right">
                                                <i className="icofont icofont-rounded-down" />
                                                <i className="icofont icofont-refresh" />
                                            
                                                </div>
                                            </div>
                                            <div className="card-block">
                                                {/* Row start */}
                                                <div className="row m-b-30">
                                                <div className="col-lg-12 col-xl-12">
                                                                                    
                                                
                                                </div>
                                            
                                                </div>
                                                {/* Row end */}
                                                {/* Row start */}
                                                <div className="row">
                                                <div className="col-lg-12 col-xl-6">
                                                
                                                
                                                
                                                </div>
                                            
                                                </div>
                                                {/* Row end */}
                                            </div>
                                            </div>
                                            {/* Material tab card end */}
                                        </div>
                                        </div>
                                    </div>
                                {/* Page body end */}
                                </div>
                            </div>
                            {/* Main-body end */}
                            <div id="styleSelector">
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
