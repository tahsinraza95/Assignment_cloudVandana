package Java;

import java.util.Scanner;

public class pangramCheck {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the sentence: ");
        String input = sc.nextLine();

        boolean isPangram = checkIfPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String input) {
     
        boolean[] alphabetPresence = new boolean[26];

        input = input.toLowerCase();

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);

            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabetPresence[index] = true;
            }
        }
        
        for (boolean present : alphabetPresence) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}
