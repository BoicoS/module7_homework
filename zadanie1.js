const pers = {
    location: "City"
}

const stud = Object.create(pers);
stud.ownLocation = "City1";

function getownProp(a) {

    for (let key in a) {

        if (a.hasOwnProperty(key)) {

            console.log(key); // ownLocation
        }
    }
}

getownProp(stud); 