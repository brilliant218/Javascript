
<template id="#su-search-result">
    <div class="su-box">
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
</template>


