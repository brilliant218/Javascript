<template>
  <div id="su">
  <div class="container-fluid p-0">
    <header class="header-box d-none d-md-block">
      <div class="row">
        <div class="col-6 col-md-4 d-flex">
          <div class="lenovoImg"><img class="lenovoLogo" src="img/logo-red.svg" alt=""></div>
          <div class="lenovoLine d-none d-md-block"><img src="img/line-logo.svg" alt=""></div>
          <div class="lenovoVantage m-0 d-none d-md-block">Vantage</div>
        </div>

        <div class="col-6 col-md-8 d-flex justify-content-end">
          <div class="navBar d-flex pr-3">
            <img src="img/svg-dashboard-normal.svg" alt="">
            <span class="nav-txt d-none d-md-block pl-1 pr-0 active">Dashboard</span>
          </div>
          <div class="navBar d-flex pr-3">
            <img src="img/svg-device-normal.svg" alt="">
            <span class="nav-txt d-none d-md-block pl-1 pr-0">Device</span>
          </div>
          <div class="navBar d-flex pr-3">
            <img src="img/svg-apps-normal.svg" alt="">
            <span class="nav-txt d-none d-md-block pl-1 pr-0">Apps</span>
          </div>
          <div class="navBar d-flex pr-3">
            <img src="img/svg-security-normal.svg" alt="">
            <span class="nav-txt d-none d-md-block pl-1 pr-0">Security</span>
          </div>
          <div class="navBar d-flex pr-3">
            <img src="img/svg-account-normal.svg" alt="">
            <span class="nav-txt d-none d-md-block pl-1 pr-0">Account</span>
          </div>
          <div class="navBar d-flex pr-3">
            <img src="img/svg-support-normal.svg" alt="">
            <span class="nav-txt d-none d-md-block pl-1 pr-0">Support</span>
          </div>
        </div>
      </div>
    </header>
    <header class="header-box d-block d-md-none">
      <div class="row navbar-light">
        <div class="col-6 col-md-4 d-flex">
          <div class="lenovoImg"><img class="lenovoLogo" src="img/logo-red.svg" alt=""></div>
        </div>
        <button class="navbar-toggler navbar-toggler-right border-0 p-0 nav-toggle" type="button" id="sm-navbar-btn">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="sm-navbar">
          <ul class="navbar-nav mr-auto">
            <li class="sm-nav-li">
              <img src="img/svg-dashboard-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0 active">Dashboard</span>
            </li>
            <li class="sm-nav-li">
              <img src="img/svg-device-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Device</span>
            </li>
            <li class="sm-nav-li">
              <img src="img/svg-apps-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Apps</span>
            </li>
            <li class="sm-nav-li">
              <img src="img/svg-security-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Security</span>
            </li>
            <li class="sm-nav-li">
              <img src="img/svg-account-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Account</span>
            </li>
            <li class="sm-nav-li">
              <img src="img/svg-support-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Support</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <div class="content-view">
        <h2 class="color-red su-title pt-3 pb-2">Lenovo System Update</h2>
        <div id="su-start" class="su-box show">
          <div class="su-contain">
            <p>Last update was on 11/11/2018 at 10:00 AM</p>
            <p class="m-0">Next update scan is scheduled for 11/10/2018</p>
          </div>
          <div class="su-buttons">
            <button id="check-for-updates" class="btn-normal bg-blue text-white">Check for updates</button>
          </div>
        </div>
        <div id="su-search" class="su-box">
          <div class="su-contain">
            <p>System Update is checking updates for your system, please wait a moment.</p>
            <div class="progress">
              <div class="progress-bar bg-green" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="su-buttons">
            <button id="cancel-search" class="btn-normal bg-gray">Cancel</button>
          </div>
        </div>
        <div id="su-search-result" class="su-box">
          <div class="su-contain">
            <h4>Download and Install Updates</h4>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="pills-critical-tab" data-toggle="pill" href="#pills-critical" role="tab" aria-controls="pills-critical" aria-selected="true">Critical - 2 available</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-recommended-tab" data-toggle="pill" href="#pills-recommended" role="tab" aria-controls="pills-recommended" aria-selected="false">Recommended - 0 available</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="pills-optional-tab" data-toggle="pill" href="#pills-optional" role="tab" aria-controls="pills-optional" aria-selected="false">Optional - 0 available</a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-critical" role="tabpanel" aria-labelledby="pills-critical-tab">
                <p class="fz-12">These packages include updates to hardware drivers and other system utilities that are critical for the correct operation of your computer. Critical updates also are important for protecting data on your computer and should be installed as they become available. Failure to install these packages could result in data loss, system malfunction, or hardware failure.</p>
                <label class="mb-3">
                  <input type="checkbox" value="" class="mr-2">
                  <span>Select all updates below</span>
                </label>
                <div class="su-updates ml-4">
                  <label class="mb-0">
                    <input type="checkbox" value="" class="mr-2">
                    <span>ThinkPad Video Features (NVIDIA NVS 5200MM/5400M, Quador K100M/K2000M)</span>
                  </label>
                  <div class="mb-3 pl-4">
                    <span>23.1 MB</span>
                    <span class="text-warning">Reboot required</span>
                  </div>
                </div>
                <div class="su-updates ml-4">
                  <label class="mb-0">
                    <input type="checkbox" value="" class="mr-2">
                    <span>ThinkPad Camera Features</span>
                  </label>
                  <div class="mb-3 pl-4">
                    <span>62.5 MB</span>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="pills-recommended" role="tabpanel" aria-labelledby="pills-recommended-tab">...</div>
              <div class="tab-pane fade" id="pills-optional" role="tabpanel" aria-labelledby="pills-optional-tab">...</div>
            </div>
          </div>
          <div class="su-buttons su-search-result-buttons">
            <span>0 items are selected</span>
            <button id="install-selected" class="btn-normal bg-blue text-white">Install selected</button>
            <button class="btn-normal bg-gray mr-0">Cancel</button>
          </div>
        </div>
        <div id="su-installing" class="su-box">
          <div class="su-contain">
            <p>System Update is installing updates for your system. Please check back later.</p>
            <div class="progress">
              <div class="progress-bar bg-green" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="su-buttons">
            <button id="cancel-installing" class="btn-normal bg-gray">Cancel</button>
          </div>
        </div>
        <div id="su-installed" class="su-box">
          <div class="su-contain">
            <p>Install complete.</p>
          </div>
          <div class="su-buttons"></div>
        </div>
      </div>
    </main>
  </div>
  </div>
</template>

<script>
export default {
  name: "su"
};
</script>

<style>
</style>