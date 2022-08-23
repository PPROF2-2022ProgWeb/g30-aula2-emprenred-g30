
package programacionjava;

/**
 *
 * @author Felipe
 */
public class Libro {
   
    private int isbn;
    private String titulo;
    private String autor;
    private int paginas;
    private String genero; 

    /* Constructor vacío  */
    public Libro() {
    }
    
     /* Constructor */

    public Libro(int isbn, String titulo, String autor, int paginas, String genero) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.genero = genero;
    }
    


    public int getIsbn() {
        return isbn;
    }

    public void setIsbn(int isbn) {
        this.isbn = isbn;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getPaginas() {
        return paginas;
    }

    public void setPaginas(int paginas) {
        this.paginas = paginas;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Libro{isbn=").append(isbn);
        sb.append(", titulo=").append(titulo);
        sb.append(", autor=").append(autor);
        sb.append(", paginas=").append(paginas);
        sb.append(", genero=").append(genero);
        sb.append('}');
        return sb.toString();
    }
    
    public void masPaginas(Libro libro1, Libro libro2){
        
        if(libro1.getPaginas()>libro2.getPaginas()){
            System.out.println(libro1.titulo + " es mayor, tiene " + libro1.paginas + " páginas");
        } else {
           System.out.println(libro2.titulo + " es mayor, tiene " + libro2.paginas + " páginas");
        }
      
       
    }
    
}
