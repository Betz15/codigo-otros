import java.util.Scanner;//agrege la importación del modulo
public class Codigo5 {
	public static void main(String[] args) {//agregue psvm y puse el codigo adentro
		Scanner s = new Scanner(System.in);
		System.out.print("Introduzca un número: ");
		int ni = s.nextInt();//cambie el string a int, debido a que se solicita un numero
		int c = ni;

		int afo = 0;
		int noAfo = 0;

		while (ni > 0) {
			int digito =(ni % 10);//quite el int ya esta declado en la variable
			//obtenemos el modulo
			if ((digito == 3) || (digito == 7) || (digito == 8) || (digito == 9)) {
				afo++;
			} else {
				noAfo++;
			}
			ni /= 10;

		}
		//saque esto del while para que analice todos los digitos
		if (afo > noAfo) {
			System.out.println("El " + c + " es un número afortunado.");//estaba mal escrito el sout
		} else {
			System.out.println("El " + c + " no es un número afortunado.");
		}
		s.close();//agregue el s.close
	}

}
