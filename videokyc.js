function generateHtmlContent() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Video KYC</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    
      <script type="text/javascript" async="" src="./NriOnboarding_files/rudder-analytics.min.js.download"></script>
      <script type="text/javascript" language="javascript" src="./NriOnboarding_files/sdk.min.js.download"></script>
      <style>
        * {
          box-sizing: border-box;
        }
    
        .kyc-modal {
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: #87CEFA;
          opacity: 0;
          visibility: hidden;
          transform: scale(1.1);
          z-index: 99999999999 !important;
          transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
        }
    
        .kyc-proceed-btn {
          font-weight: 500;
          color: white;
          padding: 5px;
          width: 15em;
          max-width: 220px;
          height: 3.3em;
          margin-right: 10px;
          margin-top: 10px;
          background-color: #000080;
          border-color: #6c757d;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          -webkit-user-select: none;
          user-select: none;
          border: 1px solid transparent;
          padding: .375rem .75rem;
          line-height: 1.5rem;
          border-radius: .25rem;
          transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
          margin-bottom: 1%;
        }
    
        .kyc-capture-btn {
          height: auto;
          width: 90vw;
          max-width: 400px;
          font-size: 2.3vh;
          padding: 2vh;
          margin-top: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          background-color: rgb(31, 162, 187);
          color: white;
          font-weight: 500;
        }
    
        .kyc-upload-btn {
          border: 1px solid #ccc;
          display: inline-block;
          padding: 6px 12px;
          cursor: pointer;
          margin-top: 25vh;
          color: black;
          background-color: #EFEFEF;
          padding: 2vh;
          border-radius: 10px;
          height: auto;
          width: 90vw;
          max-width: 400px;
          font-size: 2.3vh;
          background-color: rgb(31, 162, 187);
          margin-bottom: 0.5rem;
          color: white;
          font-weight: 500;
        }
    
        .kyc-preview-iframe {
          height: 42vh;
        }
    
        .kyc-preview-img {
          height: 35vh;
          width: 100%;
          max-width: 450px;
          max-height: 400px;
        }
    
        .kyc-bottom-instructions {
          font-size: 1.2em;
          margin-top: 0.5em;
          color: black;
          margin-top: 2.3em;
        }
    
        #kyc-retake-bottom-instructions {
          color: #E2574C;
        }
    
        .kyc-modal-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          padding: 1rem 1.5rem;
          width: 700px;
          height: calc(100% - 3em);
          overflow: hidden;
        }
    
        /* .kyc-instruction-div {
          height: 75vh;
          width: 100%;
          max-width: 450px;
        } */
    
        /* .kyc-instruction-small-div-left {
          height: 30%;
          width: 100%;
          max-width: 450px;
          display: grid;
          grid-template-columns: 60% 10% 30%;
        }
    
        .kyc-instruction-small-div-right {
          height: 30%;
          width: 100%;
          max-width: 450px;
          display: grid;
          grid-template-columns: 30% 10% 60%;
        } */
    
        .kyc-instruction-small-div-face-text {
          margin-top: 4%;
          width: 100%;
          max-width: 270px;
          display: grid;
          grid-template-columns: 10% 90%;
        }
    
        .kyc-instruction-selfie {
          height: 30vh;
          margin-top: 5%;
        }
    
        .kyc-instruction-props {
          display: grid;
          grid-template-columns: 30% 30% 30%;
          margin-top: 5%;
          grid-column-gap: 3%;
          font-size: 50px;
        }
    
        .kyc-instruction-props-img {
          width: 100%;
          max-height: 130px;
        }
    
        .kyc-instruction-props-text {
          font-size: 2vh;
        }
    
        .kyc-instruction-tick {
          height: 3vh;
          align-self: center;
        }
    
        .kyc-instruction-img-left {
          width: 100%;
          max-width: 230px;
          align-self: center;
        }
    
        .kyc-instruction-doc-text {
          align-self: center;
        }
    
        .kyc-selfie-img {
          max-width: 100%;
          max-height: 100%;
        }
    
        .kyc-close-button {
          float: left;
          width: 1.5rem;
          line-height: 1.5rem;
          text-align: center;
          cursor: pointer;
          border-radius: 0.25rem;
          background-color: white;
          font-size: 30px;
          margin-top: 0.3em;
          font-weight: 600;
        }
    
        .kyc-center-img {
          height: 75vh;
          width: 100%;
          max-width: 450px;
        }
    
        @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
          .kyc-instructions {
            margin-bottom: 1em !important;
          }
        }
    
        @media (min-width:320px) and (max-width:1025px) {
          .kyc-modal-content {
            width: 100%;
            height: 100%;
          }
    
          .kyc-instruction-props {
            margin-top: 10%;
          }
        }
    
        @media (min-width:1025px) {
          .kyc-modal-content {
            width: 50%;
            height: calc(100% - 3em);
            border-radius: 10px;
          }
        }
    
        .kyc-close-button:hover {
          background-color: darkgray;
        }
    
        .kyc-show-modal {
          opacity: 1;
          visibility: visible;
          transform: scale(1);
          transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
        }
    
        .kyc-title {
          font-weight: 600;
          font-size: 1.4em;
          margin-bottom: 0.1em;
          color: black;
          margin-right: 1.5em;
        }
    
        .kyc-instructions {
          font-size: 1em;
          margin-bottom: 0.5em;
          min-height: 3em;
          color: black;
        }
    
        .kyc-modal-footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 1em;
          margin: 0.25rem 0 0.75rem -1.5rem;
        }
    
        .footertext {
          font-size: 0.7em;
          line-height: 1em;
          color: black;
        }
    
        .footerimage {
          height: 1.5em;
          margin-bottom: -0.4em;
        }
    
        .kyc-btnposition {
          height: 4.8em;
        }
    
        .hypervergebtn {
          font-size: 2.3vh;
          overflow: hidden;
          height: 9vh;
          width: 45%;
          max-width: 25vh;
          margin-right: 0.4em;
          line-height: 0;
          color: #fff;
          background-color: rgb(31, 162, 187);
          border-color: #6c757d;
          display: inline-block;
          font-weight: 400;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          border: 1px solid transparent;
          line-height: 1.5rem;
          border-radius: .25rem;
          transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }
    
        .kyc-reupload-btn {
          background-color: white;
          color: rgb(31, 162, 187);
          border: 1px solid rgb(31, 162, 187);
        }
    
        .kyc-retake-screen-btn {
          background-color: white;
          color: rgb(31, 162, 187);
          border: 1px solid rgb(31, 162, 187);
          width: 90%;
          max-width: 40vh;
        }
    
        .kyc-retake-btn {
          background-color: white;
          color: rgb(31, 162, 187);
          border: 1px solid rgb(31, 162, 187);
        }
    
        .kyc-use-this-photo-btn {
          line-height: 0;
        }
    
        .kyc-user-choice-screen-title {
          padding-top: 5%;
          color: black;
          font-size: 1.2em;
          max-width: 400px;
        }
    
        .kyc-divforcover {
          bottom: 0em;
          position: absolute;
          width: 100%;
          margin-left: -1.5rem;
        }
    
        .kyc-qr-top-text {
          padding-top: 5%;
          color: black;
        }
    
        .kyc-qr-bottom-text {
          padding-top: 5%;
          color: black;
        }
    
        #kyc-cameraLoadingText {
          text-align: center;
        }
    
        .kyc-retake-screen-exclamation {
          height: 2em;
          margin-right: 0.5em;
          margin-bottom: 0.2em;
        }
    
        .kyc-center-element {
          font-family: 'Muli', sans-serif;
        }
    
        .kyc-doc-choice-screen-icons {
          height: 2.5vh;
          margin-right: 5px;
        }
    
        #kyc-camera-capture-button {
          cursor: pointer;
        }
    
        .kyc-preview-video {
          object-fit: cover;
          object-position: 50% 50%;
          border-radius: 0.4em;
        }
    
        .kyc-review-buttons {
          width: 100%;
        }
    
        .kyc-icon-img {
          width: auto;
        }
    
        .kyc-liveness-face-not-found {
          border-width: 0.5em;
          border-style: solid;
          border-color: red;
        }
    
        .kyc-liveness-face-found {
          border-width: 0.5em;
          border-style: solid;
          border-color: green;
        }
    
        @media (min-width: 1025px) {
          .kyc-modal-content[_ngcontent-mfp-c77] {
            width: 50%;
            height: calc(100% - 1em);
            border-radius: 10px;
          }
        }
    
        .modal[_ngcontent-mfp-c77] {
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
        }
      </style>
    </head>
    
    <body class="mat-typography">
    
      <div class="kyc-modal kyc-show-modal" id="HV_Face_popup_5T5tymxYxZ" id="closeModalButton">
        <div class="kyc-modal-content" id="kyc-face-instruction-screen"><span class="kyc-close-button"><i class="fas fa-times"></i>
        </span>
          <div>
            <center class="kyc-center-element">
              <div class="kyc-title">Video KYC Do's and Don'ts</div>
              <div class="kyc-instruction-div">
                <div class="kyc-instruction-small-div-face-text">
                  <i class="fas fa-check-circle" style="color: green;"></i> <!-- Green tick icon here -->
                  <div>Good Lighting on your face</div>
                </div>
                <div class="kyc-instruction-small-div-face-text">
                  <i class="fas fa-check-circle" style="color: green;"></i> <!-- Green tick icon here -->
                  <div>Look directly into the webcam</div>
                </div>
                <div class="kyc-instruction-selfie"><img src="sample.jpg" class="kyc-selfie-img">
                </div>
                <div class="kyc-instruction-props">
                  <div>
                    <i class="fas fa-lightbulb" style="color: green;"></i>
                    <p class="kyc-instruction-props-text">Bright Light</p>
                  </div>
                  <div>
                    <i class="fas fa-glasses" style="color: red;"></i>
                    <p class="kyc-instruction-props-text">No Glasses</p>
                  </div>
                  <div>
                    <i class="fas fa-hat-cowboy" style="color: red;"></i>
                    <p class="kyc-instruction-props-text">No Hat</p>
                  </div>
                </div>
       
              </div>
              <div class="kyc-divforcover" id="proceedButton" ><button class="kyc-proceed-btn">Proceed with Video KYC</button></div>
              <!-- <div class="kyc-modal-footer"><span class="footertext">Powered by Nikhil</span></div> -->
            </center>
          </div>
        </div>
      </div>
    </body>
    
    </html>
    `;
}

function generateVideoContent() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Document and Video Recorder</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f7f7f7;
                margin: 0;
                padding: 0;
            }
    
            h1 {
                background-color: #3498db;
                color: #fff;
                padding: 20px;
                margin: 0;
            }
    
            .container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
            }
    
            .input-group {
                margin: 10px;
                text-align: left;
            }
    
            label {
                font-weight: bold;
            }
    
            input[type="text"] {
                width: 100%;
                padding: 10px;
                margin: 5px 0;
                border: 2px solid #ccc;
                border-radius: 5px;
            }
    
            button {
                padding: 10px 20px;
                background-color: #3498db;
                color: #fff;
                border: none;
                margin: 10px;
                cursor: pointer;
                border-radius: 5px;
            }
    
            select {
                width: 100%;
                padding: 10px;
                border: 2px solid #ccc;
                border-radius: 5px;
            }
    
            #documentList {
                height: 150px;
            }
    
            video {
                width: 100%;
                max-width: 640px;
                border: 2px solid #ccc;
                border-radius: 5px;
            }
    
            .btn-group {
                display: flex;
                justify-content: space-around;
            }
    
            button[disabled] {
                background-color: #ccc;
                cursor: not-allowed;
            }
    
            .button-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
            }
    
            button + button {
                margin-left: 10px;
            }
        </style>
    </head>
    <body>
        <h1>Document and Video Recorder</h1>
        <div class="container">
            <div class="input-group">
                <label for="documentName"><i class="fas fa-file-alt"></i> Document Name:</label>
                <input type="text" id="documentName">
            </div>
            <div class="input-group">
                <button id="addDocument"><i class="fas fa-plus"></i> Add Document</button>
            </div>
            <div class="input-group">
                <select id="documentList" size="4">
                    <!-- Document list will be displayed here as options -->
                </select>
            </div>
            <div class="btn-group">
                <button id="startRecording" disabled><i class="fas fa-play"></i> Start Recording</button>
                <button id="stopRecording" disabled><i class="fas fa-stop"></i> Stop Recording</button>
            </div>
            <div>
                <video id="videoElement" controls autoplay style="display: none;"></video>
            </div>
            <div class="button-wrapper">
                <button id="removeDocument" disabled><i class="fas fa-trash-alt"></i> Remove Document</button>
                <button id="saveDocuments"><i class="fas fa-save"></i> Save Documents</button>
            </div>
        </div>
    </body>
    </html>
    
    
    `;

}

function closeModal() {
    const modal = document.getElementById("HV_Face_popup_5T5tymxYxZ");
    modal.classList.remove("kyc-show-modal");
    openModal();
}

function openModal() {
    const htmlElement = document.createElement("div");
    htmlElement.innerHTML = generateVideoContent();
    document.body.appendChild(htmlElement);

    // Get references to various HTML elements
    const documentNameInput = document.getElementById("documentName");
    const addDocumentButton = document.getElementById("addDocument");
    const documentList = [];
    const documentListSelect = document.getElementById("documentList");
    const startRecordingButton = document.getElementById("startRecording");
    const stopRecordingButton = document.getElementById("stopRecording");
    const videoElement = document.getElementById("videoElement");
    const removeDocumentButton = document.getElementById("removeDocument");
    const saveDocumentsButton = document.getElementById("saveDocuments");
    let mediaRecorder;
    const chunks = [];
    let currentDocument;
    let recordingDuration = 10000; // 10 seconds (in milliseconds)

    // Event listener for adding a new document
    addDocumentButton.addEventListener('click', function () {
        const documentName = documentNameInput.value.trim();
        if (documentName !== '') {
            documentList.push({ name: documentName, video: [] });
            updateDocumentList();
            documentNameInput.value = '';
        }
    });

    // Function to update the document list in the dropdown
    function updateDocumentList() {
        documentListSelect.innerHTML = '';
        documentList.forEach(function (document, index) {
            const option = new Option(document.name, index);
            documentListSelect.appendChild(option);
        });
    }

    // Event listener for changing the selected document in the dropdown
    documentListSelect.addEventListener('change', function () {
        currentDocument = documentList[documentListSelect.selectedIndex];
        if (currentDocument) {
            startRecordingButton.disabled = false;
            stopRecordingButton.disabled = true;
            removeDocumentButton.disabled = false;
            videoElement.style.display = 'block';
        } else {
            startRecordingButton.disabled = true;
            stopRecordingButton.disabled = true;
            removeDocumentButton.disabled = true;
            videoElement.style.display = 'none';
        }
    });

    // Event listener for starting video recording
    startRecordingButton.addEventListener('click', function () {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                videoElement.style.display = 'block'; // Make the video element visible
                videoElement.srcObject = stream; // Set the stream as the source for the video element
                mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.ondataavailable = function (e) {
                    if (e.data.size > 0) {
                        chunks.push(e.data);
                    }
                };

                // Set the onstop event handler when initializing the MediaRecorder
                mediaRecorder.onstop = function () {
                    const videoBlob = new Blob(chunks, { type: 'video/webm' });
                    currentDocument.video.push(videoBlob);
                    chunks.length = 0; // Clear the content of 'chunks'
                    startRecordingButton.disabled = false;
                    stopRecordingButton.disabled = true;
                };

                // Start recording
                mediaRecorder.start();
                console.log("Recording started");
                startRecordingButton.disabled = true;
                stopRecordingButton.disabled = false;

                // Automatically stop recording after the specified duration
                // setTimeout(function () {
                //     if (mediaRecorder.state === 'recording') {
                //         mediaRecorder.stop();
                //     }
                // }, recordingDuration);
            })
            .catch(function (err) {
                console.error('Error accessing the camera:', err);
            });
    });
    // Event listener for stopping video recording and converting it to base64
    stopRecordingButton.addEventListener('click', async function () {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            try {
                mediaRecorder.stop(); // Stop the video recording
                console.log("Recording stopped");
                videoElement.srcObject = null; // Release the video stream

                mediaRecorder.ondataavailable = async function (e) {
                    if (e.data.size > 0) {
                        chunks.push(e.data);
                        // Convert the Blob to base64 and store it
                        const videoBlob = new Blob(chunks, { type: 'video/webm' });
                        const base64Data = await blobToBase64(videoBlob);
                        currentDocument.video.push(base64Data);
                        chunks.length = 0; // Clear the content of 'chunks'
                    }
                };
            } catch (err) {
                console.error('Error while stopping recording:', err);
            }
        }
    });

    // Function to convert a Blob to Base64
    function blobToBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = function () {
                const base64Data = reader.result.split(',')[1]; // Get the Base64 data (remove data URL scheme)
                resolve(base64Data);
            };
            reader.readAsDataURL(blob);
        });
    }



    // Event listener for removing a document
    removeDocumentButton.addEventListener('click', function () {
        if (currentDocument) {
            const index = documentList.indexOf(currentDocument);
            if (index !== -1) {
                documentList.splice(index, 1);
                updateDocumentList();
            }
            currentDocument = null;
        }
    });

    // Event listener for saving documents
    saveDocumentsButton.addEventListener('click', function () {
        const dataToSave = JSON.stringify(documentList);
        console.log(documentList);
    });


}

const htmlElement = document.createElement("div");
htmlElement.innerHTML = generateHtmlContent();
document.body.appendChild(htmlElement);
document.getElementById("proceedButton").addEventListener("click", function () {
    closeModal();

});






