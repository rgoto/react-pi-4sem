import {ENDPOINT_FINDYOURAPP, ENDPOINT_FINDYOURAPP_FILTER} from "./Defaults";

class FindYourAppAPI {
  static fetchCallCaterogyAPI() {
    return new Promise((resolve, reject) => {
      const endpoint = ENDPOINT_FINDYOURAPP_FILTER + "category";

      fetch(endpoint)
        .then(res => {
          if (res.ok) {
            res.json().then(resolve);
          } else {
            res.text().then(reject);
          }
        })
        .catch(reject);
    });
  }

  static fetchCallGenryAPI() {
    return new Promise((resolve, reject) => {
      const endpoint = ENDPOINT_FINDYOURAPP_FILTER + "genry";

      fetch(endpoint)
        .then(res => {
          if (res.ok) {
            res.json().then(resolve);
          } else {
            res.text().then(reject);
          }
        })
        .catch(reject);
    });
  }

  static fetchCallTypeAPI() {
    return new Promise((resolve, reject) => {
      const endpoint = ENDPOINT_FINDYOURAPP_FILTER + "type";

      fetch(endpoint)
        .then(res => {
          if (res.ok) {
            res.json().then(resolve);
          } else {
            res.text().then(reject);
          }
        })
        .catch(reject);
    });
  }

  static fetchCallAndroidVersionAPI() {
    return new Promise((resolve, reject) => {
      const endpoint = ENDPOINT_FINDYOURAPP_FILTER + "android-version";

      fetch(endpoint)
        .then(res => {
          if (res.ok) {
            res.json().then(resolve);
          } else {
            res.text().then(reject);
          }
        })
        .catch(reject);
    });
  }

  static fetchCallContentRatingAPI() {
    return new Promise((resolve, reject) => {
      const endpoint = ENDPOINT_FINDYOURAPP_FILTER + "content-rating";

      fetch(endpoint)
        .then(res => {
          if (res.ok) {
            res.json().then(resolve);
          } else {
            res.text().then(reject);
          }
        })
        .catch(reject);
    });
  }

  static fetchSearchDataFromAPI(dataSearch) {
      return new Promise((resolve, reject) => {
          const endpoint = ENDPOINT_FINDYOURAPP + "find/advanced-search";

          fetch(endpoint, {
              method: 'POST',
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(dataSearch),
          })
              .then(res => {
                  if (res.ok) {
                      res.json().then(resolve);
                  } else {
                      res.text().then(reject);
                  }
              })
              .catch(reject);
      });
  }
}

export default FindYourAppAPI;
