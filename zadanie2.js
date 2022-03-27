const pers = {
    location: "City"
}

const stud = Object.create(pers);
stud.ownLocation = "City1";

function hasProperty(a, b) {

    let flag = false;

    for (let key in b) {

        if (key === a) {
            flag = true;
            break;
        }
    }
    return flag;
}

const HasProperty = hasProperty("location", stud);
console.log(HasProperty);