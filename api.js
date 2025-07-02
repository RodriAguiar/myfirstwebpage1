const token = "0133ea5d6d0289"; // Replace with your IPinfo token

function lookupIP() {
  const ip = document.getElementById('ipInput').value.trim();
  const url = ip ? `https://ipinfo.io/${ip}/json?token=${token}` : `https://ipinfo.io/json?token=${token}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        document.getElementById('result').innerHTML = `<p style="color:red;">Error: ${data.error.message}</p>`;
        return;
      }

      const table = `
        <table>
          <tr><th>Field</th><th>Value</th></tr>
          <tr><td>IP</td><td>${data.ip}</td></tr>
          <tr><td>City</td><td>${data.city || ''}</td></tr>
          <tr><td>Region</td><td>${data.region || ''}</td></tr>
          <tr><td>Country</td><td>${data.country || ''}</td></tr>
          <tr><td>Location</td><td>${data.loc || ''}</td></tr>
          <tr><td>Postal</td><td>${data.postal || ''}</td></tr>
          <tr><td>Timezone</td><td>${data.timezone || ''}</td></tr>
          <tr><td>Org</td><td>${data.org || ''}</td></tr>
        </table>
      `;
      document.getElementById('result').innerHTML = table;
    })
    .catch(err => {
      console.error(err);
      document.getElementById('result').innerHTML = `<p style="color:red;">Failed to fetch data</p>`;
    });
}
