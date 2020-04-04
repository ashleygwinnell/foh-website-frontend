import axios from 'axios';

let ctokens = [];

class APIHelper {

	static request(url, successCallback, errorCallback, finallyCallback)
	{
		if (ctokens[url]) { ctokens[url].cancel(); }
		ctokens[url] = axios.CancelToken.source();

		return axios.get(__API_HOST + url, {
					cancelToken: ctokens[url].token
				});
	}

	static cancel(url)
	{
		if (ctokens[url]) { ctokens[url].cancel(); }
	}
}
export default APIHelper;
