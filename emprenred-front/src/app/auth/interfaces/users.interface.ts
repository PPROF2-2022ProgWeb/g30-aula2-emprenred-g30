export interface Usuario {
    id:        number;
    nombre:    string;
    apellido:  string;
    localidad: string;
    fechaNac:  Date | string;
    email:     string;
    role:      string;

}