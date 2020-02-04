export class Pokemon {

    private _id: number;    
    private _nombre: string;
    private _imagen: string;
    private _habilidades: Array<string>;
    

    
    constructor(nombre:string){
        this.nombre=nombre;
        this.id=0;
        this.imagen='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/601px-Pok%C3%A9_Ball_icon.svg.png';
        this.habilidades=[];
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = (value != undefined && value!=='')? value : 'sin nombre';
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }

    public get habilidades(): Array<string> {
        return this._habilidades;
    }
    public set habilidades(value: Array<string>) {
        this._habilidades = value;
    }
}
