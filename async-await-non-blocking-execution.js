function handleErrors(err) {
  console.error(err);
  process.exit(1);
}

async function main(isNonBlocking = false) {
  const data = await getData();
  console.log("Received data");
  if (isNonBlocking) {
    sendEmail(data.to, { subject: "Hello", message: "Hello, World!" })
      .then(() => {
        console.log("Non blocking email sent");
      })
      .catch(handleErrors);
  } else {
    await sendEmail(data.to, { subject: "Hello", message: "Hello, World!" });
    console.log("Blocking email sent");
  }
  await finalize();
  console.log("Done main function");
}

function getData() {
  const data = {
    to: "hey@dmitryshvetsov.com",
  };
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 350);
  });
}

function finalize() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 100);
  });
}

function sendEmail(recipient, data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ to: recipient, ...data, sent: true }), 1250);
  });
}

console.log(process.argv, Boolean(process.argv[2]));

main(Boolean(process.argv[2])).catch(handleErrors);
