export class Register {
    name: string;
    email: string;
    gender: boolean;
    phone: string;
    iAgree: boolean;

    constructor(
        name: string,
        email: string,
        gender: boolean,
        phone: string,
        iagree: boolean
    ) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.iAgree = iagree;
    }
}
