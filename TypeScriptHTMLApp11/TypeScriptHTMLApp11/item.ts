class Item {
    private nameItem: string;
    private price: number;
    private kasher: boolean;
    private maker: string;
    private validity: number;

    //print
    public print(): void {
        document.write(`item: ${this.nameItem}, Price: ${this.price}, kasher: ${this.kasher}, maker: ${this.maker}, validity: ${this.validity}`);
    }

    constructor(nameItem: string, price: number, kasher: boolean, maker: string, validity: number) {
        this.nameItem = nameItem;
        this.price = price;
        this.kasher = kasher;
        this.maker = maker;
        this.validity = validity;
    }

    public checkYear(thisYear: number = 2018): boolean {
        if (this.validity >= thisYear) {
            document.write("validity");
            return true;
        }
        else {
            document.write("not validity");
            return false;
        }
    }
}
