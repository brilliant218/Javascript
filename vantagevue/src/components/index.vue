<template>
  <div id="index">
<header class="header-box header-lg d-none d-md-block"> 
                <div class="row">
                  <div class="col-6 col-md-4 d-flex">
                    <div class="lenovoImg"><img class="lenovoLogo" src="../assets/logo-red.svg" alt=""></div>
                    <div class="lenovoLine"><img src="../assets/line-logo.svg" alt=""></div>
                    <div class="lenovoVantage m-0">Vantage</div>
                  </div>
          
                  <div class="col-6 col-md-8 d-flex justify-content-end">
                    <div class="navBar d-flex pr-3">
                      <img src="../assets/svg-dashboard-normal.svg" alt="">
                      <span class="nav-txt pl-1 pr-0 active">Dashboard</span>
                    </div>
                    <div class="navBar d-flex pr-3">
                      <img src="../assets/svg-device-normal.svg" alt="">
                      <span class="nav-txt pl-1 pr-0">Device</span>
                    </div>
                    <div class="navBar d-flex pr-3">
                      <img src="../assets/svg-apps-normal.svg" alt="">
                      <span class="nav-txt pl-1 pr-0">Apps</span>
                    </div>
                    <div class="navBar d-flex pr-3">
                      <img src="../assets/svg-security-normal.svg" alt="">
                      <span class="nav-txt pl-1 pr-0">Security</span>
                    </div>
                    <div class="navBar d-flex pr-3">
                      <img src="../assets/svg-account-normal.svg" alt="">
                      <span class="nav-txt pl-1 pr-0">Account</span>
                    </div>
                    <div class="navBar d-flex pr-3">
                      <img src="../assets/svg-support-normal.svg" alt="">
                      <span class="nav-txt pl-1 pr-0">Support</span>
                    </div>
                  </div>
                </div>
              </header>
  <div class="container p-0">
    
    <header class="header-box header-sm d-block d-md-none">
      <div class="row navbar-light">
        <div class="col-6 col-md-4 d-flex p-0">
          <div class="lenovoImg"><img class="lenovoLogo" src="../assets/logo-red.svg" alt=""></div>
        </div>
        <button class="navbar-toggler navbar-toggler-right col-2 border-0 p-0 nav-toggle" type="button" id="sm-navbar-btn">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="sm-navbar">
          <ul class="navbar-nav mr-auto">
            <li class="sm-nav-li">
              <img src="../assets/svg-dashboard-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0 active">Dashboard</span>
            </li>
            <li class="sm-nav-li">
              <img src="../assets/svg-device-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Device</span>
            </li>
            <li class="sm-nav-li">
              <img src="../assets/svg-apps-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Apps</span>
            </li>
            <li class="sm-nav-li">
              <img src="../assets/svg-security-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Security</span>
            </li>
            <li class="sm-nav-li">
              <img src="../assets/svg-account-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Account</span>
            </li>
            <li class="sm-nav-li">
              <img src="../assets/svg-support-normal.svg" alt="">
              <span class="nav-txt pl-1 pr-0">Support</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>
      <div class="content-view">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="whiteBg"></div>
            <div class="carousel-item active">
              <div class="img-fluid first-slide"></div>
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <div class="img-fluid second-slide"></div>
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item">
              <div class="img-fluid third-slide"></div>
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="weather-box">
              <span></span>
              <span class="weather-num">18</span>
              <span class="weather-unit">℃</span>
              <span class="weather-city">Shenzhen</span>
            </div>

            <div class="welcome d-flex">
              <div class="color-red welcome-hi">Hi&nbsp;</div>
              <div class="welcome-text"><span>Bob</span>, time to take a break</div>
            </div>


          </div>

          <div class="dialogs-box">
            <div class="row m-0">
              <div class="d-none d-md-block mb-2 dialogs shadow-none"></div>
              <div class="mb-2 bg-white dialogs">
                <div class="booted-top">
                  <p class="dialog-tit m-0">Just booted up!</p>
                  <p class="d-none d-md-block dialog-text m-0">I wish you a productive day</p>
                </div>
                <div class="booted-bott d-flex align-items-end">
                  <a href="" class="read-more">READ MORE ></a>
                  <img class="d-none d-md-block booted-icon" src="../assets/svg-boot-all.svg" alt="">
                </div>
              </div>
              <div class="mb-2 bg-white dialogs sm-pull">
                <div class="dialog-tit">Quick settings</div>
                <div class="d-flex flex-column setting-pd">
                  <div class="setting row">
                    <img class="setting-icon col-2" src="../assets/svg-contrast.svg" alt="">
                    <span class="dialog-text setting-name col-7 pr-0">Contrast</span>
                    <div id="toggle-contrast" class="d-flex form-check col-3 p-0">
                      <label class="switch mb-0 pr-3">
                        <input id="toggle" type="checkbox">
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="setting row">
                    <img class="setting-icon col-2" src="../assets/svg-battery.svg" alt="">
                    <span class="dialog-text setting-name col-7 pr-0">Battery saving</span>
                    <div id="toggle-battery" class="d-flex form-check col-3 p-0">
                      <label class="switch mb-0 pr-3">
                        <input id="toggle" type="checkbox">
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="setting row">
                    <img class="setting-icon col-2" src="../assets/svg-camera.svg" alt="">
                    <span class="dialog-text setting-name col-7 pr-0">Camera</span>
                    <div id="toggle-camera" class="d-flex form-check col-3 p-0">
                      <label class="switch mb-0 pr-3">
                        <input id="toggle" type="checkbox">
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="setting row">
                    <img class="setting-icon col-2" src="../assets/svg-contrast.svg" alt="">
                    <span class="dialog-text setting-name col-7 pr-0">Microphone</span>
                    <div id="toggle-microphone" class="d-flex form-check col-3 p-0">
                      <label class="switch mb-0 pr-3">
                        <input id="toggle" type="checkbox">
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="setting-bott">
                  <a href="" class="read-more">READ MORE ></a>
                </div>

              </div>
              <div class="mb-2 bg-white dialogs sm-push">
                <div class="dialog-tit color-green">System Healthy</div>
                <div class="d-none d-md-block ">
                  <div class="system-details">
                    <p class="m-0 dialog-text">Last check for update:</p>
                    <p class="m-0 dialog-text" id="system-update-time">2018/10/1</p>
                  </div>
                  <div class="system-details">
                    <p class="m-0 dialog-text">This year you have installed <span id="syetem-installed-count">110</span> updates form Vantage</p>
                  </div>
                </div>
                <div class="setting-bott">
                  <a href="" class="read-more">READ MORE ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="content-view">

        <div class="selected-news d-flex m-3">
          <div class="h2 color-red selected-tit">Selected news for you</div>
        </div>

        <div class="news-box d-none d-md-block news-box-lg pb-4">

          <div class="less-news">
            <div class="row m-2">
              <div class="col-12 col-md-5 mt-4 mb-4">
                <div class="news d-flex flex-column h-100">
                  <img class="news-img first-news-img" src="../assets/img-middle-1@2x.jpg" alt="">
                  <div class="news-details">
                    <a href="javascript:void(0);" class="news-link singleLine news-tit">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                    <a href="javascript:void(0);" class="news-link threeLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                    <span><span class="news-link news-src">ABC News</span><a href="javascript:void(0);" class="news-link show-more color-red">show more ></a></span>

                  </div>
                </div>
              </div>
              <div class="col-md-7 mb-4">
                <div class="row">
                  <div class="col-6 mt-4">
                    <div class="news">
                      <img class="news-img" src="../assets/img-small-1@2x.jpg" alt="">
                      <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                      <span class="news-link news-src">ABC News</span>
                    </div>
                  </div>
                  <div class="col-6 mt-4">
                    <div class="news">
                      <img class="news-img" src="../assets/img-small-2@2x.jpg" alt="">
                      <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                      <span class="news-link news-src">ABC News</span>
                    </div>
                  </div>
                  <div class="col-6 mt-4">
                    <div class="news">
                      <img class="news-img" src="../assets/img-small-3@2x.jpg" alt="">
                      <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                      <span class="news-link news-src">ABC News</span>
                    </div>
                  </div>
                  <div class="col-6 mt-4">
                    <div class="news">
                      <img class="news-img" src="../assets/img-small-4@2x.jpg" alt="">
                      <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                      <span class="news-link news-src">ABC News</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="more-news">
            <div class="row mt-4 pt-4 pb-4">
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-1@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-2@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-3@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-4@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
            </div>
            <div class="row mt-4 pt-4 pb-4">
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-1@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-2@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-3@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-4@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
            </div>
            <div class="row mt-4 pt-4 pb-4">
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-1@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-2@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-3@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-4@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
            </div>
            <div class="row mt-4 pt-4 pb-4">
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-1@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-2@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-3@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
              <div class="col-6 col-md-3">
                <div class="news">
                  <img class="news-img" src="../assets/img-small-4@2x.jpg" alt="">
                  <a href="javascript:void(0);" class="news-link twoLine news-desc">Carousels don’t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they’re not explicitly required. Add and customize as you see fit.</a>
                  <span class="news-link news-src">ABC News</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="news-box d-block d-md-none news-box-sm p-3">
            <div class="top-news">
                <p><a href="javascript:void(0);" class="news-link singleLine news-tit">How to become an everyday millionaire</a> </p>
                <p><img class="news-img first-news-im" src="../assets/img-middle-1@2x.jpg" alt=""></p>
                <p><a href="javascript:void(0);" class="news-link news-src">ABC News</a></p>
            </div>
            <div class="bott-news">
                <div class="bott-news-row">
                    <p><a href="javascript:void(0);" class="news-link twoLine news-tit">How to become an everyday millionaire</a> </p>
                    <p class="d-flex">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                    </p>
                    <p><a href="javascript:void(0);" class="news-link news-src">ABC News</a></p>
                </div>
                <div class="bott-news-row">
                    <p><a href="javascript:void(0);" class="news-link twoLine news-tit">How to become an everyday millionaire</a> </p>
                    <p class="d-flex">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                    </p>
                    <p><a href="javascript:void(0);" class="news-link news-src">ABC News</a></p>
                </div>
                <div class="bott-news-row">
                    <p><a href="javascript:void(0);" class="news-link twoLine news-tit">How to become an everyday millionaire</a> </p>
                    <p class="d-flex">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                        <img class="col-4 news-img first-news-im" src="../assets/img-small-1@2x.jpg" alt="">
                    </p>
                    <p><a href="javascript:void(0);" class="news-link news-src">ABC News</a></p>
                </div>
                    
            </div>
        </div>
      </div>
    </main>
  </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Index"
};
</script>

<style>
</style>