async function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value;
  if (!msg) return;

  document.getElementById("messages").innerHTML += `<p><strong>You:</strong> ${msg}</p>`;
  input.value = "";

  const res = await fetch("http://localhost:3000/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: msg })
  });

  const data = await res.json();
  document.getElementById("messages").innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
}
