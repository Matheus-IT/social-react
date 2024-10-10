export default class HttpClient {
  static async post(payload) {
    const res = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log('Response', res);

  }
}