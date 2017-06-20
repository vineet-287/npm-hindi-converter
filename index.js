/**
 * Converts the given HTML into hindi by single font as of now. I will update this plugin for more support.
 * Please feel free to drop an email at vkv000@gmail.com
 *
 * @param  {String} html
 * @return {String}
 */

var hindiFonts = ["Krutidev10", "Chanakya"];

module.exports = {
    convert: function (html, font) {
        var index = hindiFonts.indexOf(font);
        
        if(index < 0){
            index = 0;
        }
        
        return convert_in_hindi(html, index);
    },
};

function convert_in_hindi(html, index) {

    var all_scripts = 2;  // number of total scripts dealt in this program

    var Lipi = new Array(all_scripts);  // stores the conversion pairs of various scripts

    var l_n = 0;  // counter to count scripts

    //== Lipi Conversion data =================

    // KrutiDev10 Font

    Lipi[0] = [
        "aa", "a",
        "ZZ", "Z",
        "=kk", "=k",
        "f=k", "f=",

        "Q+Z", "QZ+",
        "sas", "sa",
        "as", "sa",

        "‘", "\"",
        "’", "\"",
        "“", "'",
        "”", "'",

        "ƒ", "१",
        "„", "२",
        "…", "३",
        "†", "४",
        "‡", "५",
        "ˆ", "६",
        "‰", "७",
        "Š", "८",
        "‹", "९",
        "Œ", "०",
        "å", "०",

        "v‚", "ऑ",
        "vks", "ओ",
        "vkS", "औ",
        "vk", "आ",
        "v", "अ",
        "b±", "ईं",
        "Ã", "ई",
        "bZ", "ई",
        "b", "इ",
        "m", "उ",
        "Å", "ऊ",
        ",s", "ऐ",
        ",", "ए",
        "_", "ऋ",

        "d+", "क़",
        "[+", "ख़्",
        "x+", "ग़",
        "T+", "ज़्",
        "t+", "ज़",
        "M+", "ड़",
        "<+", "ढ़",
        "¶+", "फ़्",
        "Q+", "फ़",
        ";+", "य़",
        "j+", "ऱ",
        "u+", "ऩ",

        "d", "क",
        "D", "क्",
        "£", "ख्र",
        "[", "ख्",
        "x", "ग",
        "X", "ग्",
        "Ä", "घ",
        "?", "घ्",
        "³", "ङ",
        "p", "च",
        "P", "च्",
        "N", "छ",
        "t", "ज",
        "T", "ज्",
        ">", "झ",
        "÷", "झ्",
        "Ö", "झ्",
        "¥", "ञ",
        "V", "ट",
        "B", "ठ",
        "M", "ड",
        "<", "ढ",
        ".", "ण्",
        "r", "त",
        "R", "त्",
        "F", "थ्",
        "n", "द",
        "/", "ध्",
        "Ë", "ध्",
        "è", "ध्",
        "u", "न",
        "U", "न्",
        "i", "प",
        "I", "प्",
        "Q", "फ",
        "¶", "फ्",
        "c", "ब",
        "C", "ब्",
        "Ò", "भ",
        "H", "भ्",
        "e", "म",
        "E", "म्",
        ";", "य",
        "¸", "य्",
        "j", "र",
        "y", "ल",
        "Y", "ल्",
        "G", "ळ",
        "Üo", "श्व",
        "Ük", "श", // as used in 'shringaal' etc
        "Üz", "श्र्",
        "o", "व",
        "O", "व्",

        "'", "श्",
        "\"", "ष्",
        "l", "स",
        "L", "स्",
        "g", "ह",

        "Ñ", "कृ",
        "—", "कृ",
        "ô", "क्क",
        "ä", "क्त",
        "{", "क्ष्",
        "K", "ज्ञ",

        "ê", "ट्ट",
        "Í", "ट्ट",
        "ë", "ट्ठ",
        "Î", "ट्ठ",
        "ð", "ठ्ठ",
        "Ï", "ड्ड",
        "ì", "ड्ड",
        "ï", "ड्ढ",
        "Ô", "ड्ढ",

        "Ù", "त्त्",
        "=", "त्र",
        "«", "त्र्",
        "–", "दृ",
        "Ì", "द्द",
        "í", "द्द",
        "\)", "द्ध",
        "˜", "द्भ",
        "ö", "द्भ",
        "|", "द्य",
        "}", "द्व",
        "é", "न्न",
        "™", "न्न्",

        "ó", "स्त्र",
        "â", "हृ",
        "à", "ह्न",
        "ã", "ह्म",
        "á", "ह्य",
        "º", "ह्",

        "J", "श्र",
        "Ø", "क्र",
        "Ý", "फ्र",
        "æ", "द्र",
        "ç", "प्र",
        "Á", "प्र",
        "#", "रु",
        ":", "रू",

        "Ó", "्य",
        "î", "्य",
        "z", "्र",
        "ª", "्र",

        // "Ç" ,	"िं", 
        "È", "ीं",
        "Ê", "Zी",
        "\›", "Zैं",
        "õ", "Zैं",
        "±", "Zं",
        "Æ", "र्f",
        "É", "र्Ç",

        "्k", "",

        "‚", "ॉ",
        "¨", "ो",
        "®", "ो",
        "ks", "ो",
        "©", "ौ",
        "kS", "ौ",
        "h", "ी",
        "q", "ु",
        "w", "ू",
        "`", "ृ",
        "s", "े",
        "¢", "े", //suitable for ka
        "S", "ै",
        "a", "ं",
        "¡", "ँ",
        "%", "ः",
        "W", "ॅ",
        "•", "ऽ",
        "·", "ऽ",
        "∙", "ऽ",
        "·", "ऽ",
        "~", "्",
        "+", "़",
        "$", "+",
        "k", "ा",

        "A", "।",
        "ñ", "॰", // laaghava

        "\\", "?",
        " ः", " :",
        "^", "‘",
        "*", "’",
        "Þ", "“",
        "ß", "”",
        "(", ";",
        "¼", "(",
        "½", ")",
        "¿", "{",
        "À", "}",
        "¾", "=",
        "-", ".", // full stop?
        "&", "-",
        //"&" ,	"µ" ,
        "]", ",",
        "@", "/",

        "~ ", "् ",
        "ाे", "ो",
        "ाॅ", "ॉ",
        "े्र", "्रे",
        "अौ", "औ",
        "अो", "ओ",
        "आॅ", "ऑ",

        // α = ि  ; β = िं ; γ = र्  , as in धर्म .
        "f", "α",
        "Ç", "β",
        "Z", "γ"];


    //Walkman font

    Lipi[1] = [
        "¤", "", // ka aur fa kii bakuli--> kyaa isake binaa bhii pooraa ka/fa dikhataa hai? 
        "U", "",
        "ï", "",
        // correct anusvAr+ekAr, ekAr+nuqta to the reverse order
        "¢ð", "ð¢",
        "´ð", "ð´",
        "ð¸", "¸ð",
        "ú", "ॐ",
        //"¥æò" ,	"ऑ" ,
        "Cþ", "ष्ट्र",
        "Åþ", "ट्र",
        "Çþ", "ड्र",
        "Éþ", "ढ्र",
        "Àþ", "छ्र",
        "•¸", "क़",
        "¹¸", "ख़",
        "»¸", "ग़",
        "Á¸", "ज़",
        "Ç¸", "ड़",
        "É¸", "ढ़",
        "È¸", "फ़",
        "¸", "फ़्",
        "Ø¸", "य़",
        "Ú¸", "ऱ",
        "Ù¸", "ऩ",
        //"¸" ,	"" ,

        "$•", "क़",
        "$¹", "ख़",
        "$»", "ग़",
        "$Á", "ज़",
        "$Ç", "ड़",
        "$É", "ढ़",
        "$È", "फ़",
        "$", "फ़्",
        "$Ø", "य़",
        "$Ú", "ऱ",
        "$Ù", "ऩ",
        "$", "",
        "OE", "प्", // 12-11-13

        "A", "्र",
        "B", "ख्", // "क्च" ,
        "C", "ष्ट",
        "D", "ष्ठ",
        "E", "श्व",
        "F", "स्न",
        "G", "त्र",
        "H", "॥",
        "Ð", "।",
        "I", "ढ्ढ",
        "J", "छ्व",
        "K", "्य",
        "L", "रु",
        "M", "रू",
        "N", "हृ",
        "O", "ह्र",
        "P", "क्क",
        "Q", "क्त",
        "R", "क्र",
        "T", "भ्", // "ञ्ज" ,
        "V", "ङ्क",
        "W", "ङ्ख",
        "X", "ङ्ग",
        "Y", "ङ्घ",
        "`", "म्", // "क्व" ,
        "a", "ड्ड",
        "b", "ड्ढ",
        "d", "स्र",
        "e", "द्ग",
        "f", "द्घ",
        "g", "द्द",
        "h", "द्ध",
        "i", "द्ब",
        "j", "द्भ",
        "k", "द्म",
        "l", "द्य",
        "m", "द्व",
        "n", "ठ्ठ",
        "p", "श्च",
        "q", "ह्न",
        "r", "ह्म्",
        "s", "ह्य",
        "t", "ह्ल",
        "u", "ह्व",
        "ö", "ह्ण",
        "îæ", "त्त", // 12-11-13
        "î", "त्त्", // 12-11-13
        "žæ", "त्त",
        "ž", "त्त्",
        "#", "प्त",
        "%", "त्न",
        "@", "क्", // "ञ्च" ,
        "_", "ट्ठ",
        "„", "ल्ल",
        "¦", "ष्ट्व",
        // "¨" ,	"ङ्क्ष" ,  // commented on 12-11-13
        "¯", "ख्न",
        "µ", "ब्", // "द्ब्र" ,
        "º", "ख्र",
        "q", "ह्न",
        "Ê", "ज़्",
        "u", "ह्व",
        "g", "द्द",
        "Ÿæ", "श्र",
        "Ÿ", "श्र्",
        "^", "ट्ट",
        "h", "द्ध",
        "ý", "्र",
        "þ", "्र",
        "¥æò", "ऑ",
        "¥ô", "ओ",
        "¥æð", "ओ",
        "¥õ", "औ",
        "¥æñ", "औ",
        "¥æ", "आ",
        "¥", "अ",
        "§Z", "ईं",
        "§ü", "ई",
        "§", "इ",
        "©", "उ",
        "ª", "ऊ",
        "«", "ऋ",
        "¬", "ॠ",
        "­", "ऌ",
        "°ð", "ऐ",
        "°", "ए",
        "€", "क्",
        "¤", "क",
        //"•" ,	"क" ,
        "·", "क",
        "", "ख्",
        "¹", "ख",
        "‚", "ग्",
        "»", "ग",
        "ƒæ", "घ",
        "ƒ", "घ्",
        "¾", "ङ",
        "“", "च्च्",
        "‘", "च्",
        "¿", "च",
        "À", "छ",
        "”", "ज्ज्",
        "…", "ज्",
        "’", "ज्",
        "Á", "ज",
        "Ûæ", "झ",
        "Û", "झ्",
        "†æ", "ञ",
        "†", "ञ्",
        "Å", "ट",
        "Æ", "ठ",
        "Ç", "ड",
        "É", "ढ",
        "‡æ", "ण",
        "‡", "ण्",
        "ˆ", "त्",
        "Ì", "त",
        "‰", "थ्",
        "Í", "थ",
        "Î", "द",
        "¼", "द",
        "Š", "ध्",
        "Ï", "ध",
        "óæ", "न्न",
        "ó", "न्न्",
        "‹æ", "न",
        "Ù", "न",
        "‹", "न्",
        "Œ", "प्",
        "Â", "प",
        "", "फ्",
        "È", "फ",
        "Ž", "ब्",
        "Õ", "ब",
        "", "भ्",
        "Ö", "भ",
        "", "म्",
        "×", "म",
        "Ä", "य्",
        "Ø", "य",
        "Ú", "र",
        "Ë", "ल्",
        "Ü", "ल",
        "¶", "ल",
        "Ý", "ळ",
        "Ã", "व्",
        "ß", "व",
        "àæ", "श",
        "³æ", "श",
        "o", "श",
        "³", "श्",
        "à", "श्",
        "c", "ष्",
        "á", "ष",
        "S", "स्",
        "â", "स",
        "ã", "ह",
        "±", "ह्",
        "ÿæ", "क्ष",
        "ÿ", "क्ष्",
        "˜æ", "त्र",
        "˜", "त्र्",
        "™æ", "ज्ञ",
        "™", "ज्ञ्",
        "üð´", "ðZ",
        "æò", "ॉ",
        "æñ", "ौ",
        "æ", "ा",
        "è", "ी",
        "é", "ु",
        "ê", "ू",
        "ä", "ु",
        "å", "ू",
        "ë", "ृ",
        "ì", "ॄ",
        // "í" ,	"ॢ" ,
        "í", "र्ç", // 12-11-13
        "Ô", "े",
        "ñ", "ै",
        "ô", "ो",
        "õ", "ौ",
        "¢", "ं",
        "´", "ं",
        "¡", "ँ",
        "Ñ", "ः",
        "ò", "ॅ",
        "ù", "ऽ",
        "÷", "्",
        "ð", "े",
        "Z", "ंü",
        "0", "०",
        "1", "१",
        "2", "२",
        "3", "३",
        "4", "४",
        "5", "५",
        "6", "६",
        "7", "७",
        "8", "८",
        "9", "९",
        "®", "0",
        "v", "1",
        "w", "2",
        "x", "3",
        "y", "4",
        "z", "5",
        "{", "6",
        "|", "7",
        "}", "8",
        "~", "9",
        "्ो", "े",
        "्ौ", "ै",
        "्ाे", "े",
        "्ाा", "ा",
        "ाे", "ो",
        "ाे", "ो",
        "ाै", "ौ",
        "्ा", "",
        "ेे", "े",
        "ंं", "ं",
        "ाे", "ो",
        "ोे", "ो",
        "ओ े", "ओ", // "ओ" + "े" ,
        " ः", " :"];

    
    
    if (parseInt(index) === 0) {
        
        var modified_substring = html;

        //****************************************************
        //  Break the long text into small bunches of chunk_size  characters each.
        //****************************************************
        var text_size = modified_substring.length;

        var processed_text = '';  //blank

        var sthiti1 = 0;
        var sthiti2 = 0;
        var chale_chalo = 1;

        var chunk_size = 6000; // this charecter long text will be processed in one go.

        while (chale_chalo == 1)
        {
            sthiti1 = sthiti2;

            if (sthiti2 < (text_size - chunk_size))
            {
                sthiti2 += chunk_size;
                //      while (document.getElementById("Indian_script_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;} 
                //This was making problem if there is no 'space' in the whole document.
            } else {
                sthiti2 = text_size;
                chale_chalo = 0
            }

            var modified_substring = html.substring(sthiti1, sthiti2);

            Replace_Symbols( );

            var processed_text = processed_text + modified_substring;

        }


        // following statements for adjusting postion of choti i maatraas.

        processed_text = processed_text.replace(/([αβ])([कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ])/g, "$2$1");

        processed_text = processed_text.replace(/([αβ])((्[कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ])+)/g, "$2$1");

        processed_text = processed_text.replace(/α/g, "ि");
        processed_text = processed_text.replace(/β/g, "िं");


        //following three statement for adjusting position of reph ie, half r .

        processed_text = processed_text.replace(/([कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ])([ािीुूृेैोौंँ]*)([γ])/g, "$3$1$2");

        processed_text = processed_text.replace(/(([कखगघङचछजझञटठडढणतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़ड़ढ़फ़य़ऱऩ][्])+)([γ])/g, "$3$1");
        // Z is $3 here, NOT $2.

        processed_text = processed_text.replace(/γ/g, "र्");

        return processed_text;

        // ------------------------------------


        function Replace_Symbols( ) {

            //substitute array_two elements in place of corresponding array_one elements

            if (modified_substring != "")  // if string to be converted is non-blank then no need of any processing.
            {

                var input_str = modified_substring;
                var output_str = '';

                var output_script_number = index;  //pass index of select box font

                var ln_min = output_script_number - 1;
                var ln_max = index; //ln_min + 1

                if (output_script_number == 0) {
                    ln_min = 0;
                    ln_max = 1; //all_scripts;
                    chale_chalo = 0
                }


                for (l_n = ln_min; l_n < ln_max; l_n++)  // take each Script one by one
                {

                    modified_substring = input_str;

                    for (input_symbol_idx = 0; input_symbol_idx < Lipi[l_n].length; input_symbol_idx = input_symbol_idx + 2)  // Take each symbol of the script one by one

                    {
                        idx = modified_substring.indexOf(Lipi[l_n][input_symbol_idx])

                        while (idx != -1) //whie-00
                        {
                            modified_substring = modified_substring.replace(Lipi[l_n][ input_symbol_idx ], Lipi[l_n][input_symbol_idx + 1 ]);

                            idx = modified_substring.indexOf(Lipi[l_n][input_symbol_idx])
                        } // end of while-00 loop

                    } // end of inner for_loop

                    if (output_script_number == 0)  // if output is required assuming ALL FONTS
                    {
                        output_str = output_str;
                    }
                    output_str = output_str + modified_substring;


                } // end of outer for_loop

                modified_substring = output_str;

            } // end of IF  statement  meant to  supress processing of  blank  string.

        } // end of the function  Replace_Symbols
    } else {
        
        var modified_substring = html;
        
        var array_one_length = Lipi[index].length;
        
        processed_text = '';
        
        Replace_Symbols_chankya( );
        
        processed_text = modified_substring;
        
        return processed_text;

        function Replace_Symbols_chankya( ) {

            //substitute array_two elements in place of corresponding array_one elements

            if (modified_substring != "")  // if stringto be converted is non-blank then no need of any processing.
            {
                for (input_symbol_idx = 0; input_symbol_idx < array_one_length - 1; input_symbol_idx = input_symbol_idx + 2)

                {

                    idx = 0;  // index of the symbol being searched for replacement

                    while (idx != -1) //while-00
                    {

                        modified_substring = modified_substring.replace(Lipi[index][ input_symbol_idx ], Lipi[index][input_symbol_idx + 1])
                        idx = modified_substring.indexOf(Lipi[index][input_symbol_idx])

                    } // end of while-00 loop
                    // alert(" end of while loop")
                } // end of for loop
                // alert(" end of for loop")

                // **********************************************

                modified_substring = modified_substring.replace(/ç([कखगघङचछजझञटठडढड़ढ़णतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़फ़य़ऱऩ])([्])([कखगघङचछजझञटठडढढ़णतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़फ़य़ऱऩ])/g, "$1$2$3ि");

                modified_substring = modified_substring.replace(/ç([कखगघङचछजझञटठडढड़ढ़णतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़फ़य़ऱऩ])/g, "$1ि");

                modified_substring = modified_substring.replace(/¨([कखगघङचछजझञटठडढड़ढ़णतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़फ़य़ऱऩ])([्])([कखगघङचछजझञटठडढढ़णतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़फ़य़ऱऩ])/g, "$1$2$3िं");

                modified_substring = modified_substring.replace(/¨([कखगघङचछजझञटठडढड़ढ़णतथदधनपफबभमयरलळवशषसहक़ख़ग़ज़फ़य़ऱऩ])/g, "$1िं")


                // following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

                var position_of_wrong_ee = modified_substring.indexOf("िं्")

                while (position_of_wrong_ee != -1)  //while-03

                {
                    var consonent_next_to_wrong_ee = modified_substring.charAt(position_of_wrong_ee + 3)
                    var charecter_to_be_replaced = "िं्" + consonent_next_to_wrong_ee
                    modified_substring = modified_substring.replace(charecter_to_be_replaced, "्" + consonent_next_to_wrong_ee + "िं")
                    position_of_wrong_ee = modified_substring.search(/िं्/, position_of_wrong_ee + 3) // search for 'wrong ee' ahead of the current position. 

                } // end of while-03 loop


                // Eliminating reph "Ô" and putting 'half - r' at proper position for this.
                set_of_matras = "ा ि ी ु ू ृ े ै ो ौ ं ः ँ ॅ"
                var position_of_R = modified_substring.indexOf("ü")

                while (position_of_R > 0)  // while-04
                {
                    probable_position_of_half_r = position_of_R - 1;

                    //alert(" 3. probable_position_of_half_r = "+probable_position_of_half_r );

                    var character_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r)

                    //alert(" 4. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );

                    //************************************************************
                    // trying to find non-maatra position left to current O (ie, half -r).
                    //************************************************************

                    while (set_of_matras.match(character_at_probable_position_of_half_r) != null)  // while-05
                            // some vowel maatraa or anusvaar found, move to previous character
                            {
                                probable_position_of_half_r = probable_position_of_half_r - 1;
                                character_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r);

                            } // end of while-05

                    //************************************************************
                    // check if the previous character to the present character is a halant
                    //************************************************************
                    var previous_to_position_of_half_r = probable_position_of_half_r - 1;
                    //alert(" 7. previous_to_position_of_half_r = "+previous_to_position_of_half_r );

                    if (previous_to_position_of_half_r > 0)  // if-03
                    {
                        var character_previous_to_position_of_half_r = modified_substring.charAt(previous_to_position_of_half_r)
                        //alert(" 8. character_previous_to_position_of_half_r = "+character_previous_to_position_of_half_r );

                        while ("्".match(character_previous_to_position_of_half_r) != null) // while-06
                                //    halant found, move to previous character
                                {
                                    probable_position_of_half_r = previous_to_position_of_half_r - 1;
                                    character_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r);

                                    //alert(" 9. probable_position_of_half_r = "+probable_position_of_half_r );
                                    //alert("10. character_at_probable_position_of_half_r = "+character_at_probable_position_of_half_r );

                                    previous_to_position_of_half_r = probable_position_of_half_r - 1;
                                    character_previous_to_position_of_half_r = modified_substring.charAt(previous_to_position_of_half_r)

                                    //alert("11. previous_to_position_of_half_r = "+previous_to_position_of_half_r );
                                    //alert("12. character_previous_to_position_of_half_r = "+character_previous_to_position_of_half_r );
                                } // end of while-06
                    } // end of if-03

                    charecter_to_be_replaced = modified_substring.substr(probable_position_of_half_r, (position_of_R - probable_position_of_half_r));
                    new_replacement_string = "र्" + charecter_to_be_replaced;
                    charecter_to_be_replaced = charecter_to_be_replaced + "ü";
                    modified_substring = modified_substring.replace(charecter_to_be_replaced, new_replacement_string);
                    position_of_R = modified_substring.indexOf("ü");

                } // end of while-04

                //**********punctuation marks ****************
                //    "¡","£","¤","¥","²","³","´","µ","¹","À","Á","Â","Ã","Ä","Å","Æ","Ç","È","Ê","Ñ","Ò","Õ",
                // "{","}","[","]","!","(",")","*","-","/",":",";","<","=",">","?","@","|",",","!","\\","√","-",

                modified_substring = modified_substring.replace(/Ò/g, "‘");
                modified_substring = modified_substring.replace(/Ó/g, "’");

            } // end of IF  statement  meant to  supress processing of  blank  string.

        } // end of the function  Replace_Symbols
    }
} // end of Indian_Script_to_Devanagari function