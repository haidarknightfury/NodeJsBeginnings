// start the server with the path for the data
mongod.exe --dbpath /Users/Haidar/mongo-data

mongo.exe
db.Todos.insert({text:'create a todo'})
db.Todos.find()

// mongo db vocabulary

- table - collection
- row/record - called a document {...}
- column - field

in mongoDB - a document doesnt need to follow all the fields of one another

# Interacting with mongo from node

- node-mongo-native library
- driver 


# ID property

```java
    import java.util.Scanner;

/**
 *
 * @author yud
 */
public class Encrypt2 {
      /* encrypt and decrypt a text using a simple algorithm of offsetting the letters */
    
    static char[] chars = {
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
        'y', 'z', '0', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', 'A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@',
        '#', '$', '%', '^', '&', '(', ')', '+',
        '-', '*', '/', '[', ']', '{', '}', '=',
        '<', '>', '?', '_', '"', '.', ',', ' '
    };
    
    public static void main(String[] args) {
             Scanner text = new Scanner(System.in);
               System.out.println("please enter your text: ");
                String st = text.nextLine();
             
        int offset = 5;
        
        String enc = encrypt(st, offset);
        System.out.println("Encrypted text: " + enc);
        
      
    }

    // Caesar cipher
    static String encrypt(String text, int offset)
    {
        char[] plain = text.toCharArray();

        for (int i = 0; i < plain.length; i++) {
            for (int j = 0; j < chars.length; j++) {
                if (j <= chars.length - offset) {
                    if (plain[i] == chars[j]) {
                        plain[i] = chars[j + offset];
                        break;
                    }
                } 
                else if (plain[i] == chars[j]) {
                    plain[i] = chars[j - (chars.length - offset + 1)];
                }
            }
        }
        return String.valueOf(plain);
    }


    build askii array ARR with all the alphabets and special characters
    input <- input from user
    for each character CI in input
        for each character CJ in askii array
            find index J , where character of input is equal to character in ARR
            check if offset can be added to index j (check if not out of array bounds)
            if bound not exceeded:
                add offset to index J and change CI to ARR[J + Offset]
            else:
                treat ARR as a circular array and calculate the encrypted character as J - ARR.size - offset + 1

```

