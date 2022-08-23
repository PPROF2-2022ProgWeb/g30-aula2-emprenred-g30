package programacionjava;
/**
 *
 * @author Felipe
 */
public class Main {
    public static void main(String[] args) {
      
        /* Creamos los objetos libros junto a sus atributos*/
        Libro libro1 = new Libro(19992, "Rayuela", "Julio Cortázar", 728, "Ficción");
        Libro libro2 = new Libro(19993, "La nueva Conciencia Psicodélica", "Terence McKenna", 4000, "Esoterismo");
    
         /* Llamada a metodo toString en ambos libros  */
        
        System.out.println(libro1.toString());
        System.out.println(libro2.toString());
        
        
        /* Llamo al metodo masPaginas*/
        libro1.masPaginas(libro1, libro2);
       
    }
}
