package Java;

import java.util.Arrays;
import java.util.Random;

public class shuffleArray {

	public static void main(String[] args) {
		
		int[] array = { 1, 2, 3, 4, 5, 6, 7 };
		
		Random rand = new Random();
		
		for (int i = 0; i < array.length; i++) {
			int indexToSwap = rand.nextInt(array.length);
			int temp = array[indexToSwap];
			array[indexToSwap] = array[i];
			array[i] = temp;
		}
		System.out.println(Arrays.toString(array));
	}
}
