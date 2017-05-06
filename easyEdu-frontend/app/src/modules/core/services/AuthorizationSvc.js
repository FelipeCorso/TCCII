define(function() {
    'use strict';
    Service.$inject = ['$http', '$q'];
    /*@ngInject*/
    function Service($http, $q) {

        // The Browser API key obtained from the Google Developers Console.
        var DEVELOPER_KEY = 'AIzaSyAd8ZduEoRZnx2cf4l0d1cqRVuaJtx4J0c';

        // Client ID and API key from the Developer Console
        var CLIENT_ID = '661558756492-p0agpbu1e13ac7npde96ts04mb6mv9o4.apps.googleusercontent.com';

        // Array of API discovery doc URLs for APIs used by the quickstart
        var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

        // Replace with your own project number from console.developers.google.com.
        // See "Project number" under "IAM & Admin" > "Settings"
        var APP_ID = "661558756492";

        // Authorization scopes required by the API; multiple scopes can be
        // included, separated by spaces.
        var SCOPES = 'https://www.googleapis.com/auth/drive.file';

        var GOOGLE_DRIVE_NAME_ROOT_FOLDER = "EasyEdu";

        var pickerApiLoaded = false;
        var oauthToken;
        var initialized = $q.defer();
        var isSignedIn = false;
        var service = {};

        service.isSignedInGoogle = isSignedInGoogle;
        service.handleAuthClick = handleAuthClick;
        service.handleSignOutClick = handleSignOutClick;
        service.handleUploadClick = handleUploadClick;
        service.handleCreateFolderClick = handleCreateFolderClick;
        service.initialized = initialized.promise;
        service.getFolder = getFolder;
        service.getFile = getFile;
        service.isExistRootFolder = isExistRootFolder;
        service.createRootFolder = createRootFolder;
        service.createFolder = createFolder;
        service.createFile = createFile;

        init();

        return service;

        /**
         *  On load, called to load the auth2 library and API client library.
         */
        function init() {
            gapi.load('client:auth2', initClient);
            // gapi.load('picker', {'callback': onPickerApiLoad});
        }

        /**
         *  Initializes the API client library and sets up sign-in state
         *  listeners.
         */
        function initClient() {
            gapi.client.init({
                discoveryDocs: DISCOVERY_DOCS,
                clientId: CLIENT_ID,
                scope: SCOPES
            }).then(function() {
                initialized.resolve();
                // Listen for sign-in state changes.
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);

                // Handle the initial sign-in state.
                updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            });
            gapi.auth.authorize(
                {
                    'client_id': CLIENT_ID,
                    'scope': SCOPES,
                    'immediate': false
                },
                handleAuthResult);
        }

        function onPickerApiLoad() {
            pickerApiLoaded = true;
            createPicker();
        }

        function handleAuthResult(authResult) {
            if (authResult && !authResult.error) {
                oauthToken = authResult.access_token;
                createPicker();
            }
        }

        // Create and render a Picker object for searching images.
        function createPicker() {
            if (pickerApiLoaded && oauthToken) {
                // var viewImages = new google.picker.View(google.picker.ViewId.DOCS_IMAGES);
                var view = new google.picker.View(google.picker.ViewId.DOCS);
                view.setMimeTypes("image/png,image/jpeg,image/jpg");
                var picker = new google.picker.PickerBuilder()
                    .setAppId(APP_ID)
                    .setOAuthToken(oauthToken)
                    .addView(view)
                    .addView(new google.picker.DocsUploadView())
                    .setDeveloperKey(DEVELOPER_KEY)
                    .setCallback(pickerCallback)
                    .build();
                picker.setVisible(true);
            }
        }

        // A simple callback implementation.
        function pickerCallback(data) {
            /*
             if (data.action == google.picker.Action.PICKED) {
             var fileId = data.docs[0].id;
             alert('The user selected: ' + fileId);
             */
            var url = 'nothing';
            if (data[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                var doc = data[google.picker.Response.DOCUMENTS][0];
                url = doc[google.picker.Document.URL];
            }
            var message = 'You picked: ' + url;
            // document.getElementById('result').innerHTML = message;
        }

        /**
         *  Called when the signed in status changes, to update the UI
         *  appropriately. After a sign-in, the API is called.
         */
        function updateSignInStatus(_isSignedIn) {
            isSignedIn = _isSignedIn;
        }

        function isSignedInGoogle() {
            return isSignedIn;
        }

        /**
         *  Sign in the user upon button click.
         */
        function handleAuthClick(event) {
            gapi.auth2.getAuthInstance().signIn()
                .then(isSignedIn = true);
        }

        /**
         *  Sign out the user upon button click.
         */
        function handleSignOutClick(event) {
            gapi.auth2.getAuthInstance().signOut()
                .then(isSignedIn = false);
        }

        function handleUploadClick(event) {
            createFile('aaa', function() {
                alert('foi');
            });
        }

        function handleCreateFolderClick(event) {
            createFolder(folderNameInput.value, function() {
                alert('Created folder');
            });
        }

        /**
         * Cria uma pasta e retorna o ID no callback
         */
        function createFolder(folderName, parentId) {
            var future = $q.defer();
            var body = {
                'mimeType': "application/vnd.google-apps.folder"
            };
            if (folderName) {
                body.name = folderName;
            } else {
                future.reject("The parameter 'folderName' must be passed");
            }
            if (parentId) {
                body.parents = [parentId];
            }

            var request = gapi.client.drive.files.create({
                'resource': body
            });

            request
                .then(function(response) {
                    console.log('Folder ID: ' + response.id);
                    future.resolve(response);
                }, function(error) {
                    future.reject(error);
                });
            return future.promise;
        }

        /**
         * Insert new file.
         *
         * @param {File} fileData File object to read data from.
         * @param {Function} callback Function to call when the request is complete.
         */


        /**
         * Insert new file
         *
         * @param {string} fileName  The name of file.
         * @param {File} fileData File object to read data from.
         * @param folderId The id of parent. Must be informed.
         */
        function createFile(fileName, fileData, folderId) {
            const boundary = '-------314159265358979323846';
            const delimiter = "\r\n--" + boundary + "\r\n";
            const close_delim = "\r\n--" + boundary + "--";

            //var reader = new FileReader();
            //reader.readAsBinaryString(fileData);
            //reader.onload = function(e) {
            var future = $q.defer();
            var contentType = "text/plain" || 'application/octet-stream';
            var metadata = {};
            if (fileName) {
                metadata.name = fileName;
            } else {
                future.reject("The parameter 'fileName' must be passed");
            }
            if (folderId) {
                metadata.parents = [folderId];
            } else {
                future.reject("The parameter 'folderId' must be passed");
            }

            var base64Data = btoa(fileData);
            var multipartRequestBody =
                delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(metadata) +
                delimiter +
                'Content-Type: ' + contentType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n' +
                '\r\n' +
                base64Data +
                close_delim;

            var request = gapi.client.request({
                'path': '/upload/drive/v3/files',
                'method': 'POST',
                'params': {'uploadType': 'multipart'},
                'headers': {
                    'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                },
                'body': multipartRequestBody
            });

            request
                .then(function(response) {
                        future.resolve(response);
                    },
                    function(error) {
                        future.reject(error);
                    }
                );

            return future.promise;
        }

        /**
         * Retrieve a list of File resources.
         *
         * @param {Function} callback Function to call when the request is complete.
         */
        function retrieveAllFiles(callback) {
            var retrievePageOfFiles = function(request, result) {
                request.execute(function(resp) {
                    result = result.concat(resp.files);
                    var nextPageToken = resp.nextPageToken;
                    if (nextPageToken) {
                        request = gapi.client.drive.files.list({
                            'pageToken': nextPageToken
                        });
                        retrievePageOfFiles(request, result);
                    } else {
                        callback(result);
                    }
                });
            };
            var initialRequest = gapi.client.drive.files.list({
                q: "mimeType = 'application/vnd.google-apps.folder' and name = 'EasyEdu Test API'"
            });
            retrievePageOfFiles(initialRequest, []);
        }

        function getFolder(name, parentId) {
            return _getFile(parentId, true, name);
        }

        function getFile(parentId, name) {
            return _getFile(parentId, false, name);
        }

        function isExistRootFolder() {
            return _getFile("root", true, GOOGLE_DRIVE_NAME_ROOT_FOLDER);
        }

        function createRootFolder() {
            return createFolder(GOOGLE_DRIVE_NAME_ROOT_FOLDER, "root");
        }

        function _getFile(parentId, isFolder, fileName) {
            var future = $q.defer();
            var q = [];
            if (parentId) {
                q.push("'" + parentId + "' in parents");
            }
            q.push("mimeType " + (isFolder ? "=" : "!=") + " 'application/vnd.google-apps.folder'");
            q.push("name = '" + fileName + "'");
            gapi.client.drive.files.list({
                q: q.join(" and "),
                spaces: "drive",
                pageSize: 1
            })
                .then(function(response) {
                    if (response.result && response.result.files) {
                        future.resolve(response.result.files[0]);
                    } else {
                        future.resolve(undefined);
                    }
                }, function(error) {
                    future.reject(error);
                });

            return future.promise;
        }

        function getAllContacts() {
            var future = $q.defer();
            $http.get('./src/modules/contactList/data/contacts.json')
                .then(function(response) {
                    future.resolve({
                        items: response.data
                    });
                }).catch(function(data, status) {
                future.reject({
                    data: data,
                    status: status
                });
            });
            return future.promise;
        }

    }

    return Service;
});