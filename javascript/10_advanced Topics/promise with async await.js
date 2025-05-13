// ******************** Example: Promise with async-await ******************** //

// Ek naya promise create kar rahe hain jo 1 second baad complete hoga
const promiseSix = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // Agar yeh true hota, to promise reject ho jata
    if (!error) {
      resolve({ name: "Javascript", password: 12345 }); // Agar error false hai to resolve ho jayega
    } else {
      reject("ERROR: Javascript went wrong"); // Agar error true hota, to reject ho jata
    }
  }, 1000); // 1 second ke delay ke baad ye execute hoga
});

// Ab ek async function banayenge jo promise ka response consume karega
async function consumePromiseSix() {
  try {
    // "await" ka use karke hum promise ka response ka wait karenge
    const response = await promiseSix; // Jab tak promise complete nahi hota, tab tak aage ka code execute nahi hoga
    console.log(response); // Agar promise resolve hota hai, to response print hoga
  } catch (error) {
    // Agar promise reject hota hai to error catch hoga
    console.log(error); // Error ka message print hoga
  }
}

// Function ko call kar rahe hain taaki promise execute ho
consumePromiseSix();
