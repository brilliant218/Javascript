<template id="carousecontentview">
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
                  <img class="d-none d-md-block booted-icon" src="img/svg-boot-all.svg" alt="">
                </div>
              </div>
              <div class="mb-2 bg-white dialogs sm-pull">
                <div class="dialog-tit">Quick settings</div>
                <div class="d-flex flex-column setting-pd">
                  <div class="setting row">
                    <img class="setting-icon col-2" src="img/svg-contrast.svg" alt="">
                    <span class="dialog-text setting-name col-7 pr-0">Contrast</span>
                    <div id="toggle-contrast" class="d-flex form-check col-3 p-0">
                      <label class="switch mb-0 pr-3">
                        <input id="toggle" type="checkbox">
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="setting row">
                    <img class="setting-icon col-2" src="img/svg-battery.svg" alt="">
                    <span class="dialog-text setting-name col-7 pr-0">Battery saving</span>
                    <div id="toggle-battery" class="d-flex form-check col-3 p-0">
                      <label class="switch mb-0 pr-3">
                        <input id="toggle" type="checkbox">
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="setting row">
                    <img class="setting-icon col-2" src="img/svg-camera.svg" alt="">
                    <span class="dialog-text setting-name col-7 pr-0">Camera</span>
                    <div id="toggle-camera" class="d-flex form-check col-3 p-0">
                      <label class="switch mb-0 pr-3">
                        <input id="toggle" type="checkbox">
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <div class="setting row">
                    <img class="setting-icon col-2" src="img/svg-contrast.svg" alt="">
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
</template>
=

