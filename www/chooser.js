module.exports = {
    getFile: function (accept, successCallback, failureCallback) {
        if (typeof accept === "function") {
            failureCallback = successCallback;
            successCallback = accept;
            accept = undefined;
        }

        var result = new Promise(function (resolve, reject) {
            cordova.exec(
                function (json) {
                    if (json === "RESULT_CANCELED") {
                        resolve();
                        return;
                    }

                    try {
                        var o = JSON.parse(json);
                        resolve(o);
                    } catch (err) {
                        reject(err);
                    }
                },
                reject,
                "Chooser",
                "getFile",
                [
                    (typeof accept === "string"
                        ? accept.toLowerCase().replace(/\s/g, "")
                        : undefined) || "*/*",
                    // multiple: false
                    false,
                ],
            );
        });

        if (typeof successCallback === "function") {
            result.then(successCallback);
        }
        if (typeof failureCallback === "function") {
            result.catch(failureCallback);
        }

        return result;
    },
    getFiles: function (accept, successCallback, failureCallback) {
        if (typeof accept === "function") {
            failureCallback = successCallback;
            successCallback = accept;
            accept = undefined;
        }

        var result = new Promise(function (resolve, reject) {
            cordova.exec(
                function (json) {
                    if (json === "RESULT_CANCELED") {
                        resolve();
                        return;
                    }

                    try {
                        var o = JSON.parse(json);
                        resolve(o);
                    } catch (err) {
                        reject(err);
                    }
                },
                reject,
                "Chooser",
                "getFile",
                [
                    (typeof accept === "string"
                        ? accept.toLowerCase().replace(/\s/g, "")
                        : undefined) || "*/*",
                    // multiple: true
                    true,
                ],
            );
        });

        if (typeof successCallback === "function") {
            result.then(successCallback);
        }
        if (typeof failureCallback === "function") {
            result.catch(failureCallback);
        }

        return result;
    },
};
