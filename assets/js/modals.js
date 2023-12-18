/*
Modal functions that add modals to the page
*/

export function addDifficultyModal () {

  const modalsContainer = document.getElementById("modals-container");
  const modal = document.createElement("div");

  // Create the modal HTML
  const modalHTML = `
  <!-- Select Difficulty Modal -->
  <div class="modal fade" id="selectDifficultyModalToggle" data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden="true" aria-labelledby="selectDifficultyModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="selectDifficultyModalToggleLabel">Select Difficulty</h1>
            <button type="button" class="btn-close" onclick="window.location.href='index.html'"
              aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <button class="btn btn-success w-75 difficulty-btn" data-bs-target="#selectTopicModalToggle"
              data-bs-toggle="modal" data-difficulty="easy">
              Jingle Bells Level
            </button>
            <button class="btn btn-warning w-75 my-2 difficulty-btn" data-bs-target="#selectTopicModalToggle"
              data-bs-toggle="modal" data-difficulty="medium">
              Frosty the Snowman Level
            </button>
            <button class="btn btn-danger w-75 difficulty-btn" data-bs-target="#selectTopicModalToggle"
              data-bs-toggle="modal" data-difficulty="hard">
              Santa's Workshop Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ./Select Difficulty Modal -->
  `;

  // Insert the modal HTML into the modal container
  modal.innerHTML = modalHTML;
  modalsContainer.appendChild(modal);
}

export function addRulesModal() {

  const modalsContainer = document.getElementById("modals-container");
  const modal = document.createElement("div");

  // Create the modal HTML
  const modalHTML = `
  <!-- Rules Modal -->
  <div class="modal fade" id="rulesModal" tabindex="-1" aria-labelledby="rulesModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h1 class="modal-title fs-5 w-100 text-center" id="rulesModalLabel">Welcome to Santa's Quiz Adventure!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>Mission:</h5>
          <p>
            Help Santa and his magical sleigh reach the North Pole by answering Christmas-themed questions correctly.
            The journey is filled with joy and challenges, so put on your thinking cap and spread the holiday spirit!
          </p>

          <h5>Elfin Instructions:</h5>
          <!-- style list markers as stars -->
          <ul class="rule-markers">
            <li>
              Choose a difficulty level: Easy, Medium, or Hard.
              Each setting represents the magical journey's intensity and the number of lives Santa has.
              <ul class="list-unstyled">
                <li>🌟 Easy: 3 lives</li>
                <li>🌲 Medium: 2 lives</li>
                <li>❄️ Hard: 1 life</li>
              </ul>
            </li>
            <li>
              Answer questions correctly to advance Santa and his sleigh along the progress bar.
              The more questions you get right, the closer Santa gets to the enchanting North Pole.
            </li>
            <li>
              But beware! Incorrect answers may cost Santa precious lives(deers).
              Keep an eye on the remaining lives, and don't let them run out before reaching the North Pole!
            </li>
          </ul>

        </div>
        <div class="modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#selectDifficultyModalToggle">Ho-Ho Hurry!</button>
        </div>
      </div>
    </div>
  </div>
  <!-- ./Rules Modal -->
  `;

  // Insert the modal HTML into the modal container
  modal.innerHTML = modalHTML;
  modalsContainer.appendChild(modal);
}

export function addTopicModal() {

  const modalsContainer = document.getElementById("modals-container");
  const modal = document.createElement("div");

  // Create the modal HTML
  const modalHTML = `
  <!-- Select Topic Modal -->
    <div class="modal fade" id="selectTopicModalToggle" data-bs-backdrop="static" data-bs-keyboard="false"
      aria-hidden="true" aria-labelledby="selectTopicModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="selectTopicModalToggleLabel">Select Topic</h1>
            <button type="button" class="btn-close" onclick="window.location.href='index.html'"
              aria-label="Close"></button>
          </div>
          <div id="topic-list" class="modal-body text-center">
            <!-- Use JS to populate the topics. See assets/js/game-display.js -> displayAvailableTopics -->
          </div>
        </div>
      </div>
    </div>
  <!-- ./Select Topic Modal -->
  `;

  // Insert the modal HTML into the modal container
  modal.innerHTML = modalHTML;
  modalsContainer.appendChild(modal);
}
