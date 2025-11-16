const username = "Nupur";
const userAge = 21;
const isMember = true;
const hobbies = ["Reading", "Coding", "Music"];
const address = { city: "Delhi", pin: 110092 };
const partnerName = null;
let accountStatus;

const dataSummary = {
  username: {
    value: username,
    type: typeof username,
  },
  userAge: {
    value: userAge,
    type: typeof userAge,
  },
  isMember: {
    value: isMember,
    type: typeof isMember,
  },
  hobbies: {
    value: hobbies,
    type: Array.isArray(hobbies) ? "array" : typeof hobbies,
  },
  address: {
    value: address,
    type: typeof address,
  },
  partnerName: {
    value: partnerName,
    type: partnerName === null ? "null" : typeof partnerName,
  },
  accountStatus: {
    value: accountStatus,
    type: typeof accountStatus,
  },
};

console.table(dataSummary);
