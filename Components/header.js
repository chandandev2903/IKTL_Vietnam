// components/header.js

function renderHeader() {
    const headerHTML = `
    <div class="full-width-header rs-header-layout-3">
        <!-- Header Start -->
        <header id="rs-header" class="rs-header">
            <div class="rs-header-topber">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="topbar-left-content">
                                <p>
                                    <i class="ri-hand-heart-fill"></i> Welcome to iKonTelVietnam
                                    <a href="contact.html">Contact <i class="ri-arrow-right-up-line"></i></a>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="topbar-social">
                                <ul>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Instagram</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Menu Start -->
            <div class="menu-area menu-sticky" style="">
                <div class="container-fluid" style="background-color: white;">
                    <div class="rs-menu-area">
                        <div class="logo-area">
                            <a href="index.html">
                                <img src="https://www.ikontel.com/assets/img/logo/iKonTel-logo.png" alt=""/>
                            </a>
                        </div>
                        <div class="rs-header-rightside">
                            <div class="main-menu hidden-md">
                                <ul class="nav-menu">
                                    <li><a href="index.html" class="active">Home</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li class="has-clid relative">
                                        <a href="#">
                                            <cite class="rs_item_wrap">Services</cite>
                                        </a>
                                        <ul class="sub-menu">
                                            <li><a href="voice-bot-solutions.html">Voice Bot Solutions</a></li>
                                            <li><a href="speech-recognition-services.html">Speech Recognition Services</a></li>
                                            <li><a href="sms-services.html">SMS Services</a></li>
                                            <li><a href="toll-free_&_missed-call.html">Toll-Free &amp; Missed Call</a></li>
                                            <li><a href="ivr_solutions.html">IVR Solutions</a></li>
                                            <li><a href="audio_conference.html">Audio conference</a></li>
                                            <li><a href="click-to-call.html">Click to Call</a></li>
                                            <li><a href="robocall_solutions.html">Robocall Solutions</a></li>
                                            <li><a href="cloud_telephony.html">Cloud Telephony</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </div>
                            <div class="rs-header-contct">
                                <a href="tel:+85526691234">
                                    <p style="color: black;">
                                        <img src="assets/images/phone.png" alt="" /><span>Call any time</span> +84587121204
                                    </p>
                                </a>
                            </div>
                            <div class="canvasmenu-trigger view-md">
                                <i class="fa fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Menu End -->
        </header>
        <!-- Header End -->
    </div>

    `;

    // Insert the header into the body of the page or a specific container
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = headerHTML;
    }
}

// Call the renderHeader function to load the header when the page loads
window.onload = renderHeader;
