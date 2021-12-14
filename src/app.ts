enum IDofDepartments {
    ACCOUNTING = 0,
    IT = 1,
}

const allDeps: Department[] = [];

class Department {
    protected employees: string[] = [];
    static waznyczlowiek: string = 'miki';
    constructor(public readonly id: number, public name: string) {}

    describe(): void {
        console.log(this);
    }

    addEmployees(newEmployees: string[]): void {
        this.employees = newEmployees;
    }

    addToAllDeps() {
        allDeps.push(this);
    }

    static showAllEmployees() {
        const alldeps: string[][] = [];
        // console.log(allDeps)
        // console.log(allDeps.map(dep => alldeps.push(dep.employees)))

        allDeps.map((dep) => alldeps.push(dep.employees));
        console.log(allDeps);
    }
}

class ITDep extends Department {
    constructor(public admins: string[]) {
        super(IDofDepartments.ACCOUNTING, 'IT');
    }
}

class AccountingDep extends Department {
    constructor(public reports: string[]) {
        super(IDofDepartments.IT, 'Accounting');
    }
}

const accountingDep = new AccountingDep(['Raport 1', 'Raport 2']);
accountingDep.addEmployees(['krzysiek', 'agata', 'piotrek']);
accountingDep.addToAllDeps();

const itDep = new ITDep(['Miki', 'Artur']);
itDep.addEmployees(['franek', 'paulina', 'kristof']);
itDep.addToAllDeps();

Department.showAllEmployees();
console.log(Department.waznyczlowiek)
