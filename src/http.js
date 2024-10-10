export default class HttpClient {
  static host = 'http://localhost:8080/';

  static async post(uri, payload) {
    const res = await fetch(`${this.host}${uri}`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const resData = await res.json();
    console.log('Response', resData);
    return resData;
  }

  static async get(uri) {
    const res = await fetch(`${this.host}${uri}`);
    const resData = await res.json();
    console.log('Response', resData);
    return resData;
  }
}