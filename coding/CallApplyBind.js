
function getDetails(city, country, pincode) {
    console.log(this.name + " is in " + city, country, pincode);
}

const user = {
    name : "Ambadas"
}
const user2 = {
    name : "Babusha"
}
// call method
// getDetails.call(user, "Dudhani", "India", "413220");
// getDetails.call(user2, "Shawal", "India", "413216");

// apply method
// getDetails.apply(user, ["Dudhani", "India", "413220"]);
// getDetails.apply(user2, ["Shawal", "India", "413216"]);

// bind method
const fn = getDetails.bind(user, "Dudhani", "India", "41320");
fn(); // the output is Ambadas is in Dudhani India 41320

const fn2 = getDetails.bind(user2, "Shawal", "India", "413216");
fn2(); // the output is Babusha is in Shawal India 413216