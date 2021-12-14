interface Country {
    countryName: string;
}

interface Miasto extends Country {
    cityName: string;
    buildingsQuantity?: number;
    cityPopulation?: number;
}

interface Dom extends Miasto {
    address: Address;
}

interface Address {
    streetName: string;
    apartmentNumber: number;
}

abstract class abstractMojDom {
    abstract get isHabited(): number;
}

class mojDom extends abstractMojDom implements Dom {
    address = {
        streetName: 'kubusia puchatka',
        apartmentNumber: 3,
    };
    cityName = 'Gliwice';
    countryName = 'Poland';
    get isHabited() {
        return this.address.apartmentNumber;
    }
    set isHabited(apartment: number) {
        this.address.apartmentNumber = apartment;
    }
}

const kossak = new mojDom();

console.log(kossak.isHabited);
kossak.isHabited = 123;
console.log(kossak.isHabited);

