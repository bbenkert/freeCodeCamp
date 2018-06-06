//capitalize the first letter in each word of a string


function titleCase(str) {
  //convert string to array i'm,a,little,tea,pot
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    // convert array into i,',m,a,l,i,t,t,l,e,t,e,a,p,o,t
    str[i] = str[i].split("");
    // capitalizing each first letter I,',m,A,L,i,t,t,l,e,T,e,a,P,o,t
    str[i][0] = str[i][0].toUpperCase();
    //convert back to array of each word I'm,A,Little,Tea,Pot
    str[i] = str[i].join("");
  }

  //join array together into a string I'm A Little Tea Pot
  return str.join(" ");
}
titleCase("I'm a little tea pot");
